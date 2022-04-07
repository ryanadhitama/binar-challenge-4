AOS.init();

const swiper = new Swiper(".swiper", {
  centeredSlides: false,
  cssMode: true,
  mousewheel: true,
  keyboard: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      centeredSlides: true,
    },
  },
});

window.addEventListener("scroll", onScollNav);

function onScollNav() {
  const navigation = document.querySelector(".navigation");
  const scrollTop = window.scrollY;
  if (scrollTop >= 200) {
    navigation?.classList?.remove("navigation-scroll");
    navigation?.classList?.add("navigation-fixed");
  } else {
    navigation?.classList?.remove("navigation-fixed");
    navigation?.classList?.add("navigation-scroll");
  }
}

$(".navbar-collapse").click(function () {
  $(".navbar-toggler").trigger("click");
});

$(".nav-item.nav-brand img").click(function () {
  $(".navbar-toggler").trigger("click");
});

$("ul.navbar-nav").click(function (e) {
  e.stopPropagation();
});

/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

/*
 * Contoh penggunaan DOM di dalam class
 * */

if (params.search) {
  const app = new App();

  const filter = function (item) {
    for (var key in params) {
      if (!key !== "search" && params[key].length > 0) {
        if (key === "capacity" && item[key] < params[key]) {
          return false;
        }
        if (key === "withDriver" && item[key] !== Boolean(params[key])) {
          return false;
        }
        if (
          key === "availableAt" &&
          item[key].toISOString().split("T")[0] !== params[key]
        ) {
          return false;
        }
      }
    }
    return true;
  };

  app.init(filter).then(app.run);
}

$(".input").each(function () {
  $(this).on("focusout", function () {
    document.getElementById("overlay").style.display = "none";
  });
  $(this).on("focus", function () {
    document.getElementById("overlay").style.display = "block";
  });
});
