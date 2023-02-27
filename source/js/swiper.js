const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  spaceBetween: 30,
  effect: 'fade',

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  keyboard: true,
});
