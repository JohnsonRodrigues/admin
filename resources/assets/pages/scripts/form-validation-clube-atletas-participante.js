var FormValidation = function () {

    var resetModalFormErrors = function () {
        $('.form-group').removeClass('has-error');
        $('.form-group').find('.help-block').remove();
    }


    // validation using icons
    var clubeAtletaParticipanteValidation = function () {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form2 = $('#form_clube_atletas_participante');
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules: {
                atletas_participantes: {
                    validaHidden: true
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

            submitHandler: function (form) {
                App.blockUI();
                success2.show();
                error2.hide();
                form.submit(); // submit the form
            }
        });

        $.validator.addMethod("validaHidden", function (value, element) {
            return $('#atletas_participantes_selecionado').val()!=='';
        });

        $('#submit-work-form').validate({
            submitHandler: function (form) {
                //form.submit();
            }
        });

    }

    return {
        //main function to initiate the module
        init: function () {
            clubeAtletaParticipanteValidation();
        }
    };
}();

jQuery(document).ready(function () {
    FormValidation.init();
});