(function () {
  "use strict";

  const defaults = {
    welcome: true,
    welcomeTitle: "Welcome to the guided tour!",
    welcomeText: "Click to start a brief tour of our site. Here we'll point out important features and tips to make your experience easier. ",
    overlay: true,
    escClose: true,
    keyNav: true,
  };
  let guides = [];
  let options = { ...defaults };
  let overlay;
  let activeIndex = -1;
  let keyHandler;
  let resizeHandler;

  function makeButton(text, callback) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = text;
    button.addEventListener("click", callback);
    return button;
  }

  function appendCloseButton(parent) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "guidely-close-trigger";
    button.setAttribute("aria-label", "Close tour");
    button.title = "Close tour";
    button.textContent = "x";
    button.addEventListener("click", close);
    parent.append(button);
  }

  function hideSteps() {
    document.querySelectorAll(".guidely-guide").forEach((guide) => { guide.hidden = true; });
    document.querySelectorAll(".guidely-number").forEach((number) => { number.hidden = true; });
    if (overlay) overlay.hidden = true;
    if (keyHandler) document.removeEventListener("keyup", keyHandler);
    if (resizeHandler) window.removeEventListener("resize", resizeHandler);
    activeIndex = -1;
  }

  function positionStep(index) {
    const guide = document.getElementById(`guidely-guide-${index + 1}`);
    const badge = document.getElementById(`guidely-number-${index + 1}`);
    if (!guide || !badge) return;
    const badgeTop = Number.parseFloat(badge.style.top);
    const badgeLeft = Number.parseFloat(badge.style.left);
    const guideWidth = guide.getBoundingClientRect().width;
    const documentWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
    let left = badgeLeft + badge.offsetWidth - 30;
    if (left + guideWidth > documentWidth) {
      left = badgeLeft - guideWidth + 30;
      guide.classList.add("guidely-anchor-right");
    } else {
      guide.classList.remove("guidely-anchor-right");
    }
    guide.style.top = `${badgeTop + 15}px`;
    guide.style.left = `${left}px`;
  }

  function positionBadges() {
    guides.forEach((step, index) => {
      const badge = document.getElementById(`guidely-number-${index + 1}`);
      const target = document.querySelector(step.attachTo);
      if (!badge || !target) return;
      const rect = target.getBoundingClientRect();
      const [vertical = "top", horizontal = "left"] = (step.anchor || "top-left").split("-");
      const verticalOffset = vertical === "middle" ? rect.height / 2 : vertical === "bottom" ? rect.height : 0;
      const horizontalOffset = horizontal === "middle" ? rect.width / 2 : horizontal === "right" ? rect.width : 0;
      badge.style.top = `${window.scrollY + rect.top + verticalOffset - 22.5}px`;
      badge.style.left = `${window.scrollX + rect.left + horizontalOffset - 22.5}px`;
    });
  }

  function showStep(index) {
    if (index < 0 || index >= guides.length) return;
    document.querySelectorAll(".guidely-guide:not(#guide-welcome)").forEach((guide) => { guide.hidden = true; });
    activeIndex = index;
    const guide = document.getElementById(`guidely-guide-${index + 1}`);
    document.querySelectorAll(".guidely-number").forEach((number) => { number.style.zIndex = "10002"; });
    document.querySelectorAll(".guidely-guide").forEach((item) => { item.style.zIndex = "10001"; });
    const badge = document.getElementById(`guidely-number-${index + 1}`);
    if (badge) badge.style.zIndex = "20001";
    guide.hidden = false;
    positionStep(index);
    guide.style.zIndex = "20000";
    guide.querySelector(".guidely-controls button")?.focus();
  }

  function close() {
    hideSteps();
    const welcome = document.getElementById("guide-welcome");
    if (welcome) welcome.hidden = true;
  }

  function next() {
    if (activeIndex === guides.length - 1) close();
    else showStep(activeIndex + 1);
  }

  function previous() {
    if (activeIndex > 0) showStep(activeIndex - 1);
  }

  function start() {
    hideSteps();
    if (options.overlay && overlay) overlay.hidden = false;
    document.querySelectorAll(".guidely-number").forEach((number) => { number.hidden = false; });
    window.scrollTo(0, 0);
    positionBadges();
    keyHandler = (event) => {
      if (event.key === "Escape" && options.escClose) close();
      if (event.key === "ArrowRight" && options.keyNav) next();
      if (event.key === "ArrowLeft" && options.keyNav) previous();
    };
    resizeHandler = () => {
      positionBadges();
      if (activeIndex >= 0) positionStep(activeIndex);
    };
    document.addEventListener("keyup", keyHandler);
    window.addEventListener("resize", resizeHandler);
    showStep(0);
  }

  function add(guide) {
    if (guide && guide.attachTo && guide.text) guides.push({ anchor: "top-left", ...guide });
  }

  function init(config = {}) {
    options = { ...defaults, ...config };
    if (!guides.length) return;
    document.querySelectorAll(".guidely-overlay, .guidely-number, .guidely-guide").forEach((element) => element.remove());

    overlay = document.createElement("div");
    overlay.className = "guidely-overlay";
    overlay.hidden = true;
    document.body.append(overlay);

    guides.forEach((step, index) => {
      if (!document.querySelector(step.attachTo)) return;
      const badge = document.createElement("button");
      badge.type = "button";
      badge.id = `guidely-number-${index + 1}`;
      badge.className = "guidely-number";
      badge.setAttribute("aria-label", `Show tour step ${index + 1}`);
      badge.textContent = String(index + 1);
      badge.hidden = true;
      badge.addEventListener("click", () => {
        if (options.overlay && overlay) overlay.hidden = false;
        showStep(index);
      });
      document.body.append(badge);

      const guide = document.createElement("section");
      guide.id = `guidely-guide-${index + 1}`;
      guide.className = "guidely-guide";
      guide.hidden = true;
      const popup = document.createElement("div");
      popup.className = "guidely-popup";
      const content = document.createElement("div");
      content.className = "guidely-guide-pad";
      if (step.title) {
        const heading = document.createElement("h4");
        heading.textContent = step.title;
        content.append(heading);
      }
      content.append(document.createTextNode(step.text));
      const controls = document.createElement("div");
      controls.className = "guidely-controls";
      controls.append(makeButton(index === guides.length - 1 ? "Done" : "Next", next));
      popup.append(content, controls);
      appendCloseButton(guide);
      guide.append(popup);
      document.body.append(guide);
    });
    positionBadges();

    const welcome = document.createElement("section");
    welcome.id = "guide-welcome";
    welcome.className = "guidely-guide guidely-welcome";
    welcome.hidden = true;
    const popup = document.createElement("div");
    popup.className = "guidely-popup";
    const content = document.createElement("div");
    content.className = "guidely-guide-pad";
    const heading = document.createElement("h4");
    heading.textContent = options.welcomeTitle;
    content.append(heading, document.createTextNode(options.welcomeText));
    const controls = document.createElement("div");
    controls.className = "guidely-controls";
    controls.append(makeButton("Start Tour", start), makeButton("No Thanks", close));
    popup.append(content, controls);
    appendCloseButton(welcome);
    welcome.append(popup);
    document.body.append(welcome);

    if (options.welcome) {
      if (options.overlay) overlay.hidden = false;
      welcome.hidden = false;
      window.scrollTo(0, 0);
      welcome.querySelector(".guidely-controls button")?.focus({ preventScroll: true });
    } else {
      start();
    }
  }

  window.guidely = { add, init, start, next, prev: previous, close };
})();
