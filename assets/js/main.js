/* Convert Social - proof site behaviour
   Vanilla JS, no dependencies. Keep it small and accessible. */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches === true;

  /* ---------------------------------------------- mobile nav toggle */
  function initNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-nav]");
    if (toggle === null || nav === null) {
      return;
    }

    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open === true ? "true" : "false");
    }

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.contains("is-open");
      setOpen(isOpen === false);
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A" && window.innerWidth <= 760) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) {
        setOpen(false);
      }
    });
  }

  /* ---------------------------------------------- sticky header state */
  function initHeader() {
    var header = document.querySelector("[data-header]");
    if (header === null) {
      return;
    }
    var update = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* ---------------------------------------------- scroll reveal */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (items.length === 0) {
      return;
    }
    if (reduceMotion === true || typeof window.IntersectionObserver === "undefined") {
      Array.prototype.forEach.call(items, function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    var observer = new window.IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting === true) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    Array.prototype.forEach.call(items, function (el) {
      observer.observe(el);
    });
  }

  /* ---------------------------------------------- contact form stub */
  function initForm() {
    var form = document.querySelector("[data-contact-form]");
    if (form === null) {
      return;
    }
    var status = form.querySelector("[data-form-status]");
    if (status === null) {
      return;
    }
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      status.textContent =
        "Form endpoint is not connected on this preview. Please email hello@myconvertsocial.com and we will reply the same business day.";
      status.setAttribute("role", "status");
    });
  }

  /* ---------------------------------------------- current year */
  function initYear() {
    var nodes = document.querySelectorAll("[data-year]");
    Array.prototype.forEach.call(nodes, function (node) {
      node.textContent = String(new Date().getFullYear());
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initHeader();
    initReveal();
    initForm();
    initYear();
  });
})();
