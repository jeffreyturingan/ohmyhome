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