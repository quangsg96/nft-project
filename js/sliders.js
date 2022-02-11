$(document).ready(function () {
  $(".auction > .container__auction > .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      360: {
        margin: -10,
      },
      375: {
        margin: -20,
      },
      389: {
        margin: -40,
      },
      411: {
        margin: -60,
      },
      479: {
        margin: -110,
      },
      767: {
        items: 2,
        margin: -60,
      },
      1023: {
        items: 3,
        margin: -10,
      },
      1279: {
        items: 3,
        margin: -90,
      },
      1365: {
        margin: -850,
      },
      1439: {
        items: 4,
        margin: 40,
      },
    },
  });
});
