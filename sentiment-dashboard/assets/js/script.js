"use strict";
$(document).ready(function() {
    // card js start
    $(".card-header-right .close-card").on('click', function() {
        var $this = $(this);
        $this.parents('.card').animate({
            'opacity': '0',
            '-webkit-transform': 'scale3d(.3, .3, .3)',
            'transform': 'scale3d(.3, .3, .3)'
        });
        setTimeout(function() {
            $this.parents('.card').remove();
        }, 800);
    });
    $(".card-header-right .reload-card").on('click', function() {
        var $this = $(this);
        $this.parents('.card').addClass("card-load");
        $this.parents('.card').append('<div class="card-loader"><i class="feather icon-radio rotate-refresh"></div>');
        setTimeout(function() {
            $this.parents('.card').children(".card-loader").remove();
            $this.parents('.card').removeClass("card-load");
        }, 3000);
    });
    $(".card-header-right .card-option .open-card-option").on('click', function() {
        var $this = $(this);
        if ($this.hasClass('icon-x')) {
            $this.parents('.card-option').animate({
                'width': '30px',
            });
            $(".open-card-option").removeClass("icon-x").fadeIn('slow');
            $(".open-card-option").addClass("icon-chevron-left").fadeIn('slow');
            $this.parents('.card-option').children(".first-opt").fadeIn();
        } else {
            $this.parents('.card-option').animate({
                'width': '130px',
            });
            $(".open-card-option").addClass("icon-x").fadeIn('slow');
            $(".open-card-option").removeClass("icon-chevron-left").fadeIn('slow');
            $this.parents('.card-option').children(".first-opt").fadeOut();
        }
    });
    $(".card-header-right .minimize-card").on('click', function() {
        var $this = $(this);
        var port = $($this.parents('.card'));
        var card = $(port).children('.card-block').slideToggle();
        $(this).toggleClass("icon-minus").fadeIn('slow');
        $(this).toggleClass("icon-plus").fadeIn('slow');
    });
    $(".card-header-right .full-card").on('click', function() {
        var $this = $(this);
        var port = $($this.parents('.card'));
        port.toggleClass("full-card");
        $(this).toggleClass("icon-minimize");
        $(this).toggleClass("icon-maximize");
    });
    $("#more-details").on('click', function() {
        $(".more-details").slideToggle(500);
    });
    $(".mobile-options").on('click', function() {
        $(".navbar-container .nav-right").slideToggle('slow');
    });
    $(".search-btn").on('click', function() {
        $(".main-search").addClass('open');
        $('.main-search .form-control').animate({
            'width': '200px',
        });
    });
    $(".search-close").on('click', function() {
        $('.main-search .form-control').animate({
            'width': '0',
        });
        setTimeout(function() {
            $(".main-search").removeClass('open');
        }, 300);
    });
    // card js end

    /*chatbar js start*/

    $('[data-toggle="tooltip"]').tooltip();

    // wave effect js
    Waves.init();
    Waves.attach('.flat-buttons', ['waves-button']);
    Waves.attach('.float-buttons', ['waves-button', 'waves-float']);
    Waves.attach('.float-button-light', ['waves-button', 'waves-float', 'waves-light']);
    Waves.attach('.flat-buttons', ['waves-button', 'waves-float', 'waves-light', 'flat-buttons']);

    $('#mobile-collapse i').addClass('icon-toggle-right');
    $('#mobile-collapse').on('click', function() {
        $('#mobile-collapse i').toggleClass('icon-toggle-right');
        $('#mobile-collapse i').toggleClass('icon-toggle-left');
    });
});
$(document).ready(function() {
    var $window = $(window);
    // $('.loader-bar').animate({
    //     width: $window.width()
    // }, 1000);
    // setTimeout(function() {
        // while ($('.loader-bar').width() == $window.width()) {
            // $(window).on('load',function(){
                $('.loader-bg').fadeOut();
            // });

            // break;

        // }
    // }, 2000);
});

// toggle full screen
function toggleFullScreen() {
    var a = $(window).height() - 10;

    if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
    $('.full-screen').toggleClass('icon-maximize');
    $('.full-screen').toggleClass('icon-minimize');
}
// $('body').append('' +
//     '<div class="fixed-button">' +
//         '<a href="https://themeforest.net/item/able-pro-responsive-bootstrap-4-admin-template/19300403?ref=phoenixcoded" target="_blank" class="btn btn-md btn-primary">' +
//             '<i class="fa fa-shopping-cart" aria-hidden="true"></i> Upgrade To Pro' +
//         '</a> ' +
//     '</div>' +
// '');
var $window = $(window);
var nav = $('.fixed-button');
$window.scroll(function() {
    if ($window.scrollTop() >= 200) {
        nav.addClass('active');
    } else {
        nav.removeClass('active');
    }
});