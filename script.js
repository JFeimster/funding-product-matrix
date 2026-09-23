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

  const getAttribution = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      referrer: document.referrer || ""
    };
  };

  const postResourceEvent = async (payload) => {
    const response = await fetch("/api/resource-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.ok === false) {
      const message = data?.error?.message || "We could not save your resource access. Please try again.";
      throw new Error(message);
    }
    return data;
  };

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
    if (formStatus) {
      formStatus.classList.remove("error");
      formStatus.textContent = "✓ Resources unlocked. Choose any format below.";
    }
    if (resourceNote) resourceNote.textContent = "Access unlocked on this browser. Choose any format — no additional form required.";
    const button = resourceForm?.querySelector(".unlock-button");
    if (button) {
      button.disabled = false;
      button.innerHTML = 'Resources Unlocked <span aria-hidden="true">✓</span>';
    }
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
        const next = { ...access, opened };
        localStorage.setItem(storageKey, JSON.stringify(next));

        if (access.email && resource) {
          postResourceEvent({
            event: "resource_opened",
            email: access.email,
            resource,
            source: "funding-product-matrix",
            attribution: access.attribution || getAttribution()
          }).catch(() => {});
        }
      } catch {}
    });
  });

  resourceForm?.addEventListener("submit", async (event) => {
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

    const attribution = getAttribution();
    const button = resourceForm.querySelector(".unlock-button");
    button.disabled = true;
    button.innerHTML = 'Unlocking… <span aria-hidden="true">→</span>';
    if (formStatus) formStatus.textContent = "Saving your access…";

    try {
      await postResourceEvent({
        event: "unlock",
        email,
        resource: "funding-product-matrix",
        source: "funding-product-matrix",
        attribution
      });

      const access = {
        email,
        source: "funding-product-matrix",
        capturedAt: new Date().toISOString(),
        attribution,
        opened: []
      };

      try { localStorage.setItem(storageKey, JSON.stringify(access)); } catch {}
      setUnlocked(email);
    } catch (error) {
      button.disabled = false;
      button.innerHTML = 'Unlock Resources <span aria-hidden="true">→</span>';
      if (formStatus) {
        formStatus.textContent = error.message || "We could not save your resource access. Please try again.";
        formStatus.classList.add("error");
      }
    }
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