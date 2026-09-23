(() => {
  const faqButtons = document.querySelectorAll(".faq-question");
  const stickyCta = document.getElementById("sticky-cta");
  const resourceCard = document.querySelector(".resource-card");
  const resourceForm = document.getElementById("resource-form");
  const emailInput = document.getElementById("resource-email");
  const formStatus = document.getElementById("form-status");
  const resourceNote = document.getElementById("resource-note");
  const resourceLinks = Array.from(document.querySelectorAll(".resource-option"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const storageKey = "fundingMatrixResourceAccess";

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const answer = document.getElementById(button.getAttribute("aria-controls"));
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      answer.hidden = isOpen;
    });
  });

  const setUnlocked = (email = "") => {
    resourceCard?.classList.add("is-unlocked");
    resourceLinks.forEach((link) => {
      link.classList.remove("locked");
      link.classList.add("unlocked");
      link.removeAttribute("aria-disabled");
      link.removeAttribute("tabindex");
    });
    if (emailInput && email) emailInput.value = email;
    if (formStatus) formStatus.textContent = "✓ Resources unlocked. Choose any format below.";
    if (resourceNote) resourceNote.textContent = "Access unlocked on this browser. Choose any format — no additional form required.";
    const button = resourceForm?.querySelector(".unlock-button");
    if (button) button.innerHTML = 'Resources Unlocked <span aria-hidden="true">✓</span>';
  };

  const stored = (() => {
    try { return JSON.parse(localStorage.getItem(storageKey) || "null"); }
    catch { return null; }
  })();
  if (stored?.email) setUnlocked(stored.email);

  resourceLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (!resourceCard?.classList.contains("is-unlocked")) {
        event.preventDefault();
        emailInput?.focus();
        if (formStatus) {
          formStatus.textContent = "Enter your email once to unlock all formats.";
          formStatus.classList.add("error");
        }
        return;
      }
      try {
        const access = JSON.parse(localStorage.getItem(storageKey) || "{}");
        const opened = Array.isArray(access.opened) ? access.opened : [];
        const resource = link.dataset.resource;
        if (resource && !opened.includes(resource)) opened.push(resource);
        localStorage.setItem(storageKey, JSON.stringify({ ...access, opened }));
      } catch {}
    });
  });

  resourceForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus?.classList.remove("error");
    const email = emailInput?.value.trim() || "";
    if (!emailInput?.checkValidity()) {
      emailInput?.reportValidity();
      if (formStatus) {
        formStatus.textContent = "Enter a valid email address.";
        formStatus.classList.add("error");
      }
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const access = {
      email,
      source: "funding-product-matrix",
      capturedAt: new Date().toISOString(),
      attribution: {
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
        utm_content: params.get("utm_content") || "",
        referrer: document.referrer || ""
      },
      opened: []
    };

    try { localStorage.setItem(storageKey, JSON.stringify(access)); } catch {}
    setUnlocked(email);

    /*
      CRM HANDOFF:
      The unlock works now without exposing credentials in the browser.
      When a secure lead endpoint is available, POST the access object above
      from this handler to that server-side endpoint (for example /api/resource-lead).
      Do not place HubSpot, Notion, or other private API tokens in this file.
    */
  });

  if (stickyCta) {
    const updateStickyCta = () => {
      const shouldShow = window.scrollY > 500;
      stickyCta.classList.toggle("visible", shouldShow);
      document.body.classList.toggle("has-sticky-cta", shouldShow);
    };
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        updateStickyCta();
        ticking = false;
      });
      ticking = true;
    }, { passive: true });
    updateStickyCta();
  }

  if (reducedMotion.matches) document.documentElement.style.scrollBehavior = "auto";
})();