/* Ānshén Acupuncture — site behaviour */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- Mobile navigation --- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }


  /* --- FAQ accordion (smooth open/close) ---
     CSS alone can't do this reliably: the usual grid-template-rows 0fr→1fr
     trick doesn't actually collapse `<details>` content in current browsers
     (a bare 0fr track's automatic minimum size defaults to the content's
     own size, not zero), so it just snaps open with no visible transition.
     Animating an explicit pixel height in JS is the standard workaround.
     Skipped for prefers-reduced-motion — native instant toggle is the
     reduced-motion fallback, same as every other animation on this site. */
  if (!reduced) {
    document.querySelectorAll(".faq details").forEach(function (details) {
      var summary = details.querySelector("summary");
      var panel = details.querySelector("p");
      if (!summary || !panel) return;

      /* The breathing room below the open text, folded into the animated
         height itself rather than a separately-toggled margin/padding — see
         the CSS comment on .faq details p for why. */
      var gap = parseFloat(getComputedStyle(details).getPropertyValue("--faq-panel-gap")) || 0;

      /* `is-open` (not the native `open` attribute) is the single source of
         truth for the animation itself, so there is only ever one thing —
         height — transitioning at a time. `open` is flipped immediately when
         opening (so content exists to measure/animate) but only flipped off
         at the end of closing (so content stays rendered while it shrinks). */
      panel.addEventListener("transitionend", function (e) {
        if (e.propertyName !== "height") return;
        details.classList.remove("is-animating");
        if (details.classList.contains("is-open")) return;
        /* Only reset height when closed. While open, stay pinned at the
           exact px value just animated to — clearing it back to "auto"
           would drop --faq-panel-gap (it isn't a real CSS height, just
           folded into that value) and cause a visible settle-down snap
           right at the end of opening. */
        panel.style.height = "";
        details.open = false;
      });

      summary.addEventListener("click", function (e) {
        e.preventDefault();
        if (details.classList.contains("is-animating")) return;
        details.classList.add("is-animating");

        /* Two nested rAFs, not one: a single rAF scheduled in the same tick
           as the "start" height write can still land in the same frame the
           browser paints that write, so the "end" value gets applied before
           the start one was ever actually shown — no visible transition at
           all for that leg. The second rAF guarantees a real paint of the
           start value happens first. */
        if (details.classList.contains("is-open")) {
          details.classList.remove("is-open");
          panel.style.height = panel.getBoundingClientRect().height + "px";
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              panel.style.height = "0px";
            });
          });
        } else {
          details.open = true;
          details.classList.add("is-open");
          var target = panel.scrollHeight + gap;
          panel.style.height = "0px";
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              panel.style.height = target + "px";
            });
          });
        }
      });
    });
  }

  /* --- Scroll reveals --- */
  var revealables = document.querySelectorAll(".reveal");

  if (reduced || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          el.classList.add("is-visible");
          observer.unobserve(el);
          /* grid stagger (.grid > .reveal:nth-child(n)) sets transition-delay
             for the entrance fade only, but that delay would otherwise also
             apply to every later transition on the element — including a
             hover box-shadow/lift — making later grid items feel laggier to
             hover than the first. Clear it once the entrance finishes. */
          el.addEventListener("transitionend", function () {
            el.style.transitionDelay = "0s";
          }, { once: true });
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    revealables.forEach(function (el) { observer.observe(el); });
  }

  /* --- Enquiry form ---
     Submits asynchronously to Formspree or any standard form endpoint.
     Gracefully falls back to direct phone/email instructions if unconfigured. */
  var form = document.querySelector("#enquiry-form");
  var status = document.querySelector("#form-status");

  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var action = form.getAttribute("action");

      if (!action || action.includes("YOUR_FORM_ID")) {
        status.textContent =
          "Thanks for reaching out! Online submissions are being finalized — " +
          "please call 0408 290 001 or email info@anshenacupuncture.com directly.";
        status.classList.add("is-visible");
        status.setAttribute("role", "status");
        return;
      }

      status.textContent = "Sending your message...";
      status.classList.add("is-visible");
      status.setAttribute("role", "status");

      var formData = new FormData(form);
      fetch(action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      })
      .then(function (response) {
        if (response.ok) {
          form.reset();
          status.textContent = "Thank you! Your message has been received. We will reply as soon as possible.";
        } else {
          status.textContent = "Oops! There was an issue sending your message. Please email info@anshenacupuncture.com directly.";
        }
      })
      .catch(function () {
        status.textContent = "Unable to connect. Please call 0408 290 001 or email info@anshenacupuncture.com.";
      });
    });
  }

  /* --- Current year in footer --- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
