var FormCustom = function () {
    var clubeForm = function () {
        $('option[value=""]').attr("disabled", "disabled");
    }


    var clubeFormCep = function () {
        var inputCepSocial = $('#cep_social');
        var inputCepCorrespondencia = $('#cep_correspondencia');

        $(inputCepSocial).cep({
            autofill_attr: "data-cep-social"
        });
        $(inputCepCorrespondencia).cep({
            autofill_attr: "data-cep-correspondencia"
        });

    }

    return {
        //main function to initiate the module
        init: function () {
            clubeForm();
            clubeFormCep();
        }
    };
}();

jQuery(document).ready(function () {
    FormCustom.init();
});