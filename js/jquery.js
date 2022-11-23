jQuery(document).ready(function ($) {
    // loader
    $('.loader-wrapper').fadeOut();
    //scrollng nav
    $(window).scroll(function() {
        if($(window).scrollTop() > 30) {
            $('nav').addClass('fixed-nav');
        }
        else {
            $('nav').removeClass('fixed-nav');
        }
    });
    // search
    $("#search-btn").click(function (e) {
        e.preventDefault();
        $(".search-wrapper").fadeIn();
    });

    $("#close-search").click(function (e) {
        e.preventDefault();
        $(".search-wrapper").fadeOut();
    });
    // read-more CV
    $("#read-more").click(function (e) {
        e.preventDefault();
        $(".read-wrapper").fadeIn();
    });
    $("#close-read").click(function (e) {
        e.preventDefault();
        $(".read-wrapper").fadeOut();
    });
    // hamburger manu
    $("#hamburger-btn").click(function () {
        if($(this).hasClass('opened')) {
            $("nav ul").slideUp();
        } else {
            $("nav ul").slideDown();
        }
        $(this).toggleClass('opened');
    });
});