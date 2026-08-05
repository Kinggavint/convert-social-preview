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

  /* ---------------------------------------------- scroll reveal
     Position based rather than observer based, so that instant scroll jumps
     and in page anchor links can never leave a section stuck hidden. */
  function initReveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if (items.length === 0) {
      return;
    }

    function showAll() {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      items = [];
    }

    if (reduceMotion === true) {
      showAll();
      return;
    }

    var ticking = false;

    function check() {
      ticking = false;
      var limit = window.innerHeight * 0.94;
      items = items.filter(function (el) {
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add("is-visible");
          return false;
        }
        return true;
      });
      if (items.length === 0) {
        window.removeEventListener("scroll", queue);
        window.removeEventListener("resize", queue);
      }
    }

    function queue() {
      if (ticking === false) {
        ticking = true;
        window.requestAnimationFrame(check);
      }
    }

    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    check();

    /* Failsafe: nothing stays hidden for longer than a few seconds. */
    window.setTimeout(function () {
      if (items.length > 0) {
        check();
      }
    }, 4000);
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

  document.documentElement.classList.add("js-ready");

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initHeader();
    initReveal();
    initForm();
    initYear();
  });
})();
