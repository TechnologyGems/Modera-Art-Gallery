"use strict";

jQuery(document).ready(function (e) {
  e(".artist-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {},
      },
      {
        breakpoint: 1028,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 770,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 430,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  jQuery(window).on("load", function () {
    $(".nav-pills li:first-child a").trigger("click"),
      $('a[data-toggle="pill"]').on("shown.bs.tab", function (e) {
        $(".slick-slider").slick("setPosition");
      }),
      $('button[role="pill"]').on("shown.bs.tab", function (e) {
        $(".slick-slider").slick("setPosition");
      });
  });

  e(".testimonial-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
});