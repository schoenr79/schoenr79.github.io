/* ===================================
    sticky nav
 ====================================== */

$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});

$(document).ready(function () {
  
    //Disable mouse scroll wheel zoom on embedded Google Maps
    $('.maps').click(function () {
        $('.maps iframe').css("pointer-events", "auto");
    });

    $(".maps").mouseleave(function () {
        $('.maps iframe').css("pointer-events", "none");
    });

/* ===================================
    owl slider
 ====================================== */
    $(".owl-slider-full").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    $("#owl-demo-background").owlCarousel({
        transitionStyle: "fade",
        autoPlay: 3000,
        slideSpeed: 100,
        singleItem: true,
        navigation: false,
        pagination: false,
        touchDrag: false,
        mouseDrag: false
    });

    $(".blog-slider").owlCarousel({
        autoPlay: 4000,
        slideSpeed: 1000,
        navigation: false,
        pagination: false,
        items: 4,
        itemsDesktop: [1200, 3],
        itemsTablet: [800, 2],
        itemsMobile: [700, 1]
    });

/* ===================================
    shrink navigation
 ====================================== */

    $(window).scroll();
    $(window).scroll(function () {
        if ($(window)
                .scrollTop() > 10) {
            $('nav')
                    .addClass('shrink');
        } else {
            $('nav')
                    .removeClass('shrink');
        }
    });

    $('.navigation-menu')
            .onePageNav({
                scrollSpeed: 750,
                scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
                scrollOffset: 79, //Height of Navigation Bar
                currentClass: 'active',
                filter: ':not(.btn-very-small)'
            });

    setTimeout(function () {
        $(window).scroll();
    }, 500);

    //close navbar menu after clicking menu href
    $('ul.navbar-nav li a')
            .click(function (e) {
                $(this)
                        .parents('div.navbar-collapse')
                        .removeClass('in');
            });

    // pull-menu close on href click event in mobile devices
    $('.pull-menu a.section-link')
        .click(function (e) {
            if ($(window).width() <= 500)
                $('#close-button').click();
    });

    

    


/*==============================================================
    modal ajax
==============================================================*/
$("#myModal").on("show.bs.modal", function(event){
    // Place the returned HTML into the selected element
    $(this).find(".modal-body").load("impressum-datenschutz.html");
});



    //end ready
});





/*==============================================================
    full screen
 ==============================================================*/

function SetResizeContent() {
    var minheight = $(window).height();
    $(".full-screen").css('min-height', minheight);
}
SetResizeContent();

$(window).resize(function () {
    SetResizeContent();
});

/*==============================================================
    elements active class
 ==============================================================*/

jQuery(function ($) {
    $('div.widget-body ul.category-list li a').click(function (e) {
        $('div.widget-body ul.category-list li a').removeClass('active');
        $(this).addClass('active');
    });
});

/*==============================================================
    wow animation - on scroll
 ==============================================================*/

var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 90,
    mobile: false,
    live: true
});
wow.init();

/*==============================================================
    ajax aagnific popup for onepage portfolio
==============================================================*/

$('.work-details-popup').on('click', function () {
    $.magnificPopup.open({
        items: {
            src: $(this).parents('li').find('.popup-main'),
        },
        type: 'inline',
        fixedContentPos: true,
        closeOnContentClick: true,
        callbacks: {
            beforeOpen: function () {
                startWindowScroll = $(window).scrollTop();
            },
            open: function () {
                $('.mfp-wrap').addClass('popup-bg');
                ReloadOwlCarousel();
            },
            close: function () {
                $('.mfp-wrap').removeClass('popup-bg');
                $(window).scrollTop(startWindowScroll);
            }
        }
    });

});

/*==============================================================
    pull menu
 ==============================================================*/

function bindEvent(el, eventName, eventHandler) {
    if (el.addEventListener) {
        el.addEventListener(eventName, eventHandler, false);
    } else if (el.attachEvent) {
        el.attachEvent('on' + eventName, eventHandler);
    }
}

(function () {

    var bodyEl = document.body,
            //content = document.querySelector( '.content-wrap' ),
            openbtn = document.getElementById('open-button'),
            closebtn = document.getElementById('close-button'),
            isOpen = false;

    function init() {
        initEvents();
    }

    function initEvents() {
        if (openbtn) {
            bindEvent(openbtn, 'click', toggleMenu);

        }
        //openbtn.addEventListener( 'click', toggleMenu );
        if (closebtn) {

            bindEvent(closebtn, 'click', toggleMenu);
            //closebtn.addEventListener( 'click', toggleMenu );
        }

        // close the menu element if the target itÂ´s not the menu element or one of its descendants..

    }

    function toggleMenu() {

        if (isOpen) {
            classie.remove(bodyEl, 'show-menu');
        }
        else {
            classie.add(bodyEl, 'show-menu');
        }
        isOpen = !isOpen;
    }

    init();

})();

/*==============================================================
    scroll to top
==============================================================*/
$(window).scroll(function () {
    if ($(this)
            .scrollTop() > 100) {
        $('.scrollToTop')
                .fadeIn();
    } else {
        $('.scrollToTop')
                .fadeOut();
    }
});

    //Click event to scroll to top
$('.scrollToTop').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});

$('.panel a, .nav-tabs a').click(function (e) {
    if ($(this).is("[data-parent]") || $(this).is("[data-toggle]")) {
        e.preventDefault();
    }

});

/*==============================================================
    dropdown menu
==============================================================*/

$(function () {
    $(".dropdown").hover(
            function () {
                $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");
            },
            function () {
                $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");
            });
});
