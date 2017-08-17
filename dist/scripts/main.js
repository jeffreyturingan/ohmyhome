/* MAIN JS*/
var $ = jQuery;

mobilenavigation();
videoplayer();
servicesslider();

function gallerymode() {
    var _datepick = $('#datepicker');
    if(!_datepick.length) {return;}
    _datepick.datepicker({ minDate: 0 });
}
function validateform() {
    var _validform = $('.js-form');
    if(!_validform.length) {return;}

    var _form = $('#testform', _validform),
        _formMethod = _form.attr('method'),
        _formAction = _form.attr('action');


    $('#verify').on('click',function(){
       if($(this).is(':checked')){
           $('#submitForm').removeAttr('disabled');
       } else {
           $('#submitForm').attr('disabled','disabled');
       }
    });
    $('#resetForm').on('click',function () {
        $('#submitForm').attr('disabled','disabled');
        $('span.error').remove();
    });



    _form.validate({
        errorElement: 'span', //default input error message container
        errorClass: 'error', // default input error message class
        validClass: "success",
        rules: {
            fullname: {
                required: true,
                minlength: 5
            },
            datepicker: "required"
        },
        messages: {
            fullname: {
                required: "Please enter your full name",
                minlength: "Atleast Five (5) characters are required"
            },
            datepicker: "Please select a date"
        },

        errorPlacement: function(error, element) {
            error.insertAfter(element); // <- the default
        },
        success: function(label,element) {
            label.hide();
        },
        invalidHandler: function(form) {

        },
        submitHandler: function(form) {
            // these two variables contain the form's data
            var _serializedData = _form.serializeArray(); // raw serialized form data (array)
            var _jsonData = JSON.stringify(_serializedData); // json form data

            // ajax call for form submission
            $.ajax({
                method: _formMethod,
                data: _serializedData,
                url: _formAction
            }).done(function(data) { // handle form submission once request is successful

                // show thank you panel
                $('#testform').addClass('hide',function () {
                    _validform.append('<div class="successbox"><h2>Success!! <small>Form Successfully Submitted. Thank You!</small></h2></div>');
                });

            }).always(function(data) { // send out a callback everytime a form submission is attempted

                // if submission fails we still want to show the thank you panel
                $('#testform').addClass('hide',function () {
                    _validform.append('<div class="successbox"><h2>Success!! <small>Form Successfully Submitted. Thank You!</small></h2></div>');
                });

            });
        }
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
