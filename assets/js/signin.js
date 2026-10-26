document.addEventListener("DOMContentLoaded", () => {
  const supportsPlaceholder = "placeholder" in document.createElement("input");
  if (supportsPlaceholder) return;

  document.querySelectorAll(".field input").forEach((input) => {
    const label = input.closest(".field")?.querySelector("label");
    if (!label) return;
    label.hidden = false;
    input.addEventListener("focus", () => label.classList.add("visually-hidden"));
    input.addEventListener("blur", () => {
      if (!input.value) label.classList.remove("visually-hidden");
    });
  });
});
