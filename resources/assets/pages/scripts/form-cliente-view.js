var FormCustom = function () {
    var clienteForm = function () {

        var form2 = $('#form_cliente');
        var inputCpf = $('#cpf');
        var inputCnpj = $('#cnpj');
        var inputTipo = $('#tipo');
        var inputInscEstadual = $('#inscricao_estadual');
        var inputRg = $('#rg');
        var inputOrgaoEmissor = $('#orgao_emissor');
        var error2 = $('.alert-danger', form2);
        var success2 = $('.alert-success', form2);

        $('select option:first').attr('disabled', true);

//        form2.validate().resetForm();

        if (inputTipo.val() === 'fisica') {
            error2.hide();
            limpaCampos(true);
            $(inputCnpj).rules('remove', 'required')
            $(inputCpf).rules('add', {required: true});
            $(inputCnpj).attr('disabled', 'disabled');
            $(inputCpf).removeAttr('disabled');
            $(inputInscEstadual).rules('remove', 'required')
            $(inputRg).rules('add', {required: true});
            $(inputInscEstadual).attr('disabled', 'disabled');
            $(inputRg).removeAttr('disabled');
            $(inputOrgaoEmissor).rules('add', {required: true});
            $(inputOrgaoEmissor).removeAttr('disabled')
        } else {
            error2.hide();
            limpaCampos(false);
            $(inputCpf).rules('remove', 'required')
            $(inputCnpj).rules('add', {required: true});
            $(inputCpf).attr('disabled', 'disabled');
            $(inputCnpj).removeAttr('disabled');
            $(inputRg).rules('remove', 'required')
            $(inputInscEstadual).rules('add', {required: true});
            $(inputRg).attr('disabled', 'disabled');
            $(inputInscEstadual).removeAttr('disabled');
            $(inputOrgaoEmissor).rules('remove', 'required');
            $(inputOrgaoEmissor).attr('disabled', 'disabled');
        }


        $(inputTipo).on('change', function () {
            form2.validate().resetForm();
            error2.hide();
            if (this.value === 'fisica') {
                limpaCampos(true);
                $(inputCnpj).rules('remove', 'required')
                $(inputCpf).rules('add', {required: true});
                $(inputCnpj).attr('disabled', 'disabled');
                $(inputCpf).removeAttr('disabled');
                $(inputInscEstadual).rules('remove', 'required')
                $(inputRg).rules('add', {required: true});
                $(inputInscEstadual).attr('disabled', 'disabled');
                $(inputRg).removeAttr('disabled');
                $(inputOrgaoEmissor).rules('add', {required: true});
                $(inputOrgaoEmissor).removeAttr('disabled')
            } else {
                limpaCampos(false);
                $(inputCpf).rules('remove', 'required')
                $(inputCnpj).rules('add', {required: true});
                $(inputCpf).attr('disabled', 'disabled');
                $(inputCnpj).removeAttr('disabled');
                $(inputRg).rules('remove', 'required')
                $(inputInscEstadual).rules('add', {required: true});
                $(inputRg).attr('disabled', 'disabled');
                $(inputInscEstadual).removeAttr('disabled');
                $(inputOrgaoEmissor).rules('remove', 'required');
                $(inputOrgaoEmissor).attr('disabled', 'disabled');
            }
        });


        function limpaCampos(tipo) {
            if(tipo){
                inputCnpj.val('');
                inputInscEstadual.val('');
            }else{
                inputCpf.val('');
                inputRg.val('');
                inputOrgaoEmissor.val('');
            }


            $(inputCpf).parent('.input-icon').children('i').removeClass('fa-check');
            $(inputCpf).closest('.form-group').removeClass("has-success")
            $(inputCnpj).parent('.input-icon').children('i').removeClass('fa-check');
            $(inputCnpj).closest('.form-group').removeClass("has-success")
            $(inputInscEstadual).parent('.input-icon').children('i').removeClass('fa-check');
            $(inputInscEstadual).closest('.form-group').removeClass("has-success")
            $(inputRg).parent('.input-icon').children('i').removeClass('fa-check');
            $(inputRg).closest('.form-group').removeClass("has-success")
            $(inputOrgaoEmissor).parent('.input-icon').children('i').removeClass('fa-check');
            $(inputOrgaoEmissor).closest('.form-group').removeClass("has-success")
        }


    }

    var clienteFormCep = function () {
        var inputCep = $('#cep');
        $(inputCep).cep();
    }

    return {
        //main function to initiate the module
        init: function () {
            clienteForm();
            clienteFormCep();
        }
    };
}();

jQuery(document).ready(function () {
    FormCustom.init();
});