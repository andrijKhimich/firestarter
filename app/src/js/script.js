const humburger = $(".js-humburger");
const headerMenu = $(".nav");
const menuLink = $(".nav-list li a");


function openMenu() {
  humburger.addClass('open');
  headerMenu.addClass('open');
}

function closeMenu() {
  humburger.removeClass('open');
  headerMenu.removeClass('open');
}

function showContent() {
  $(".main-wrapper").removeClass("js-fadeIn");
}

$(document).ready(function () {

  $("input.wpcf7-form-control, textarea.wpcf7-form-control").attr("autocomplete", "off");

  humburger.click(function () {
    if ($(this).hasClass('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  showContent();

  $('.award-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    dots: false,
    arrows: true,
    prevArrow: $('.js-award_prev'),
    nextArrow: $('.js-award_next'),
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          dots: true
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          dots: true
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      }
    ]
  });


  menuLink.click(function (e) {
    e.preventDefault();
    let link = $($(this).attr('href'))
    $('html, body').animate({
      scrollTop: link.offset().top
    }, 1000);
  });

});



$(window).scroll(function () {
  closeMenu();
});

$('.testimonials-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  arrows: true,
  infinite: false,
  prevArrow: $('.js-testimonials_prev'),
  nextArrow: $('.js-testimonials_next'),
  responsive: [{
    breakpoint: 768,
    settings: {
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }]
});

// $('.award-slider').slick({
//   slidesToShow: 6,
//   slidesToScroll: 1,
//   autoplay: false,
//   infinite: false,
//   dots: false,
//   arrows: true,
//   prevArrow: $('.js-award_prev'),
//   nextArrow: $('.js-award_next')
// });
// $('.testimonials-slider__wrapper').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   dots: true,
//   arrows: false,
//   infinite: true,
//   fade: true,
//   speed: 1000,
//   cssEase: 'linear',
//   autoplaySpeed: 10000,
//   arrows: true,
//   prevArrow: $('.testimonials-slider_prev'),
//   nextArrow: $('.testimonials-slider_next')
// });
// });
svg4everybody();

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});