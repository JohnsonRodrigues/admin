var FormValidation = function () {

    var addMethodsValidaion = function () {
        $.validator.addMethod("validaHidden", function (value, element) {
            return $(element).val() !== '';
        });
        $.validator.addMethod("notEqualToGroup", function (value, element, options) {
            var elems = $(element).parents('form').find(options[0]);
            var valueToCompare = value;
            var matchesFound = 0;
            jQuery.each(elems, function () {
                thisVal = $(this).val();
                if (thisVal == valueToCompare) {
                    matchesFound++;
                }
            });
            if (this.optional(element) || matchesFound <= 1) {
                return true;
            } else {
            }
        }, "Por favor insira um Valor Único.");
    }


    //mandante
    var escalacaoMandanteValidation = function () {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form2 = $('#form_sumula_escalacao_mandante');
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        form2.validate({
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules: {
                comissao_tecnica_mandante: {
                    validaHidden: true
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit
                success2.hide();
                error2.show();
                App.scrollTo(error2, -200);
            },

            errorPlacement: function (error, element) { // render error placement for each input type
                return false;
            },

            submitHandler: function (form) {
                App.blockUI();
                success2.show();
                error2.hide();
                form2[0].submit(); // submit the form
            }
        });


    }


    //visitante
    var escalacaoVisitanteValidation = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation

        var form2 = $('#form_sumula_escalacao_visitante');
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        form2.validate({
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules: {
                comissao_tecnica_visitante: {
                    validaHidden: true
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit
                success2.hide();
                error2.show();
                App.scrollTo(error2, -200);
            },

            errorPlacement: function (error, element) { // render error placement for each input type
                return false;
            },

            submitHandler: function (form) {
                App.blockUI();
                success2.show();
                error2.hide();
                form2[0].submit(); // submit the form
            }
        });
    }


    var resetModalFormErrors = function () {
        $('.form-group').removeClass('has-error');
        $('.form-group').find('.help-block').remove();
    }


    var atrasosValidation = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation

        var form2 = $('#form_sumula_atrasos');
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules: {
                atraso_inicio_mandante: {
                    required: true
                },
                atraso_reinicio_mandante: {
                    required: true
                },
                atraso_inicio_visitante: {
                    required: true
                },
                atraso_reinicio_visitante: {
                    required: true
                },
                atraso_inicio_partida: {
                    required: true
                },
                atraso_reinicio_partida: {
                    required: true
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit
                success2.hide();
                error2.show();
                App.scrollTo(error2, -200);
            }
            ,

            errorPlacement: function (error, element) { // render error placement for each input type
                var icon = $(element).parent('.input-icon').children('i');
                icon.removeClass('fa-check').addClass("fa-warning");
                icon.attr("data-original-title", error.text()).tooltip({'container': 'body'});
            }
            ,

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').removeClass("has-success").addClass('has-error'); // set error class to the control group
            }
            ,

            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            }
            ,

            success: function (label, element) {
                var icon = $(element).parent('.input-icon').children('i');
                $(element).closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                icon.removeClass("fa-warning").addClass("fa-check");
            }
            ,

            submitHandler: function (form) {
                App.blockUI();
                success2.show();
                error2.hide();
                form[0].submit(); // submit the form
            }
        })
        ;


    }


    var scoutValidation = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation

        var form2 = $('#form_sumula_scout');
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules: {
                motivo_termino_antecipado: {
                    required: "#termino_antecipado:checked"
                },
                paralizacao_primeiro_tempo_cronometro: {
                    required: "#paralizacao_primeiro_tempo:checked"
                },
                paralizacao_segundo_tempo_cronometro: {
                    required: "#paralizacao_segundo_tempo:checked"
                },
                inicio_primeiro_tempo: {
                    required: true
                },
                termino_primeiro_tempo: {
                    required: true
                },
                acressimo_primeiro_tempo: {
                    required: true
                },
                inicio_segundo_tempo: {
                    required: true
                },
                termino_segundo_tempo: {
                    required: true
                },
                acressimo_segundo_tempo: {
                    required: true
                },
                entrada_mandante_primeiro_tempo: {
                    required: true
                },
                entrada_visitante_primeiro_tempo: {
                    required: true
                },
                entrada_mandante_segundo_tempo: {
                    required: true
                },
                entrada_visitante_segundo_tempo: {
                    required: true
                },
                entrega_relacao_mandante: {
                    required: true
                },
                entrega_relacao_visitante: {
                    required: true
                },
                bola_rolando_primeiro_tempo: {
                    required: true
                },
                bola_rolando_segundo_tempo: {
                    required: true
                },
                numero_falta_mandante: {
                    required: true,
                    integer: true,
                    range: [0, 100]
                },
                numero_falta_visitante: {
                    required: true,
                    integer: true,
                    range: [0, 100]
                },
                resultado_primeiro_tempo_mandante: {
                    required: true,
                    integer: true,
                    range: [0, 100]
                },
                resultado_primeiro_tempo_visitante: {
                    required: true,
                    integer: true,
                    range: [0, 100]
                },
                resultado_segundo_tempo_mandante: {
                    required: true,
                    integer: true,
                    range: [0, 100]
                },
                resultado_segundo_tempo_visitante: {
                    required: true,
                    integer: true,
                    range: [0, 100]
                },
                resultado_penalti_mandante: {
                    required: function (element) {
                        return ($("[name='resultado_penalti_visitante']").val().length > 0 || $("[name='resultado_penalti_visitante']").val() != "");
                    },
                    integer: true,
                    range: [0, 100]
                },
                resultado_penalti_visitante: {
                    required: function (element) {
                        return ($("[name='resultado_penalti_mandante']").val().length > 0 || $("[name='resultado_penalti_mandante']").val() != "");
                    },
                    integer: true,
                    range: [0, 100]
                },
            },

            invalidHandler: function (event, validator) { //display error alert on form submit
                success2.hide();
                error2.show();
                App.scrollTo(error2, -200);
            }
            ,

            errorPlacement: function (error, element) { // render error placement for each input type
                var icon = $(element).parent('.input-icon').children('i');
                icon.removeClass('fa-check').addClass("fa-warning");
                icon.attr("data-original-title", error.text()).tooltip({'container': 'body'});
            }
            ,

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').removeClass("has-success").addClass('has-error'); // set error class to the control group
            }
            ,

            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            }
            ,

            success: function (label, element) {
                var icon = $(element).parent('.input-icon').children('i');
                $(element).closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                icon.removeClass("fa-warning").addClass("fa-check");
            }
            ,

            submitHandler: function (form) {
                App.blockUI();
                success2.show();
                error2.hide();
                form[0].submit(); // submit the form
            }
        })
        ;


    }


    //penalidade
    var penalidadeValidation = function () {

        var form2 = $('#form_sumula_penalidades');
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules: {
                cartao_penalidade: {
                    required: true
                },
                tempo_penalidade: {
                    required: true
                },
                clube_penalidade: {
                    required: true
                },
                atleta_penalidade: {
                    required: true
                },
                motivo_penalidade: {
                    required: true
                },
                relato_penalidade: {
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

            submitHandler: function (form) {
                success2.show();
                error2.hide();
                var action = form2.attr('action');
                var method = form2.attr('method');
                var dados = form2.serialize();

                $.ajax({
                    type: method,
                    url: action,
                    data: dados,
                    beforeSend: function () {
                        App.blockUI();
                    },
                    success: function (results) {

                        if (results.success === true) {
                            $('#dataTableBuilder').DataTable().ajax.reload();
                            form2[0].reset();
                            $('#atleta_penalidade').html('<option selected="selected" value="" disabled="disabled">Selecione...</option>');
                            form2.validate().resetForm();
                            form2.find('.has-error').removeClass("has-error");
                            form2.find('.has-success').removeClass("has-success");
                            form2.find('.form-control-feedback').remove()
                            form2.find('.input-icon').children('i').removeClass("fa-check");
                            success2.hide();
                        } else {
                            Swal.fire({
                                'title': results.message,
                                'type': "error"
                            });
                        }
                    },
                    complete: function (results) {
                        App.unblockUI();
                    }
                });


            }
        });


    }

    //SUBSTITUICAO
    var substituicaoValidation = function () {

        var form2 = $('#form_sumula_substituicao');
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules: {
                clube_substituicao: {
                    required: true
                },
                tempo_substituicao: {
                    required: true
                },
                atleta_saiu_substituicao: {
                    required: true
                },
                atleta_entrou_substituicao: {
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

            submitHandler: function (form) {
                success2.show();
                error2.hide();
                var action = form2.attr('action');
                var method = form2.attr('method');
                var dados = form2.serialize();

                $.ajax({
                    type: method,
                    url: action,
                    data: dados,
                    beforeSend: function () {
                        App.blockUI();
                    },
                    success: function (results) {

                        if (results.success === true) {
                            $('#substiuicao-table').DataTable().ajax.reload();
                            form2[0].reset();
                            $('#atleta_saiu_substituicao').html('<option selected="selected" value="" disabled="disabled">Selecione...</option>');
                            $('#atleta_entrou_substituicao').html('<option selected="selected" value="" disabled="disabled">Selecione...</option>');
                            form2.validate().resetForm();
                            form2.find('.has-error').removeClass("has-error");
                            form2.find('.has-success').removeClass("has-success");
                            form2.find('.form-control-feedback').remove()
                            form2.find('.input-icon').children('i').removeClass("fa-check");
                            success2.hide();
                        } else {
                            Swal.fire({
                                'title': results.message,
                                'type': "error"
                            });
                        }
                    },
                    complete: function (results) {
                        App.unblockUI();
                    }
                });


            }
        });


    }

    //Gol
    var golValidation = function () {

        var form2 = $('#form_sumula_gol');
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules: {
                clube_gol: {
                    required: true
                },
                tempo_gol: {
                    required: true
                },
                atleta_gol: {
                    required: true
                },
                tipo_gol: {
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

            submitHandler: function (form) {
                success2.show();
                error2.hide();
                var action = form2.attr('action');
                var method = form2.attr('method');
                var dados = form2.serialize();

                $.ajax({
                    type: method,
                    url: action,
                    data: dados,
                    beforeSend: function () {
                        App.blockUI();
                    },
                    success: function (results) {

                        if (results.success === true) {
                            $('#gol-table').DataTable().ajax.reload();
                            form2[0].reset();
                            $('#atleta_gol').html('<option selected="selected" value="" disabled="disabled">Selecione...</option>');
                            form2.validate().resetForm();
                            form2.find('.has-error').removeClass("has-error");
                            form2.find('.has-success').removeClass("has-success");
                            form2.find('.form-control-feedback').remove()
                            form2.find('.input-icon').children('i').removeClass("fa-check");
                            success2.hide();
                        } else {
                            Swal.fire({
                                'title': results.message,
                                'type': "error"
                            });
                        }
                    },
                    complete: function (results) {
                        App.unblockUI();
                    }
                });


            }
        });


    }

    //Ocorrências
    var ocorrenciaValidation = function () {

        var formOcorrencia = $('#testandooform');
        var error2 = $('.alert-danger', formOcorrencia);
        var success2 = $('.alert-success', formOcorrencia);

        formOcorrencia.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules: {
                ocorrencia_observacao: {
                    required: true
                },
                observacao_eventual: {
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

            submitHandler: function (form) {
                App.blockUI();
                success2.show();
                error2.hide();
                console.log($('#testandooform')[0]);
                formOcorrencia[0].submit();
            }
        });


    }


    //Documentos
    var documentosValidation = function () {

        var form2 = $('#form_sumula_documento');
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules: {
                documento: {
                    required: true,
                    extension: "png|jpeg|jpg|pdf|doc|docx",
                },
                descricao: {
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

            submitHandler: function (form) {
                success2.show();
                error2.hide();
                var action = form2.attr('action');
                var method = form2.attr('method');
                var dados = new FormData(form2[0]);
                $.ajax({
                    type: method,
                    url: action,
                    data: dados,
                    cache: false,
                    processData: true,
                    dataType: 'json',
                    async: false,
                    processData: false,
                    contentType: false,
                    beforeSend: function () {
                        App.blockUI();
                    },
                    success: function (results) {

                        if (results.success === true) {
                            $('#documentacao-table').DataTable().ajax.reload();
                            form2[0].reset();
                            form2.validate().resetForm();
                            form2.find('.has-error').removeClass("has-error");
                            form2.find('.has-success').removeClass("has-success");
                            form2.find('.form-control-feedback').remove()
                            form2.find('.input-icon').children('i').removeClass("fa-check");
                            success2.hide();
                        } else {
                            Swal.fire({
                                'title': results.message,
                                'type': "error"
                            });
                        }
                    },
                    complete: function (results) {
                        App.unblockUI();
                    }
                });


            }
        });


    }


    //Documentos
    var assinaturaValidation = function () {

        var form2 = $('#form_sumula_assinatura');
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
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

            submitHandler: function (form) {
                success2.show();
                error2.hide();
                var action = form2.attr('action');
                var method = form2.attr('method');
                var dados = new FormData(form2[0]);
                var idArbitro = $("input[name='arbitro_id']").val();


                $.ajax({
                    type: method,
                    url: action,
                    data: dados,
                    processData: false,
                    contentType: false,
                    beforeSend: function (results) {
                        App.blockUI();
                    },
                    success: function (results) {

                        if (results.success === true) {
                            form2[0].reset();
                            form2.validate().resetForm();
                            form2.find('.has-error').removeClass("has-error");
                            form2.find('.has-success').removeClass("has-success");
                            form2.find('.form-control-feedback').remove()
                            form2.find('.input-icon').children('i').removeClass("fa-check");
                            success2.hide();
                            $('#nome_arbitro').html('-------------------');
                            $('#validacao_arbitro_' + idArbitro).html('<span class="label label-success">Validado!</span>');
                            $("input[name='arbitro_id']").val('');
                            $('#modalArbitragem').modal('hide')
                            Swal.fire({
                                'title': results.message,
                                'type': "success"
                            });
                        } else {
                            form2.find('.has-error').removeClass("has-error");
                            form2.find('.has-success').removeClass("has-success");
                            form2.find('.form-control-feedback').remove()
                            form2.find('.input-icon').children('i').removeClass("fa-check");
                            $("input[name='password']").val('');
                            Swal.fire({
                                'title': results.message,
                                'type': "error"
                            });
                        }
                    },
                    complete: function (results) {
                        App.unblockUI();
                    }
                });

            }
        });


    }

    return {
        //main function to initiate the module
        init: function () {
            addMethodsValidaion();
            escalacaoMandanteValidation();
            escalacaoVisitanteValidation();
            atrasosValidation();
            scoutValidation();
            penalidadeValidation();
            substituicaoValidation();
            golValidation();
            ocorrenciaValidation();
            documentosValidation();
            assinaturaValidation();
        }
    };
}();

jQuery(document).ready(function () {
    FormValidation.init();
});