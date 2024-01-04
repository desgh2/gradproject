jQuery(document).ready(function($) {

    $('.owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 3,
            }
        },
        center: true,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"]
    });

    $("#scrolltop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        });
        return false;
    });

    $(window).bind('scroll', function() {
        if ($(this).scrollTop() > 200) {
            $("#scrolltop").show();
        } else {
            $("#scrolltop").hide();
        }
    });
});