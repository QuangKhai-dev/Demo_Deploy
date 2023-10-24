var $prevCustom1 = $(".btn-arrows-prev-1");
var $nextCustom1 = $(".btn-arrows-next-1");
$(document).ready(function () {
  $(".images-carousel").slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 9000,
    pauseOnHover: false,
    cssEase: "linear",
    prevArrow: $prevCustom1,
    nextArrow: $nextCustom1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          centerPadding: "0",
        },
      },
    ],
  });
  $(".clients-carousel-1").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 2,
        },
      },
      
    ],
  });
  $(".clients-carousel-2").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 2,
        },
      },
      
    ],
  });
});
