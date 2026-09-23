(() => {
  const faqButtons = document.querySelectorAll(".faq-question");
  const stickyCta = document.getElementById("sticky-cta");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const answerId = button.getAttribute("aria-controls");
      const answer = document.getElementById(answerId);
      const isOpen = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isOpen));
      answer.hidden = isOpen;
    });
  });

  if (!stickyCta) return;

  const updateStickyCta = () => {
    const shouldShow = window.scrollY > 500;
    stickyCta.classList.toggle("visible", shouldShow);
    document.body.classList.toggle("has-sticky-cta", shouldShow);
  };

  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        updateStickyCta();
        ticking = false;
      });

      ticking = true;
    },
    { passive: true }
  );

  updateStickyCta();

  if (reducedMotion.matches) {
    document.documentElement.style.scrollBehavior = "auto";
  }
})();