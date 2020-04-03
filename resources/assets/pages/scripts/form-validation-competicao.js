var FormValidation = function () {

    var resetModalFormErrors = function () {
        $('.form-group').removeClass('has-error');
        $('.form-group').find('.help-block').remove();
    }


    // validation using icons
    var competicaoValidation = function () {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form2 = $('#form_competicao');
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        form2.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                rules: {
                    ano_exercicio: {required: true},
                    campeonato_id: {required: true},
                    campeonato_acesso_id: {required: true},
                    sexo: {required: true},
                    idade_minima: {required: true, number: true, min: 1},
                    idade_maxima: {required: true, number: true, min: 1},
                    maximo_atleta_escalacao: {required: true, number: true, min: 0},
                    maximo_atleta_estrangeiro: {required: true, number: true, min: 0},
                    maximo_atleta_profissional: {required: true, number: true, min: 0},
                    maximo_atleta_participa_clube: {required: true, number: true, min: 0},
                    maximo_jogos_clube: {required: true, number: true, min: 1},
                    maximo_data_registro_atleta: {required: true},
                    maximo_data_registro_atleta_primeira_rodada: {required: true},
                    quantidade_clubes: {required: true, number: true, min: 1},
                    quantidade_fases: {required: true, number: true, min: 1},
                    quantidade_subtitucao: {required: true, number: true, min: 1},
                    quantidade_atletas_outro_estado: {required: true, number: true, min: 0},
                    qunatidade_clube_sobem: {required: true, number: true, min: 0},
                    qunatidade_clube_descem: {required: true, number: true, min: 0},
                    tempo_regulamentar: {required: true, number: true, min: 1},
                    penalti: {required: true},
                    prorrogacao: {required: true},
                    clube_externo: {required: true},
                    atleta_restricao: {required: true},
                    inscricao_atleta: {required: true},
                    libera_sumula_antes: {required: true, number: true, min: 1},
                    libera_sumula_depois: {required: true, number: true, min: 1},
                    libera_pre_escala_antes: {required: true, number: true, min: 1},
                    libera_pre_escala_ate: {required: true, number: true, min: 0},
                    suspensao_cartao_amarelo: {required: true, number: true, min: 0},
                    suspensao_cartao_vermelho: {required: true, number: true, min: 0},
                    vitoria_simples: {required: true, number: true, min: 0},
                    vitoria_prorrogacao: {required: true, number: true, min: 0},
                    vitoria_maior_n_gol: {required: true, number: true, min: 0},
                    vitoria_penaltis: {required: true, number: true, min: 0},
                    empate_sem_gol: {required: true, number: true, min: 0},
                    empate_com_gol: {required: true, number: true, min: 0},
                    derrota: {required: true, number: true, min: 0},
                    diferenca_gol: {required: true, number: true, min: 0},
                },

                invalidHandler: function (event, validator) { //display error alert on form submit
                    success2.hide();
                    error2.show();
                    App.scrollTo(error2, -200);
                    if (validator.errorList.length)
                        $('#tabs a[href="#' + jQuery(validator.errorList[0].element).closest(".tab-pane").attr('id') + '"]').tab('show')

                },

                errorPlacement:

                    function (error, element) { // render error placement for each input type
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
                    form.submit(); // submit the form
                }
            }
        );


    }

    return {
        //main function to initiate the module
        init: function () {
            competicaoValidation();
        }
    };
}
();

jQuery(document).ready(function () {
    FormValidation.init();
});