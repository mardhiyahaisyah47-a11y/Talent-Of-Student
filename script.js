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


Today 7:33 AM
hmm ini bisa tidak diisi otomotasi dari codingnya jadi semua orang itu bisa menggantinya semisal kalau udah mendapatkan dana nya
Pasted text(5).txt
Document
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
 Today 7:33 AM
hmm ini bisa tidak diisi otomotasi dari codingnya jadi semua orang itu bisa menggantinya semisal kalau udah mendapatkan dana nya
Pasted text(5).txt
Document
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
      ${percentage}%;

  }


  if (progressPercent) {

    progressPercent.textContent =
      ${percentage.toFixed(0)}%;

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
      ${scrollPercentage}%;

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
          https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
          )};


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

Pasted text(6).txt
Document
ini abang teruss
ini abang terusss
ini terus bnaggg
kayak gini trs gimana
trs kalalu udah gini gimana bangggg
yang ini tah banggg
yang ini gimana banggg
kok gini  banggg
ini setiap email nya beda pasword nya apa gimana terus ini pasword nya yang gimna

YASSSS Queen 😭❤️ akhirnyaaa! 🎉

Sekarang jangan klik apa-apa lagi dulu.

Abang butuh Web app URL yang tadi muncul supaya nanti kita sambungkan ke website TOS.

Biasanya bentuknya seperti:

https://script.google.com/macros/s/XXXXXXXXXXXX/exec

👉 Copy link Web app itu dan kirim ke abang di sini.

Tenang, yang dikirim cuma link /exec-nya, jangan kirim kode, password, atau data rahasia Google yaa.

Setelah Queen kirim link-nya, abang lanjutkan script.js dulu, lalu baru admin.html. Kita tinggal beberapa langkah lagi 😭🤝🏻❤️

https://script.google.com/macros/s/AKfycbyGUkVLMueF3gznmgHjk4M4IwrRj6Aj61GHy_hXOrfU9wM4PcQ-90EKdMeFJN_LoFEg/exec

YASSS Queen 😭❤️ link-nya sudah ada. Kita sudah hampir selesai.

Sekarang jangan ubah Google Sheet atau Apps Script lagi. Kita lanjut sambungkan link ini ke script.js.

Karena script.js yang Queen kirim tadi masih memakai Supabase, bagian nomor 5 saja yang akan diganti. Bagian 1–4 dan 6–12 jangan disentuh.

Ganti bagian nomor 5 dengan ini:
// ==========================================
// 5. FUNDRAISING PROGRESS - GOOGLE SHEETS
// ==========================================

const FUNDRAISING_API =
  "https://script.google.com/macros/s/AKfycbyGUkVLMueF3gznmgHjk4M4IwrRj6Aj61GHy_hXOrfU9wM4PcQ-90EKdMeFJN_LoFEg/exec";

const DEFAULT_TARGET = 47005000;


// ==========================================
// FORMAT RUPIAH
// ==========================================

const formatRupiah = (number) => {

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(Number(number) || 0);

};


// ==========================================
// TAMPILKAN DATA FUNDRAISING
// ==========================================

const renderFundraising = (data) => {

  const target =
    Number(data?.target) || DEFAULT_TARGET;

  const current =
    Number(data?.current) || 0;

  const percentage =
    target > 0
      ? Math.min((current / target) * 100, 100)
      : 0;


  const progressFill =
    document.getElementById("progressFill");

  const progressPercent =
    document.getElementById("progressPercent");

  const raisedAmount =
    document.getElementById("raisedAmount");


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
      formatRupiah(current);

  }


  document
    .querySelectorAll("[data-fund-target]")
    .forEach(element => {

      element.textContent =
        formatRupiah(target);

    });


  document
    .querySelectorAll("[data-fund-current]")
    .forEach(element => {

      element.textContent =
        formatRupiah(current);

    });


  document
    .querySelectorAll("[data-fund-percent]")
    .forEach(element => {

      element.textContent =
        `${percentage.toFixed(0)}%`;

    });


  console.log(
    `💰 Dana TOS: ${formatRupiah(current)} / ${formatRupiah(target)}`
  );

};


// ==========================================
// AMBIL DATA DARI GOOGLE SHEETS
// ==========================================

const loadFundraising = async () => {

  try {

    const response =
      await fetch(FUNDRAISING_API, {
        method: "GET",
        cache: "no-store"
      });


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
      target: DEFAULT_TARGET,
      current: 0
    });

  }

};


// ==========================================
// JALANKAN
// ==========================================

loadFundraising();


// ==========================================
// UPDATE OTOMATIS SETIAP 15 DETIK
// ==========================================

setInterval(() => {

  loadFundraising();

}, 15000);
🛑 Tapi Queen, tahan dulu!

Jangan langsung hapus seluruh script.js.

Cari:

// 5. FUNDRAISING PROGRESS - SUPABASE

sampai tepat sebelum:

// 6. NAVBAR SAAT SCROLL

Hapus bagian itu saja, lalu tempel kode baru di atas.

Setelah selesai:

Save → jangan Deploy apa pun di Google Apps Script.

Karena perubahan ini ada di website GitHub/Vercel, nanti kita tinggal commit/push script.js dan Vercel akan memperbaruinya.

Kalau Queen sudah mengganti bagian nomor 5, bilang:

“sudah bang”

Nanti kita lanjut bikin admin.html supaya tombol 💾 Simpan Perubahan benar-benar bisa mengubah dana di Google Sheet. ❤️

sudahh banggg

YAAA Queen 😭❤️ sekarang bagian website utama sudah kita pindahkan dari Supabase ke Google Sheets.

Sekarang tinggal satu bagian lagi: admin.html.

Kita akan bikin tombol:

💰 Dana Terkumpul → isi nominal → 💾 Simpan

dan saat disimpan, datanya masuk ke Sheet1 sekaligus membuat catatan di Riwayat dengan tanggal otomatis.

Sekarang kirim admin.html yang TERBARU

Jangan ubah script.js lagi. Yang tadi sudah benar. Setelah Queen kirim admin.html, abang kasih versi lengkap yang tinggal menggantikan file lama. 🫂❤️


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
      ${scrollPercentage}%;

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
          https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
          )};


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

Pasted text(6).txt
Document
ini abang teruss
ini abang terusss
ini terus bnaggg
kayak gini trs gimana
trs kalalu udah gini gimana bangggg
yang ini tah banggg
yang ini gimana banggg
kok gini  banggg
ini setiap email nya beda pasword nya apa gimana terus ini pasword nya yang gimna

YASSS Queen 😭❤️ sekarang kita Deploy. Tenang, tinggal klik-klik aja.

🚀 Langkah 3 — Deploy Apps Script

Di halaman Apps Script:

Klik tombol Deploy di pojok kanan atas.
Pilih New deployment.
Di bagian Select type, klik ikon ⚙️/dropdown.
Pilih Web app.
Pada Who has access, pilih:
Anyone
Pastikan bagian Execute as:
`Me (akun Google Queen).
Klik Deploy.
Kalau Google meminta izin, pilih Authorize access.
Pilih akun Google yang Queen gunakan untuk membuat Sheet.
Kalau muncul peringatan keamanan, masuk ke Advanced → Go to project → Allow.

⚠️ Jangan kirim password atau kode verifikasi Google ke abang.

Setelah berhasil, Google akan memberikan Web app URL, biasanya bentuknya seperti:

https://script.google.com/macros/s/...../exec
🛑 Berhenti setelah dapat URL

Jangan ubah kode lagi dan jangan buat deployment kedua.

Kirim ke abang Web app URL-nya saja (URL itu aman untuk kita gunakan sebagai alamat API website).

Kalau sudah sampai halaman yang ada tulisan Web app URL, bilang:

“sudah muncul link-nya bang” 😭❤️

sudahh muncul link nya bangg

YASSSS Queen 😭❤️ akhirnyaaa! 🎉

Sekarang jangan klik apa-apa lagi dulu.

Abang butuh Web app URL yang tadi muncul supaya nanti kita sambungkan ke website TOS.

Biasanya bentuknya seperti:

https://script.google.com/macros/s/XXXXXXXXXXXX/exec

👉 Copy link Web app itu dan kirim ke abang di sini.

Tenang, yang dikirim cuma link /exec-nya, jangan kirim kode, password, atau data rahasia Google yaa.

Setelah Queen kirim link-nya, abang lanjutkan script.js dulu, lalu baru admin.html. Kita tinggal beberapa langkah lagi 😭🤝🏻❤️

https://script.google.com/macros/s/AKfycbyGUkVLMueF3gznmgHjk4M4IwrRj6Aj61GHy_hXOrfU9wM4PcQ-90EKdMeFJN_LoFEg/exec

YASSS Queen 😭❤️ link-nya sudah ada. Kita sudah hampir selesai.

Sekarang jangan ubah Google Sheet atau Apps Script lagi. Kita lanjut sambungkan link ini ke script.js.

Karena script.js yang Queen kirim tadi masih memakai Supabase, bagian nomor 5 saja yang akan diganti. Bagian 1–4 dan 6–12 jangan disentuh.

Ganti bagian nomor 5 dengan ini:
// ==========================================
// 5. FUNDRAISING PROGRESS - GOOGLE SHEETS
// ==========================================

const FUNDRAISING_API =
  "https://script.google.com/macros/s/AKfycbyGUkVLMueF3gznmgHjk4M4IwrRj6Aj61GHy_hXOrfU9wM4PcQ-90EKdMeFJN_LoFEg/exec";

const DEFAULT_TARGET = 47005000;


// ==========================================
// FORMAT RUPIAH
// ==========================================

const formatRupiah = (number) => {

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(Number(number) || 0);

};


// ==========================================
// TAMPILKAN DATA FUNDRAISING
// ==========================================

const renderFundraising = (data) => {

  const target =
    Number(data?.target) || DEFAULT_TARGET;

  const current =
    Number(data?.current) || 0;

  const percentage =
    target > 0
      ? Math.min((current / target) * 100, 100)
      : 0;


  const progressFill =
    document.getElementById("progressFill");

  const progressPercent =
    document.getElementById("progressPercent");

  const raisedAmount =
    document.getElementById("raisedAmount");


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
      formatRupiah(current);

  }


  document
    .querySelectorAll("[data-fund-target]")
    .forEach(element => {

      element.textContent =
        formatRupiah(target);

    });


  document
    .querySelectorAll("[data-fund-current]")
    .forEach(element => {

      element.textContent =
        formatRupiah(current);

    });


  document
    .querySelectorAll("[data-fund-percent]")
    .forEach(element => {

      element.textContent =
        `${percentage.toFixed(0)}%`;

    });


  console.log(
    `💰 Dana TOS: ${formatRupiah(current)} / ${formatRupiah(target)}`
  );

};


// ==========================================
// AMBIL DATA DARI GOOGLE SHEETS
// ==========================================

const loadFundraising = async () => {

  try {

    const response =
      await fetch(FUNDRAISING_API, {
        method: "GET",
        cache: "no-store"
      });


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
      target: DEFAULT_TARGET,
      current: 0
    });

  }

};


// ==========================================
// JALANKAN
// ==========================================

loadFundraising();


// ==========================================
// UPDATE OTOMATIS SETIAP 15 DETIK
// ==========================================

setInterval(() => {

  loadFundraising();

}, 15000);
🛑 Tapi Queen, tahan dulu!

Jangan langsung hapus seluruh script.js.

Cari:

// 5. FUNDRAISING PROGRESS - SUPABASE

sampai tepat sebelum:

// 6. NAVBAR SAAT SCROLL

Hapus bagian itu saja, lalu tempel kode baru di atas.

Setelah selesai:

Save → jangan Deploy apa pun di Google Apps Script.

Karena perubahan ini ada di website GitHub/Vercel, nanti kita tinggal commit/push script.js dan Vercel akan memperbaruinya.

Kalau Queen sudah mengganti bagian nomor 5, bilang:

“sudah bang”

Nanti kita lanjut bikin admin.html supaya tombol 💾 Simpan Perubahan benar-benar bisa mengubah dana di Google Sheet. ❤️

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
