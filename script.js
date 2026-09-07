// ==========================================
// TALENT OF STUDENT 2026
// Interactive JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {


  // ==========================================
  // 1. MOBILE NAVIGATION
  // ==========================================

  const menuToggle =
    document.querySelector(".menu-toggle");

  const navMenu =
    document.querySelector(".nav-menu");


  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

      const isOpen =
        navMenu.classList.toggle("open");


      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    });


    navMenu
      .querySelectorAll("a")
      .forEach(link => {

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

  const themeToggle =
    document.getElementById("themeToggle");

  const themeIcon =
    document.getElementById("themeIcon");


  const savedTheme =
    localStorage.getItem("tos-theme");


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


  if ("IntersectionObserver" in window) {

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

  } else {

    revealItems.forEach(item => {

      item.classList.add("show");

    });

  }



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


      donationButtons.forEach(btn => {

        btn.classList.remove("active");

      });


      button.classList.add("active");


      const amount =
        button.getAttribute(
          "data-amount"
        );


      if (selectedAmount && amount) {

        selectedAmount.textContent =
          new Intl.NumberFormat(
            "id-ID",
            {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0
            }
          ).format(
            Number(amount)
          );

      }

    });

  });



  // ==========================================
  // 5. FUNDRAISING PROGRESS
  // GOOGLE SHEETS
  // ==========================================

  const FUNDRAISING_API =
    "https://script.google.com/macros/s/AKfycbyGUkVLMueF3gznmgHjk4M4IwrRj6Aj61GHy_hXOrfU9wM4PcQ-90EKdMeFJN_LoFEg/exec";


  const DEFAULT_TARGET =
    47005000;



  // ==========================================
  // FORMAT RUPIAH
  // ==========================================

  function formatRupiah(number) {

    return new Intl.NumberFormat(
      "id-ID",
      {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
      }
    ).format(
      Number(number) || 0
    );

  }



  // ==========================================
  // TAMPILKAN DATA FUNDRAISING
  // ==========================================

  function renderFundraising(data) {


    const target =
      Number(data?.target) ||
      DEFAULT_TARGET;


    const current =
      Number(data?.current) ||
      0;


    const percentage =
      target > 0
        ? Math.min(
            (current / target) * 100,
            100
          )
        : 0;


    const remaining =
      Math.max(
        target - current,
        0
      );



    // ==============================
    // PROGRESS BAR
    // ==============================

    const progressFill =
      document.getElementById(
        "progressFill"
      );


    if (progressFill) {

      progressFill.style.width =
        `${percentage}%`;

    }



    // ==============================
    // PERSENTASE
    // ==============================

    const progressPercent =
      document.getElementById(
        "progressPercent"
      );


    if (progressPercent) {

      progressPercent.textContent =
        `${percentage.toFixed(0)}%`;

    }



    // ==============================
    // DANA TERKUMPUL
    // ==============================

    const raisedAmount =
      document.getElementById(
        "raisedAmount"
      );


    if (raisedAmount) {

      raisedAmount.textContent =
        formatRupiah(current);

    }



    // ==============================
    // TARGET
    // ==============================

    document
      .querySelectorAll(
        "[data-fund-target]"
      )
      .forEach(element => {

        element.textContent =
          formatRupiah(target);

      });



    // ==============================
    // DANA TERKUMPUL
    // ==============================

    document
      .querySelectorAll(
        "[data-fund-current]"
      )
      .forEach(element => {

        element.textContent =
          formatRupiah(current);

      });



    // ==============================
    // PERSENTASE
    // ==============================

    document
      .querySelectorAll(
        "[data-fund-percent]"
      )
      .forEach(element => {

        element.textContent =
          `${percentage.toFixed(0)}%`;

      });



    // ==============================
    // KEKURANGAN DANA
    // ==============================

    document
      .querySelectorAll(
        "[data-fund-remaining]"
      )
      .forEach(element => {

        element.textContent =
          formatRupiah(remaining);

      });



    console.log(
      `💰 Dana TOS: ${formatRupiah(current)} / ${formatRupiah(target)}`
    );

  }



  // ==========================================
  // AMBIL DATA GOOGLE SHEETS
  // ==========================================

  async function loadFundraising() {

    try {


      const response =
        await fetch(
          FUNDRAISING_API +
          "?t=" +
          Date.now(),
          {
            method: "GET",
            cache: "no-store"
          }
        );


      if (!response.ok) {

        throw new Error(
          `HTTP ${response.status}`
        );

      }


      const data =
        await response.json();


      console.log(
        "📊 Data fundraising:",
        data
      );


      renderFundraising(data);


    } catch (error) {


      console.error(
        "❌ Gagal mengambil data fundraising:",
        error
      );


      renderFundraising({

        target:
          DEFAULT_TARGET,

        current:
          0

      });

    }

  }



  // Jalankan pertama kali

  loadFundraising();



  // ==========================================
  // UPDATE OTOMATIS SETIAP 15 DETIK
  // ==========================================

  setInterval(
    loadFundraising,
    15000
  );



  // ==========================================
  // 6. NAVBAR SAAT SCROLL
  // ==========================================

  const navbar =
    document.getElementById(
      "navbar"
    );


  let scrollProgress =
    document.getElementById(
      "scrollProgress"
    );


  if (!scrollProgress) {

    scrollProgress =
      document.createElement(
        "div"
      );


    scrollProgress.id =
      "scrollProgress";


    scrollProgress.className =
      "scroll-progress";


    document.body.prepend(
      scrollProgress
    );

  }



  const updateScroll = () => {


    // ==============================
    // NAVBAR
    // ==============================

    if (navbar) {

      navbar.classList.toggle(
        "scrolled",
        window.scrollY > 15
      );

    }



    // ==============================
    // SCROLL PROGRESS
    // ==============================

    const documentHeight =
      document.documentElement
        .scrollHeight -
      window.innerHeight;


    const scrollPercentage =
      documentHeight > 0
        ? (
            window.scrollY /
            documentHeight
          ) * 100
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
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(anchor => {

      anchor.addEventListener(
        "click",
        event => {


          const targetSelector =
            anchor.getAttribute(
              "href"
            );


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



  // ==========================================
  // SELESAI
  // ==========================================

  console.log(
    "✨ Talent Of Student 2026 berhasil dimuat!"
  );

});
