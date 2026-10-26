function initializeGuidely() {
  guidely.add({
    attachTo: "#target-1",
    anchor: "top-left",
    title: "Guide Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.",
  });
  guidely.add({
    attachTo: "#target-2",
    anchor: "top-right",
    title: "Guide Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.",
  });
  guidely.add({
    attachTo: "#target-3",
    anchor: "middle-middle",
    title: "Guide Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.",
  });
  guidely.add({
    attachTo: "#target-4",
    anchor: "top-right",
    title: "Guide Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.",
  });
  guidely.init({ welcome: true });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeGuidely, { once: true });
} else {
  initializeGuidely();
}
