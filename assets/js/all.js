"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next-self",
    prevEl: ".swiper-button-prev-self"
  },
  pagination: {
    el: ".swiper-pagination"
  },
  mousewheel: true,
  keyboard: true,
  spaceBetween: 100
});
$('.nav-list').click(function (e) {
  e.preventDefault();
  $('.big').toggleClass('active');
});
//# sourceMappingURL=all.js.map
