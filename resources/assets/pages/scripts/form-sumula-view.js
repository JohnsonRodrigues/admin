var FormCustomPenalidade = function () {
    var sumulaForm = function () {
        $('option[value=""]').attr("disabled", "disabled");
    }


    var selectAjaxAtletas = function () {
        $("#clube_penalidade").change(function () {
            var clube = $(this).val();
            $.ajax({
                url: $urlAtletas,
                type: 'POST',
                data: {
                    'clube': clube,
                    '_token': $('meta[name="csrf-token"]').attr('content')
                },
                beforeSend: function () {
                    $("#atleta_penalidade").html('<option selected="selected" value="" disabled="disabled">carregando atletas.....</option>');
                },
                success: function (data) {
                    $("#atleta_penalidade").html('');
                    $("#atleta_penalidade").html(data.options);
                },
                complete: function (results) {

                }
            });
        });
    };


    var selectAjaxAtletasSubstituicao = function () {
        $("#clube_substituicao").change(function () {
            var clube = $(this).val();
            $.ajax({
                url: $urlAtletasSustituicaoSaiu,
                type: 'POST',
                data: {
                    'clube': clube,
                    '_token': $('meta[name="csrf-token"]').attr('content')
                },
                beforeSend: function () {
                    $("#atleta_saiu_substituicao").html('<option selected="selected" value="" disabled="disabled">carregando atletas.....</option>');
                },
                success: function (data) {
                    $("#atleta_saiu_substituicao").html('');
                    $("#atleta_saiu_substituicao").html(data.options);
                },
                complete: function (results) {

                }
            });
            $.ajax({
                url: $urlAtletasSustituicaoEntrou,
                type: 'POST',
                data: {
                    'clube': clube,
                    '_token': $('meta[name="csrf-token"]').attr('content')
                },
                beforeSend: function () {
                    $("#atleta_entrou_substituicao").html('<option selected="selected" value="" disabled="disabled">carregando atletas.....</option>');
                },
                success: function (data) {
                    $("#atleta_entrou_substituicao").html('');
                    $("#atleta_entrou_substituicao").html(data.options);
                },
                complete: function (results) {

                }
            });
        });
    };


    var selectAjaxAtletasGol = function () {
        $("#clube_gol").change(function () {
            var clube = $(this).val();
            $.ajax({
                url: $urlAtletas,
                type: 'POST',
                data: {
                    'clube': clube,
                    '_token': $('meta[name="csrf-token"]').attr('content')
                },
                beforeSend: function () {
                    $("#atleta_gol").html('<option selected="selected" value="" disabled="disabled">carregando atletas.....</option>');
                },
                success: function (data) {
                    $("#atleta_gol").html('');
                    $("#atleta_gol").html(data.options);
                },
                complete: function (results) {

                }
            });
        });
    };

    return {
        //main function to initiate the module
        init: function () {
            selectAjaxAtletas();
            selectAjaxAtletasSubstituicao();
            selectAjaxAtletasGol();
            sumulaForm();
        }
    };
}();

jQuery(document).ready(function () {
    FormCustomPenalidade.init();
});