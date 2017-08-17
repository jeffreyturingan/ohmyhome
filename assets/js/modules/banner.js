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