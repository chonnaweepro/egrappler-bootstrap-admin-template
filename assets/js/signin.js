document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".password-toggle").forEach((toggle) => {
    const input = document.getElementById(toggle.getAttribute("aria-controls"));
    if (!input) return;

    toggle.addEventListener("click", () => {
      const showing = input.type === "text";
      input.type = showing ? "password" : "text";
      toggle.setAttribute("aria-label", showing ? "Show password" : "Hide password");
      toggle.setAttribute("aria-pressed", String(!showing));
      input.focus({ preventScroll: true });
    });
  });

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
