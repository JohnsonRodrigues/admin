var ComponentsBootstrapSwitch = function () {

    var handleBootstrapSwitch = function() {


        $("[name='termino_antecipado']").on('switchChange.bootstrapSwitch', function(event, state) {
            $("[name='motivo_termino_antecipado']").prop('disabled', !state);
        });


        $("[name='paralizacao_primeiro_tempo']").on('switchChange.bootstrapSwitch', function(event, state) {
            $("[name='paralizacao_primeiro_tempo_cronometro']").prop('disabled', !state);
        });


        $("[name='paralizacao_segundo_tempo']").on('switchChange.bootstrapSwitch', function(event, state) {
            $("[name='paralizacao_segundo_tempo_cronometro']").prop('disabled', !state);
        });



        $('#paralizacao_segundo_tempo').bootstrapSwitch({
            onSwitchChange: function(e, state) {
                alert('dfsds');

            }
        });

    }

    return {
        //main function to initiate the module
        init: function () {
            handleBootstrapSwitch();
        }
    };

}();

jQuery(document).ready(function() {

   ComponentsBootstrapSwitch.init();
});