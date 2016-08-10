$(document).scroll(function() {    
    var scroll = $(this).scrollTop();

    if (scroll >= 50) {
        $("#menu").addClass("active");
    } else {
        $("#menu").removeClass("active");
    }

});


//Menu
$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});

 //
  // Intercept clicks to scroll within page and make sure top menu gets closed
  // when links in this menu are clicked.
  //
  $(document).on('click', '.navbar a', function (e) {

    var $a = $(e.currentTarget);
    var href = $a.attr('href');

    // We only care about "fragments"...
    if (href.charAt(0) !== '#') { return; }

    if (href === '#') { href = '#who'; }

    // Hack to close navbar dropdown when liks are clicked
    var $collapse = $a.parents('.navbar-collapse.in');
    if ($collapse.length) {
      $collapse.collapse('hide');
    }

    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 1500, 'swing');

    return false;
  });


  //
  // Update location hash as we scroll...
  //
  if (window.history && window.history.pushState) {
    $(document).on('scroll', function (e) {

      $('article').each(function () {

        // if begins before top but ends in visible area
        //+ 10 allows you to change hash before it hits the top border
        var beginsBeforeTop = $(this).offset().top < window.pageYOffset + 10;
        var endsInVisibleArea = $(this).offset().top + $(this).height() > window.pageYOffset + 10;
        if (beginsBeforeTop && endsInVisibleArea) {
          var id = $(this).attr('id');
          window.history.pushState({}, id, '#' + id);
        }
      });
    });
  }