var FormValidation = function () {

    var parcelasAPagarForm = function () {
        $('option[value=""]').attr("disabled", "disabled");
    }


    var resetFormErrors = function () {
        $(document).on("click", ".parcelasForm,.anexarDocumentoForm", function () {
            var form2 = $('#form_parcelas_a_pagar_financeiro');
            var error2 = $('.alert-danger', form2);
            var success2 = $('.alert-success', form2);

            form2[0].reset();
            form2.validate().resetForm();
            form2.find('.has-error').removeClass("has-error");
            form2.find('.has-success').removeClass("has-success");
            form2.find('.form-control-feedback').remove()
            form2.find('.input-icon').children('i').removeClass("fa-check");
            form2.find('.input-icon').children('i').removeClass("fa-warning");
            success2.hide();
            error2.hide();
        });
    }


    var resetModalFormErrors2 = function (form2) {
        $('.form-group').removeClass('has-error');
        $('.form-group').find('.help-block').remove();
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        form2.validate().resetForm();
        form2.find('.has-error').removeClass("has-error");
        form2.find('.has-success').removeClass("has-success");
        form2.find('.form-control-feedback').remove()
        form2.find('.input-icon').children('i').removeClass("fa-check");
        form2.find('.input-icon').children('i').removeClass("fa-warning");
        success2.hide();
        error2.hide();
    }


    // validation using icons
    var parcelasAPagarValidation = function () {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form2 = $('#form_parcelas_a_pagar_financeiro');
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules: {
                valor_pago: {
                    required: true
                },
                forma_de_pagamento_id: {
                    required: true
                }
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

            submitHandler: function (form, submission) {
                App.blockUI();
                success2.show();
                error2.hide();
                enviar(submission, form2);
            }
        });
    }

    var anexarDocumentoValidation = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation

        var form2 = $('#form_anexar_documento_financeiro');
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules: {
                documento: {
                    required: true
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

            submitHandler: function (form, submission) {
                App.blockUI();
                success2.show();
                error2.hide();
                enviar(submission, form2);
            }
        });
    }


    // Prepare reset.
    function resetModalFormErrors() {
        $('.form-group').removeClass('has-error');
        $('.form-group').find('.help-block').remove();
    }

    // Intercept submit.
    function enviar(submission, form2) {
        submission.preventDefault();


        // Set vars.
        var form = form2,
            url = form.attr('action'),
            submit = form.find('[type=submit]');


        // Check for file inputs.
        if (form.find('[type=file]').length) {

            // If found, prepare submission via FormData object.
            var input = form.serializeArray(),
                data = new FormData(),
                contentType = false;

            // Append input to FormData object.
            $.each(input, function (index, input) {
                data.append(input.name, input.value);
            });

            // Append files to FormData object.
            $.each(form.find('[type=file]'), function (index, input) {
                if (input.files.length == 1) {
                    data.append(input.name, input.files[0]);
                } else if (input.files.length > 1) {
                    data.append(input.name, input.files);
                }
            });
        }

        // If no file input found, do not use FormData object (better browser compatibility).
        else {
            var data = form.serialize(),
                contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
        }

        // Please wait.
        if (submit.is('button')) {
            var submitOriginal = submit.html();
            submit.html('<i class="fa fa-spinner"></i> aguarde...');
        } else if (submit.is('input')) {
            var submitOriginal = submit.val();
            submit.val('<i class="fa fa-spinner"></i> aguarde...');
        }

        // Request.
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            dataType: 'json',
            cache: false,
            contentType: contentType,
            processData: false

            // Response.
        }).always(function (response, status) {

            // Reset errors.
            resetModalFormErrors();


            // Check for errors.
            if (response.status == 422) {
                App.unblockUI();
                var errors = $.parseJSON(response.responseText);

                // Iterate through errors object.
                $.each(errors, function (field, message) {
                    // console.error(field + ': ' + message);
                    //handle arrays
                    if (field.indexOf('.') != -1) {
                        field = field.replace('.', '[');
                        //handle multi dimensional array
                        for (i = 1; i <= (field.match(/./g) || []).length; i++) {
                            field = field.replace('.', '][');
                        }
                        field = field + "]";
                    }
                    var formGroup = $('[name=' + field + ']', form).closest('.form-group');
                    formGroup.addClass('has-error').append('<p class="help-block">' + message + '</p>');
                });

                // Reset submit.
                if (submit.is('button')) {
                    submit.html(submitOriginal);
                } else if (submit.is('input')) {
                    submit.val(submitOriginal);
                }

                Swal.fire({
                    'title': 'Ops..., ocorreu um erro ao excluír, tente novamente.',
                    'type': "error"
                });

                // If successful, reload.
            } else {
                App.unblockUI();
                $('#dataTableBuilder').DataTable().ajax.reload();
                Swal.fire({
                    'title': 'Documento anexado com sucesso!!!',
                    'type': "success"
                });
                $('#modalAnexarDocumento').modal('hide');
                $('#modalBaixarParcela').modal('hide');
                $('#modalDocumento').modal('hide');
                if (submit.is('button')) {
                    submit.html(submitOriginal);
                } else if (submit.is('input')) {
                    submit.val(submitOriginal);
                }
                resetModalFormErrors2(form);
                //location.reload();
            }
        });
    }


    return {
        //main function to initiate the module
        init: function () {
            parcelasAPagarForm();
            parcelasAPagarValidation();
            anexarDocumentoValidation();
            resetFormErrors();
        }
    };
}();

jQuery(document).ready(function () {
    FormValidation.init();
});