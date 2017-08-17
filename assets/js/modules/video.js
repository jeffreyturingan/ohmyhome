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