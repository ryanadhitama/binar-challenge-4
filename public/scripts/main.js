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
