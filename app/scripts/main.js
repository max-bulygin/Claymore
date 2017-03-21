$(document).ready(function() {
  $('.claymore-carousel__wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    prevArrow: '<span class="fa fa-chevron-left"></span>',
    nextArrow: '<span class="fa fa-chevron-right"></span>'
  });

  var $burgerDiv = $('#burger');
  var $icon = $('#burger span');

  $burgerDiv.on('click', function() {
    $(this).parent().toggleClass('active');
    if ($icon.hasClass('fa-bars')) {
      $icon.removeClass('fa-bars').addClass('fa-times');
    } else {
      $icon.removeClass('fa-times').addClass('fa-bars');
    }
  });
});
