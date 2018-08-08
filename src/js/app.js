import jquery from 'jquery';
import slick from 'slick-carousel';

window.jQuery = window.$ = jquery;
window.slick = slick;

(function () {

  /**
   * Form-label
   */
  $('.form-control').on('focus', function () {
    $(this).parent().addClass('in-focus');
  });

  $('.form-control').on('blur', function () {
    if ($(this).val() !== "") {
      $(this).parent().addClass('in-focus');
    } else {
      $(this).parent().removeClass('in-focus');
    }
  });

  /**
   * Sliders
   */
  $('.briefcases-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: false,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    dotsClass: 'custom-dots',
  });

  $('#previews-slider-desktop').slick({
    lazyLoad: 'progressive',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: false,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    customPaging: function (slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a class="dot-numbers">' + '0' + (i + 1) + '</a>';
    },
  });

  $('#previews-slider-mobile').slick({
    lazyLoad: 'progressive',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: false,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    customPaging: function (slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a class="dot-numbers">' + '0' + (i + 1) + '</a>';
    },
  });

  /**
   * Popup
   */
  $('#app-form').on('submit', function (e) {
    e.preventDefault();

    var modal = $('#thank-popup');
    var overlay = $('#overplay');

    $(modal).fadeIn();
    $(overlay).fadeIn();

    $('#close-thank').on('click', function (event) {
      event.preventDefault();
      $(modal).fadeOut();
      $(overlay).fadeOut();
    });
  });

  /**
   * Tabs
   */
  $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.instruments-tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

  $('ul.icon-container').on('click', 'li:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section#previews').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
  });


})(jQuery)

