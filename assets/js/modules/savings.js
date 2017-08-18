function savingsrange() {
    var _range = $('.range-slider');
    var _inrange = $('.range');
    if(!_range.length) {return;}

    _inrange.on('change',function () {
        var _cval = $(this).val();
        var _savings = (_cval * 0.02) - 2888;


        $('.sellingprice span').text(commaSeparateNumber(_cval));
        $('.savingsamount span').text(commaSeparateNumber(_savings));




    });



}
function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
        val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}