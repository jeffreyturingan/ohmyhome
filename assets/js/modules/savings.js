function savingsrange() {
    var _range = $('.range-slider');
    var _inrange = $('.range');
    if(!_range.length) {return;}

    _inrange.on('change',function () {
        var _cval = $(this).val();
        var _savings = (_cval * 0.02) - 2888;

        $('.sellingprice span').text((Math.round(_cval * 100) / 100).toLocaleString());
        $('.savingsamount span').text((Math.round(_savings * 100) / 100).toLocaleString());

    });



}

