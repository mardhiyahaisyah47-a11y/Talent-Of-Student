// ==========================================
// TALENT OF STUDENT 2026
// Interactive JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // 1. MOBILE NAVIGATION
  // ==========================================

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });

    // Tutup menu setelah memilih navigasi
    navMenu.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  // ==========================================
  // 2. DARK / LIGHT MODE
  // ==========================================

  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  // Ambil tema yang pernah dipilih
  const savedTheme = localStorage.getItem("tos-theme");

  if (savedTheme === "dark") {

    document.documentElement.setAttribute(
      "data-theme",
      "dark"
    );

    if (themeIcon) {
      themeIcon.textContent = "☀";
    }

  }


  if (themeToggle) {

    themeToggle.addEventListener("click", () => {

      const isDark =
        document.documentElement.getAttribute(
          "data-theme"
        ) === "dark";


      if (isDark) {

        // Kembali ke light mode
        document.documentElement.removeAttribute(
          "data-theme"
        );

        localStorage.setItem(
          "tos-theme",
          "light"
        );

        if (themeIcon) {
          themeIcon.textContent = "☾";
        }

      } else {

        // Aktifkan dark mode
        document.documentElement.setAttribute(
          "data-theme",
          "dark"
        );

        localStorage.setItem(
          "tos-theme",
          "dark"
        );

        if (themeIcon) {
          themeIcon.textContent = "☀";
        }

      }

    });

  }


  // ==========================================
  // 3. SCROLL REVEAL ANIMATION
  // ==========================================

  const revealItems =
    document.querySelectorAll(".reveal");


  const revealObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("show");

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  revealItems.forEach(item => {

    revealObserver.observe(item);

  });


  // ==========================================
  // 4. PILIH NOMINAL DONASI
  // ==========================================

  const donationButtons =
    document.querySelectorAll(
      ".amount-options button"
    );


  const selectedAmount =
    document.getElementById(
      "selectedAmount"
    );


  donationButtons.forEach(button => {

    button.addEventListener("click", () => {

      // Hapus pilihan sebelumnya
      donationButtons.forEach(btn => {
        btn.classList.remove("active");
      });


      // Aktifkan tombol yang dipilih
      button.classList.add("active");


      // Ambil nominal
      const amount =
        button.getAttribute("data-amount");


      // Tampilkan nominal pilihan
      if (selectedAmount && amount) {

        selectedAmount.textContent =
          new Intl.NumberFormat(
            "id-ID",
            {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0
            }
          ).format(Number(amount));

      }

    });

  });


  // ==========================================
  // 5. FUNDRAISING PROGRESS
  // ==========================================

  const target = 43545000;

  // Saat ini belum ada nominal donasi
  // yang terverifikasi untuk ditampilkan.
  const current = 0;


  const percentage =
    Math.min(
      (current / target) * 100,
      100
    );


  const progressFill =
    document.getElementById(
      "progressFill"
    );


  const progressPercent =
    document.getElementById(
      "progressPercent"
    );


  const raisedAmount =
    document.getElementById(
      "raisedAmount"
    );


  if (progressFill) {

    progressFill.style.width =
      `${percentage}%`;

  }


  if (progressPercent) {

    progressPercent.textContent =
      `${percentage.toFixed(0)}%`;

  }


  if (raisedAmount) {

    raisedAmount.textContent =
      new Intl.NumberFormat(
        "id-ID",
        {
          style: "currency",
          currency: "IDR",
          maximumFractionDigits: 0
        }
      ).format(current);

  }


  // ==========================================
  // 6. NAVBAR SAAT SCROLL
  // ==========================================

  const navbar =
    document.getElementById("navbar");


  let scrollProgress =
    document.getElementById(
      "scrollProgress"
    );


  // Kalau elemen progress belum ada,
  // dibuat otomatis oleh JavaScript.
  if (!scrollProgress) {

    scrollProgress =
      document.createElement("div");

    scrollProgress.id =
      "scrollProgress";

    scrollProgress.className =
      "scroll-progress";

    document.body.prepend(
      scrollProgress
    );

  }


  const updateScroll = () => {

    // Navbar berubah ketika halaman discroll
    if (navbar) {

      navbar.classList.toggle(
        "scrolled",
        window.scrollY > 15
      );

    }


    // Hitung progress scroll
    const documentHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;


    const scrollPercentage =
      documentHeight > 0
        ? (window.scrollY / documentHeight) * 100
        : 0;


    scrollProgress.style.width =
      `${scrollPercentage}%`;

  };


  window.addEventListener(
    "scroll",
    updateScroll,
    {
      passive: true
    }
  );


  updateScroll();


  // ==========================================
  // 7. SMOOTH SCROLL
  // ==========================================

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

      anchor.addEventListener(
        "click",
        event => {

          const targetSelector =
            anchor.getAttribute("href");


          const targetElement =
            document.querySelector(
              targetSelector
            );


          if (!targetElement) {
            return;
          }


          event.preventDefault();


          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    });


  // ==========================================
  // 8. TOMBOL SPONSOR
  // ==========================================

  const sponsorButtons =
    document.querySelectorAll(
      ".sponsor-card .btn, .sponsor-card .text-link"
    );


  sponsorButtons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        button.style.transform =
          "scale(0.97)";


        setTimeout(() => {

          button.style.transform =
            "";

        }, 150);

      }
    );

  });


  // ==========================================
  // 9. WHATSAPP KONFIRMASI
  // ==========================================

  const whatsappNumber =
    "6282245731958";


  // Tombol yang mempunyai class whatsapp-button
  const whatsappButtons =
    document.querySelectorAll(
      ".whatsapp-button"
    );


  whatsappButtons.forEach(button => {

    button.addEventListener(
      "click",
      event => {

        event.preventDefault();


        const message =
          button.getAttribute(
            "data-message"
          ) ||
          "Halo Panitia Talent Of Student 2026, saya ingin mendapatkan informasi mengenai kegiatan TOS 2026.";


        const whatsappURL =
          `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
          )}`;


        window.open(
          whatsappURL,
          "_blank"
        );

      }
    );

  });


  // ==========================================
  // 10. CLOSE MENU KETIKA KLIK DI LUAR
  // ==========================================

  document.addEventListener(
    "click",
    event => {

      if (
        navMenu &&
        menuToggle &&
        navMenu.classList.contains("open") &&
        !navMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {

        navMenu.classList.remove(
          "open"
        );

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    }
  );


  // ==========================================
  // 11. ANIMASI CARD SPONSOR
  // ==========================================

  const sponsorCards =
    document.querySelectorAll(
      ".sponsor-card"
    );


  sponsorCards.forEach(card => {

    card.addEventListener(
      "mouseenter",
      () => {

        card.style.transform =
          "translateY(-5px)";

      }
    );


    card.addEventListener(
      "mouseleave",
      () => {

        card.style.transform =
          "";

      }
    );

  });


  // ==========================================
  // 12. TAHUN OTOMATIS
  // ==========================================

  const yearElements =
    document.querySelectorAll(
      "[data-current-year]"
    );


  yearElements.forEach(element => {

    element.textContent =
      new Date().getFullYear();

  });


  console.log(
    "✨ Talent Of Student 2026 berhasil dimuat!"
  );

});
