jQuery(document).ready(function ($) {
    $("#hamburger-btn").click(function () {
        if($(this).hasClass('opened')) {
            $("nav ul").slideUp();
        } else {
            $("nav ul").slideDown();
        }
        $(this).toggleClass('opened');
    });
});