jQuery(document).ready(function ($) {
    $("#hamburger-btn").click(function () {
        if($(this).hasClass('opened')) {
            $("nav ul").slideUp();
        } else {
            $("nav ul").slideDown();
        }
        $(this).toggleClass('opened');
    });
    $("nav ul li a").click(function () {
        if($("#hamburger-btn").hasClass('opened')) {
            $("nav ul").slideUp();
        }
        $("#hamburger-btn").toggleClass('opened');
    });
});