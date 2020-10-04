window.onload = function(){
    var mascaraCPF = function (v) {
        return v.replace(/\D/g, '').length === 11 ? '000.000.000-00' : '000.000.000-00';
    },
    options = {
        onKeyPress: function (v, e, field, options) {
            field.mask(mascaraCPF.apply({}, arguments), options);
        }
    };
    $('#visor').mask(mascaraCPF, options);

    var mascaraCEP = function (v) {
        return v.replace(/\D/g, '').length === 8 ? '00000-000' : '00000-000';
    },
    options = {
        onKeyPress: function (v, e, field, options) {
            field.mask(mascaraCEP.apply({}, arguments), options);
        }
    };
    $('#visor3').mask(mascaraCEP, options);
}
