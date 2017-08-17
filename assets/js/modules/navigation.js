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