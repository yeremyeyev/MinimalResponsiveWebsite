$(".single-slide").slick({
  autoplay: true,
  autoplaySpeed: 7000,
  infinite: true,
  slidesToShow: 1,
  centerMode: true, 
  dots: false,
 
  // dotsClass: ''
  // appendDots:'dots-container'
});
// $('.carousel-content').slick({
//   prevArrow:"<img class='a-left control-c prev slick-prev' src='../img/Layer 4 left.svg'>",
//   nextArrow:"<img class='a-right control-c next slick-next' src='../img/Layer 4 right.svg'>"
// });
// http://qaru.site/questions/383249/add-custom-buttons-on-slick-carousel
  // ----кнопка бургер меню начало -------
$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
});
// ----кнопка бургер меню конец -------
$(window).resize(function () {
  $('.single-slide').not('.single-slide').slick('resize');
});