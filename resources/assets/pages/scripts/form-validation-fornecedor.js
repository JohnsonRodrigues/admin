var FormValidation = function () {

   var resetModalFormErrors = function () {
        $('.form-group').removeClass('has-error');
        $('.form-group').find('.help-block').remove();
    }


    // validation using icons
    var fornecedorValidation = function () {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form2 = $('#form_fornecedor');
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules: {
                tipo: {
                    required: true
                },
                nome: {
                    minlength: 15,
                    required: true
                },
                cep: {
                    minlength: 9,
                    maxlength: 9,
                    required: true
                },
                logradouro: {
                    required: true,
                    minlength: 10,
                },
                numero: {
                    required: true,
                    minlength: 2,
                },
                bairro: {
                    required: true,
                    minlength: 5,
                },
                cidade: {
                    required: true,
                    minlength: 5,
                },
                uf: {
                    required: true,
                },
                pais: {
                    required: true,
                    minlength: 2,
                },
                responsavel: {
                    required: true,
                    minlength: 5,
                },
                email: {
                    required: true,
                    email: true
                },
                rg: {
                    required: true,
                },
                cpf: {
                    required: true,
                },
                orgao_emissor: {
                    required: true,
                },
                inscricao_estadual: {
                    number: true
                },
                telefone1: {
                    required: true,
                    minlength: 13,
                    maxlength: 13,
                },
                celular1: {
                    required: true,
                    minlength: 14,
                    maxlength: 14,
                },
            },

            invalidHandler: function (event, validator) { //display error alert on form submit
                success2.hide();
                error2.show();
                App.scrollTo(error2, -200);
            },

            errorPlacement: function (error, element) { // render error placement for each input type
                var icon = $(element).parent('.input-icon').children('i');
                icon.removeClass('fa-check').addClass("fa-warning");
                icon.attr("data-original-title", error.text()).tooltip({'container': 'body'});
            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').removeClass("has-success").addClass('has-error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label, element) {
                var icon = $(element).parent('.input-icon').children('i');
                $(element).closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                icon.removeClass("fa-warning").addClass("fa-check");
            },

            submitHandler: function (form) {
                App.blockUI();
                success2.show();
                error2.hide();
                form.submit(); // submit the form
            }
        });


    }

    return {
        //main function to initiate the module
        init: function () {
            fornecedorValidation();
        }
    };
}();

jQuery(document).ready(function () {
    FormValidation.init();
});