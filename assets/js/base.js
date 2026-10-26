document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".subnavbar .mainnav > li").forEach((item, index) => {
    item.classList.toggle("subnavbar-open-right", index % 3 === 2);
  });
});
