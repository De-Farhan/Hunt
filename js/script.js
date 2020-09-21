// ==============================  navbar collapsed start ====================================
$("#menu-bar ul li a").on("click", function () {
  $("#menu-bar .navbar-collapse").collapse("hide");
});
// ==============================  navbar collapsed end ====================================

// ============================== fixed navbar start ====================================
$(window).scroll(function () {
  var scrollamout = $(window).scrollTop();
  if (scrollamout > 115) {
    $(".navbar").addClass("fixed-navbar");
  } else {
    $(".navbar").removeClass("fixed-navbar");
  }
});

// Add smooth scrolling on all links inside the navbar
$("#menu-bar ul li a").on("click", function (event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      }
    );
  } // End if
});
// ============================== fixed navbar end ====================================

// ============================== back-top btn start ====================================
$(window).scroll(function () {
  var scrollamout = $(window).scrollTop();
  if (scrollamout > 700) {
    $(".back-top").addClass("fixed-back-top");
  } else {
    $(".back-top").removeClass("fixed-back-top");
  }
});

$(".back-top i").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1000);
});
// ============================== back-top btn end ====================================

// ============================== banner part slider start ====================================
$("#banner-part").slick({
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: true,
  nextArrow: '<i class="fas fa-arrow-circle-right left"></i>',
  prevArrow: '<i class="fas fa-arrow-circle-left right"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// ============================== banner part slider end ====================================

// ============================== port part venobox start ====================================
$(document).ready(function () {
  $(".port-part .venobox").venobox();
});
// ============================== port part venobox end ====================================

// ============================== service part slider start ====================================
$("#service-part .service-items .slider-items").slick({
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<i class="fas fa-angle-down bottom"></i>',
  prevArrow: '<i class="fas fa-angle-up top"></i>',
  vertical: true,
  verticalSwiping: true,
  centerMode: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// ============================== service part slider end ====================================

// ============================== testi part slider start ====================================
$("#testi-part .testi-part .one-items").slick({
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: true,
  nextArrow: '<i class="fas fa-angle-down bottom"></i>',
  prevArrow: '<i class="fas fa-angle-up top"></i>',
  vertical: true,
  verticalSwiping: true,
  centerMode: true,
  centerPadding: "0",
  asNavFor: "#testi-part .testi-part .slider-two",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<i class="fas fa-angle-right bottom"></i>',
        prevArrow: '<i class="fas fa-angle-left top"></i>',
      },
    },
    {
      breakpoint: 768,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<i class="fas fa-angle-right bottom"></i>',
        prevArrow: '<i class="fas fa-angle-left top"></i>',
      },
    },
    {
      breakpoint: 576,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<i class="fas fa-angle-right bottom"></i>',
        prevArrow: '<i class="fas fa-angle-left top"></i>',
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$("#testi-part .testi-part .slider-two").slick({
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  asNavFor: "#testi-part .testi-part .one-items",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// ============================== testi part slider end ====================================

// ============================== banner part slider start ====================================
$("#team-part .row").slick({
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  nextArrow: '<i class="fas fa-arrow-circle-right left"></i>',
  prevArrow: '<i class="fas fa-arrow-circle-left right"></i>',
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 992,
      settings: "unslick",
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// ============================== banner part slider end ====================================

// ============================== counter part slider start ====================================
$("#counter-part .counter-item p .counter").counterUp({
  delay: 10,
  time: 1000,
});
// ============================== counter part slider end ====================================

// ============================== team part venobox start ====================================
$(document).ready(function () {
  $("#team-part .venobox").venobox();
});
// ============================== team part venobox end ====================================
