jQuery(document).ready(function ($) {
    setTimeout(function () {
        $(".loader-wrapper").fadeOut();
    }, 1000);
    $("#hamburger-btn").click(function () {
        if($(this).hasClass('opened')) {
            $("nav ul").slideUp();
        } else {
            $("nav ul").slideDown();
        }
        $(this).toggleClass('opened');
    });
});