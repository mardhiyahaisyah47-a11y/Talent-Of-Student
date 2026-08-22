// TOS 2026 — interactive behavior

document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const open = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", open);
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll reveal
  const revealItems = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => observer.observe(item));

  // Donation amount buttons — visual selection only.
  document.querySelectorAll(".amount-options button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".amount-options button")
        .forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  // Fundraising progress.
  // Current verified donation total was not provided, so it intentionally starts at Rp0.
  const target = 43545000;
  const current = 0;

  const percent = Math.min((current / target) * 100, 100);
  const fill = document.getElementById("progressFill");
  const percentText = document.getElementById("progressPercent");
  const raisedText = document.getElementById("raisedAmount");

  if (fill) fill.style.width = `${percent}%`;
  if (percentText) percentText.textContent = `${percent.toFixed(0)}%`;
  if (raisedText) {
    raisedText.textContent = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(current);
  }
});
