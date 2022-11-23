jQuery(document).ready(function($) {
    // ANIMATIONS
    var $animation_elements = $('[data-animation]');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {

                $element.addClass('animate__animated ' + $element.attr('data-animation'));

                $element.css({
                    '-webkit-animation-delay':  $element.attr('data-animation-delay') + 's',
                    '-moz-animation-delay':     $element.attr('data-animation-delay') + 's',
                    'animation-delay':         $element.attr('data-animation-delay') + 's'
                });

            }
        });
    }

    if($(window).width() > 1199) {
        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
    }
    // END OF ANIMATIONS
});