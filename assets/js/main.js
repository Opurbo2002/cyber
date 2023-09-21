// Wow
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
    }
    )
    new WOW().init();

$('.menu-icon').on('click', function() {
  $(this).toggleClass("active");
  $('.main-menu').toggleClass("active").animate({
    scrollTop: 0
  });
  $('.navigation-sub-menu').slideUp();
});

$('.sub-menu-trigger').click(function() {
  $('.navigation-sub-menu').slideToggle(400);
});

$('html').on('click', function(e) {
  if (!$('.menu-icon').is(e.target) && $('.main-menu').has(e.target).length === 0) {
    $('.menu-icon').removeClass('active');
    $('.main-menu').removeClass('active');
  }
});

