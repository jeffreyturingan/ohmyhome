/* MAIN JS*/
var $ = jQuery;

mobilenavigation();
bannerslider();
videoplayer();
servicesslider();

function bannerslider() {
    var _banner = $('.js-banner');
    if(!_banner.length) {return;}

    _banner.slick({
        lazyLoad: 'ondemand',
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        speed: 1000

    });
    _banner.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.slick-slide').removeClass('works');
    });
    _banner.on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.slick-current').addClass('works');
    });

}
function mobilenavigation() {
    var _mobilenav = $('.mobile-menuBtn');
    var _mobilenavclose = $('.mobile-menuBtn-close');
    if (!_mobilenav.length) {
        return;
    }

    _mobilenav.on('click',function () {
        $(this).addClass('open');
        $('.module-navigation__mainmenu').addClass('open');
    });

    _mobilenavclose.on('click',function () {
        _mobilenav.removeClass('open');
        $('.module-navigation__mainmenu').removeClass('open');
    });


}
function servicesslider() {
    var _slidermodule = $('.js-slider');
    if(!_slidermodule.length) {return;}

    _slidermodule.slick({
        lazyLoad: 'ondemand',
        centerMode: false,
        slidesToShow: 4,
        arrows: true,
        autoplay: false,
        prevArrow: '<button class="slick-arrow slick-prev"><i class="fa fa-angle-left"></i></button>', //$('.js-carousel-prev'),
        nextArrow: '<button class="slick-arrow slick-next"><i class="fa fa-angle-right"></i></button>',//$('.js-carousel-next'),
        responsive: [
            {
                breakpoint: 1920,
                settings: "unslick"
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: false
                }
            }
        ]
    });

    $(window).resize(function () {
        _slidermodule.slick('resize');
    });


}
function videoplayer() {
    var _playvideo = $('.js-videoplayer');
    var _videoembed = $('.js-videoplayer .acontent');
    if(!_playvideo.length) {return;}

    $('.video-playBtn').on('click',function (ev) {
        _videoembed.addClass('show');
        $('.video-play-caption').fadeOut();
        $("#videoembed")[0].src += "?&autoplay=1";
        ev.preventDefault();
    })

}
//# sourceMappingURL=main.js.map
