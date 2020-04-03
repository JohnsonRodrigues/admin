var FormCustom = function () {
    var arbitroForm = function () {
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

    var selectAjax = function () {
        // $.ajaxSetup({
        //     headers: {
        //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        //     }
        // });
        $("#uf_origem").change(function () {
            var uf = $(this).val();
            $.ajax({
                url: base_path + 'dashboard/dca_federacao/arbitros/select',
                type: 'POST',
                data: {'uf': uf, '_token': $('meta[name="csrf-token"]').attr('content')},
                beforeSend: function () {
                    App.blockUI();
                    $("#cidade_origem").html('<option selected="selected" value="" disabled="disabled">carregando cidades.....</option>');
                },
                success: function (data) {
                    $("#cidade_origem").html('');
                    $("#cidade_origem").html(data.options);
                },
                complete: function (results) {
                    App.unblockUI();
                }
            });
        });
    }


    var arbitroFormCep = function () {
        var inputCepSocial = $('#cep_social');
        var inputCepComercial = $('#cep_comercial');

        $(inputCepSocial).cep({
            autofill_attr: "data-cep-social"
        });
        $(inputCepComercial).cep({
            autofill_attr: "data-cep-comercial"
        });

    }

    return {
        //main function to initiate the module
        init: function () {
            arbitroForm();
            arbitroFormCep();
            handleDatePickers();
            selectAjax();
        }
    };
}();

jQuery(document).ready(function () {
    FormCustom.init();
});