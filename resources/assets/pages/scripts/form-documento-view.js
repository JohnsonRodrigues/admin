var FormCustomDocumento = function () {
    var documentoForm = function () {
        $('option[value=""]').attr("disabled", "disabled");

        if (put=='put')
            $('#documento').rules('remove', 'required')
    }


    var handleSelecOptioTipoDocumento = function () {
        tipoDocumento = tipoDocumento.split(",");
        $("#tipo_documento option").each(function (index, element) {
            if ($.inArray($(element).val(), tipoDocumento) !== -1) {
                $(this).prop('disabled', true);
            }
        });
    }

    return {
        //main function to initiate the module
        init: function () {
            documentoForm();
            handleSelecOptioTipoDocumento();
        }
    };
}();

jQuery(document).ready(function () {
    FormCustomDocumento.init();
});