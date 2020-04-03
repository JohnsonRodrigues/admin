var FormCustom = function () {
    var jogoForm = function () {
        $('option[value=""]').attr("disabled", "disabled");
    };


    var selectAjaxGrupoMandante = function () {
        $("#grupo_mandante_id").change(function () {
            var grupo_mandante = $(this).val();
            var clube_mandante = $('#clube_mandante_id').val();
            $.ajax({
                url: url,
                type: 'POST',
                data: {
                    'grupo_id': grupo_mandante,
                    'clube_id': clube_mandante,
                    '_token': $('meta[name="csrf-token"]').attr('content')
                },
                beforeSend: function () {
                    App.blockUI();
                    $("#clube_mandante_id").html('<option selected="selected" value="" disabled="disabled">carregando clubes.....</option>');
                },
                success: function (data) {
                    $("#clube_mandante_id").html('');
                    $("#clube_mandante_id").html(data.options);
                },
                complete: function (results) {
                    App.unblockUI();
                }
            });
        });
        $("#clube_mandante_id").change(function () {
            var grupo_visitante = $('#grupo_visitante_id').val();
            var clube_mandante = $('#clube_mandante_id').val();
            $.ajax({
                url: url,
                type: 'POST',
                data: {
                    'grupo_id': grupo_visitante,
                    'clube_id': clube_mandante,
                    '_token': $('meta[name="csrf-token"]').attr('content')
                },
                beforeSend: function () {
                    App.blockUI();
                    $("#clube_visitante_id").html('<option selected="selected" value="" disabled="disabled">carregando clubes.....</option>');
                },
                success: function (data) {
                    $("#clube_visitante_id").html('');
                    $("#clube_visitante_id").html(data.options);
                },
                complete: function (results) {
                    App.unblockUI();
                }
            });
        });


    };


    var selectAjaxGrupoVisitante = function () {
        $("#grupo_visitante_id").change(function () {
            var grupo_visitante = $(this).val();
            var clube_mandante = $('#clube_mandante_id').val();
            $.ajax({
                url: url,
                type: 'POST',
                data: {
                    'grupo_id': grupo_visitante,
                    'clube_id': clube_mandante,
                    '_token': $('meta[name="csrf-token"]').attr('content')
                },
                beforeSend: function () {
                    App.blockUI();
                    $("#clube_visitante_id").html('<option selected="selected" value="" disabled="disabled">carregando clubes.....</option>');
                },
                success: function (data) {
                    $("#clube_visitante_id").html('');
                    $("#clube_visitante_id").html(data.options);
                },
                complete: function (results) {
                    App.unblockUI();
                }
            });
        });
    };


    return {
        //main function to initiate the module
        init: function () {
            jogoForm();
            selectAjaxGrupoMandante();
            selectAjaxGrupoVisitante();
        }
    };
}();

jQuery(document).ready(function () {
    FormCustom.init();
});