var FormWizard = function () {
    return {
        //main function to initiate the module
        init: function () {
            if (!jQuery().bootstrapWizard) {
                return;
            }

            var form = $('#form_pessoa_clube');
            var error = $('.alert-danger', form);
            var success = $('.alert-success', form);

            form.validate({
                doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                rules: {
                    foto: {
                        required: false
                    },
                    cpf: {
                        required: true
                    },
                    nome_completo: {
                        minlength: 5,
                        required: true
                    },
                    primeiro_nome: {
                        minlength: 1,
                        required: true
                    },
                    data_nascimento: {
                        required: true
                    },
                    sexo: {
                        required: true
                    },

                },
                errorPlacement:
                    function (error, element) { // render error placement for each input type
                        if (element.attr("name") == "gender") { // for uniform radio buttons, insert the after the given container
                            error.insertAfter("#form_gender_error");
                        } else if (element.attr("name") == "payment[]") { // for uniform checkboxes, insert the after the given container
                            error.insertAfter("#form_payment_error");
                        } else {
                            error.insertAfter(element); // for other inputs, just perform default behavior
                        }
                    }
                ,
                invalidHandler: function (event, validator) { //display error alert on form submit
                    success.hide();
                    error.show();
                    App.scrollTo(error, -200);
                }
                ,
                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group
                }
                ,
                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                }
                ,
                success: function (label) {
                    if (label.attr("for") == "gender" || label.attr("for") == "payment[]") { // for checkboxes and radio buttons, no need to show OK icon
                        label
                            .closest('.form-group').removeClass('has-error').addClass('has-success');
                        label.remove(); // remove error label here
                    } else { // display success icon for other inputs
                        label
                            .addClass('valid') // mark the current input as valid and display OK icon
                            .closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                    }
                }
                ,
                submitHandler: function (form) {
                    App.blockUI();
                    success.show();
                    error.hide();
                    form.submit();
                }
            })
            ;
            var displayConfirm = function () {
                $('#tab6 .form-control-static', form).each(function () {
                    var input = $('[name="' + $(this).attr("data-display") + '"]', form);
                    if (input.is(":radio")) {
                        input = $('[name="' + $(this).attr("data-display") + '"]:checked', form);
                    }
                    if (input.is(":text") || input.is("textarea")) {
                        $(this).html(input.val());
                    } else if (input.is("select")) {
                        $(this).html(input.find('option:selected').text());
                    } else if (input.is(":radio") && input.is(":checked")) {
                        $(this).html(input.attr("data-title"));
                    }
                });
            }


            var handleTitle = function (tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                // set wizard title
                $('.step-title', $('#form_wizard_1')).text('Passo ' + (index + 1) + ' de ' + total);
                // set done steps
                jQuery('li', $('#form_wizard_1')).removeClass("done");
                var li_list = navigation.find('li');
                for (var i = 0; i < index; i++) {
                    jQuery(li_list[i]).addClass("done");
                }

                if (current == 1) {
                    $('#form_wizard_1').find('.button-previous').hide();
                } else {
                    $('#form_wizard_1').find('.button-previous').show();
                }

                if (current >= total) {
                    $('#form_wizard_1').find('.button-next').hide();
                    $('#form_wizard_1').find('.button-submit').show();
                    displayConfirm();
                } else {
                    $('#form_wizard_1').find('.button-next').show();
                    $('#form_wizard_1').find('.button-submit').hide();
                }
                App.scrollTo($('.page-title'));
            }

            $('#form_wizard_1').bootstrapWizard({
                'nextSelector': '.button-next',
                'previousSelector': '.button-previous',
                onTabClick: function (tab, navigation, index, clickedIndex) {
                    return false;

                    success.hide();
                    error.hide();
                    if (form.valid() == false) {
                        return false;
                    }

                    handleTitle(tab, navigation, clickedIndex);
                },
                onNext: function (tab, navigation, index) {
                    success.hide();
                    error.hide();

                    if (form.valid() == false) {
                        return false;
                    }

                    handleTitle(tab, navigation, index);
                },
                onPrevious: function (tab, navigation, index) {
                    success.hide();
                    error.hide();

                    handleTitle(tab, navigation, index);
                },
                onTabShow: function (tab, navigation, index) {
                    var total = navigation.find('li').length;
                    var current = index + 1;
                    var $percent = (current / total) * 100;
                    $('#form_wizard_1').find('.progress-bar').css({
                        width: $percent + '%'
                    });
                }
            });

            $('#form_wizard_1').find('.button-previous').hide();
            $('#form_wizard_1 .button-submit').click(function () {
            }).hide();
        }
    };
}();


var FormCustom = function () {
    var pessoaClubeForm = function () {
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


    var pessoaClubeFormCep = function () {
        var inputCep = $('#cep');
        $(inputCep).cep();
    }

    var pessoaClubeFormUsuario = function () {
        $('#usuario').on('change', function () {
            if ($(this).val() === 'NÃO') {
                $('#email').prop("disabled", true);
            } else {
                $('#email').prop("disabled", false);
            }
        });
    }

    return {
        //main function to initiate the module
        init: function () {
            pessoaClubeForm();
            pessoaClubeFormCep();
            handleDatePickers();
            pessoaClubeFormUsuario();
        }
    };
}();


var BootstrapInputFilePessoa = function () {

    var inputFileConfig = function () {
        $(".avatar").fileinput({
            language: "pt-BR",
            overwriteInitial: true,
            maxFileSize: 2000,
            showClose: false,
            showCaption: false,
            showBrowse: false,
            browseOnZoneClick: true,
            browseLabel: '',
            removeLabel: '',
            browseIcon: '',
            removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
            removeTitle: 'Cancelar ou redefinir alterações',
            elErrorContainer: '#kartik-file-errors',
            defaultPreviewContent: '<img src=' + urlImagemFile + ' width="150px" alt="imagem"><h5 class="text-muted">Clique para selecionar</h6>',
            layoutTemplates: {main2: '{preview} {remove} {browse}'},
            allowedFileExtensions: ["jpg", "png", "gif"],
            fileActionSettings: {
                showDrag: false,
                showZoom: false,
                showUpload: false,
                showRemove: false,
                showDrag: false,
                indicatorNew: "",
                indicatorSuccess: "",
                indicatorError: ""
            },
        })
    }

    return {
        //main function to initiate the module
        init: function () {
            inputFileConfig();
        }
    };
}();


jQuery(document).ready(function () {
    FormWizard.init();
    FormCustom.init();
    BootstrapInputFilePessoa.init();
});