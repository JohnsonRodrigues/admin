var FormCustom = function () {
    var atletaForm = function () {
        $('option[value=""]').attr("disabled", "disabled");
    }

    var handleDatePickers = function () {
        if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: App.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'pt-BR',
                keyboardNavigation: true,
                todayHighlight: true
            });
        }
    }


    var atletaFormCep = function () {
        var inputCep = $('#cep');
        $(inputCep).cep();
    }

    return {
        //main function to initiate the module
        init: function () {
            atletaForm();
            atletaFormCep();
            handleDatePickers();
        }
    };
}();

jQuery(document).ready(function () {
    FormCustom.init();
});