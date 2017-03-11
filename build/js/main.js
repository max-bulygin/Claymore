var $burgerDiv = $('#burger');
var $icon = $('#burger span')

$burgerDiv.on('click', function () {
  $(this).parent().toggleClass('active');
  if ($icon.hasClass('fa-bars')) {
    $icon.removeClass('fa-bars').addClass('fa-times');
  } else {
    $icon.removeClass('fa-times').addClass('fa-bars');
  }

});