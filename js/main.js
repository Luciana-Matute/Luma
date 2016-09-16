// Closes the Responsive Menu on Menu Item Click
$ ('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
$(document).ready(function(){
    loadGallery(true, 'a.img-portfolio');
    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current){
        $('#show-previous-image, #show-next-image').show();
        if(counter_max == counter_current){
            $('#show-next-image').hide();
        } else if (counter_current == 1){
            $('#show-previous-image').hide();
        }
    }

//
  // Intercepta clicks en menu principal para hacer scroll animado hasta la
  // sección correspondiente.
  //
  $(document).on('click', '.navbar a', function (e) {

    var href = $(e.currentTarget).attr('href');

    // We only care about "fragments"...
    if (href.charAt(0) !== '#') {
      return;
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
    $(document).on('scroll', function () {

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



    
    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */
    function loadGallery(setIDs, setClickAttr){
        var current_image,
            selector,
            counter = 0;
        $('#show-next-image, #show-previous-image').click(function(){
            if($(this).attr('id') == 'show-previous-image'){
                current_image--;
            } else {
                current_image++;
            }
            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });
        function updateGallery(selector) {
            var $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-caption').text($sel.data('caption'));
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }
        if(setIDs == true){
            $('[data-image-id]').each(function(){
                counter++;
                $(this).attr('data-image-id',counter);
            });
        }
        $(setClickAttr).on('click',function(){
            updateGallery($(this));
        });
    }
});