document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".subnavbar .mainnav > li").forEach((item, index) => {
    item.classList.toggle("subnavbar-open-right", index % 3 === 2);
  });

  // Placeholder links (href="#" or "<this page>#") must not jump to the top of the page.
  const isPlaceholder = (link) => {
    const href = link.getAttribute("href") || "";
    if (href === "#") return true;
    if (!href.endsWith("#")) return false;
    return href.slice(0, -1).split("/").pop() === location.pathname.split("/").pop();
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (link && isPlaceholder(link)) event.preventDefault();
  });

  // role="button" links should also activate with Space, like a native button.
  document.addEventListener("keydown", (event) => {
    if (event.key !== " ") return;
    const link = event.target.closest('a[role="button"]');
    if (!link) return;
    event.preventDefault();
    link.click();
  });

  document
    .querySelectorAll(".mainnav > li > a > i, .navbar-account > a > i")
    .forEach((icon) => icon.setAttribute("aria-hidden", "true"));

  document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((toggle) => {
    const selector = toggle.getAttribute("data-bs-target") || toggle.getAttribute("href");
    const target = selector && document.querySelector(selector);
    if (!target) return;

    const closeMenu = () => {
      if (!window.bootstrap?.Collapse) return;
      window.bootstrap.Collapse.getOrCreateInstance(target).hide();
    };

    target.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      closeMenu();
    });

    target.querySelectorAll("a:not(.dropdown-toggle)").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 991.98px)").matches) closeMenu();
      });
    });

    target.addEventListener("hidden.bs.collapse", () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus({ preventScroll: true });
    });

    target.addEventListener("shown.bs.collapse", () => {
      toggle.setAttribute("aria-expanded", "true");
    });
  });

  document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((toggle) => {
    const dropdown = toggle.closest(".dropdown");
    if (!dropdown) return;

    dropdown.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      if (!window.bootstrap?.Dropdown) return;
      window.bootstrap.Dropdown.getOrCreateInstance(toggle).hide();
      toggle.focus({ preventScroll: true });
    });
  });
});
