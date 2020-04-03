var FormSortable = function () {

    var sortableMandante = function () {
        $(".sortablesMandante").sortable({
            connectWith: '.connectedSortableMandante',
            receive: function (event, ui) {
                var id = this.id;
                var idItem = ui.item.attr("id");

                if (id !== 'sortable-comissao-disponiveis-mandante') {
                    $('#comissao_funcao_mandante_'+idItem).removeAttr("disabled");
                }else{
                    $('#comissao_funcao_mandante_'+idItem).attr('disabled', 'disabled');
                }

                if (id !== 'sortable-atletas-disponiveis-mandante') {
                    $('#show_numero_' + idItem).html('');
                    if (id === 'sortable-goleiro-titular-mandante') {
                        $('#show_numero_' + idItem).html('Nº <input type="text" style="width: 50px;" class="numberMask3 inputNumero" id="numero_' + idItem + '" name="numero_goleiro_titular_mandante[' + idItem + ']">');
                    }
                    if (id === 'sortable-goleiro-reserva-mandante') {
                        $('#show_numero_' + idItem).append('Nº <input type="text" style="width: 50px;" class="numberMask3 inputNumero" id="numero_' + idItem + '" name="numero_goleiro_reserva_mandante[' + idItem + ']">');
                    }
                    if (id === 'sortable-jogadores-titular-mandante') {
                        $('#show_numero_' + idItem).append('Nº <input type="text" style="width: 50px;" class="numberMask3 inputNumero" id="numero_' + idItem + '"  name="numero_jogadores_titular_mandante[' + idItem + ']">');
                    }
                    if (id === 'sortable-jogadores-reserva-mandante') {
                        $('#show_numero_' + idItem).append('Nº <input type="text" style="width: 50px;" class="numberMask3 inputNumero" id="numero_' + idItem + '" name="numero_jogadores_reserva_mandante[' + idItem + ']">');
                    }
                    if ((id === 'sortable-goleiro-titular-mandante') || (id === 'sortable-goleiro-reserva-mandante') || (id === 'sortable-jogadores-titular-mandante') || (id === 'sortable-jogadores-reserva-mandante')) {
                        $('#show_numero_' + idItem).show();
                        $('#numero_' + idItem).rules('add', {required: true, notEqualToGroup: ['.inputNumero']});
                    }

                } else {
                    if (typeof ($("div#numero_" + idItem)) !== "undefined") {
                        $('#numero_' + idItem).each(function () {
                            $(this).rules('remove', 'required');
                        });
                    }
                    $('#show_numero_' + idItem).hide();
                    $('#show_numero_' + idItem).html('');
                }

                $('#numero_' + idItem).val('').focus();

                if (
                    ($('#sortable-goleiro-titular-mandante').children().length > 1) ||
                    ($('#sortable-jogadores-titular-mandante').children().length > 10) ||
                    (($('#sortable-goleiro-reserva-mandante').children().length + $('#sortable-jogadores-reserva-mandante').children().length) > ($maxAtletas - ($('#sortable-goleiro-titular-mandante').children().length + $('#sortable-jogadores-titular-mandante').children().length)))
                ) {
                    $(ui.sender).sortable('cancel');
                    $('#show_numero_' + idItem).hide();
                    $('#show_numero_' + idItem).html('');
                } else {
                    if ((id === 'sortable-goleiro-titular-mandante') || (id === 'sortable-goleiro-reserva-mandante') || (id === 'sortable-jogadores-titular-mandante') || (id === 'sortable-jogadores-reserva-mandante')) {
                        $("#search_atletas_mandante").val('').trigger('keyup').focus();
                    }
                }
            },
            update: function (event, ui) {
                var changedList = this.id;
                var order = $(this).sortable('toArray');
                var positions = order.join(';');
                var qtd_atletas_disponiveis_mandante = $('#sortable-atletas-disponiveis-mandante').children().length;
                var qtd_goleiro_titular_mandante = $('#sortable-goleiro-titular-mandante').children().length;
                var qtd_goleiro_reserva_mandante = $('#sortable-goleiro-reserva-mandante').children().length;
                var qtd_jogadores_titular_mandante = $('#sortable-jogadores-titular-mandante').children().length;
                var qtd_jogadores_reserva_mandante = $('#sortable-jogadores-reserva-mandante').children().length;
                var qtd_comissao_disponiveis_mandante = $('#sortable-comissao-disponiveis-mandante').children().length;
                var qtd_comissao_mandante = $('#sortable-comissao-escalada-mandante').children().length;


                $('#qtd_atletas_disponiveis_mandante').text(qtd_atletas_disponiveis_mandante);
                $('#qtd_goleiro_titular_mandante').text(qtd_goleiro_titular_mandante);
                $('#qtd_goleiro_reserva_mandante').text(qtd_goleiro_reserva_mandante);
                $('#qtd_jogadores_titular_mandante').text(qtd_jogadores_titular_mandante);
                $('#qtd_jogadores_reserva_mandante').text(qtd_jogadores_reserva_mandante);
                $('#total_titulares_mandante').text(qtd_goleiro_titular_mandante + qtd_jogadores_titular_mandante);
                $('#total_reservas_mandante').text(qtd_goleiro_reserva_mandante + qtd_jogadores_reserva_mandante);
                $('#total_escalados_mandante').text(qtd_goleiro_titular_mandante + qtd_jogadores_titular_mandante + qtd_goleiro_reserva_mandante + qtd_jogadores_reserva_mandante);

                $('#comissao_tecnica_mandante').text(qtd_comissao_disponiveis_mandante);
                $('#total_comissao_escalados_mandante').text(qtd_comissao_mandante);


                if (changedList === 'sortable-comissao-escalada-mandante') {
                    $('#comissao_tecnica_selecionada_mandante').val(positions);
                }


            }
        }).disableSelection();
    }

    var calculosMandanteSortables = function () {
        var sortedIdsGoleiroTitular = $("#sortable-goleiro-titular-mandante").sortable("toArray");
        var sortedIdsGoleiroReserva = $("#sortable-goleiro-reserva-mandante").sortable("toArray");
        var sortedIdsJogadorTitular = $("#sortable-jogadores-titular-mandante").sortable("toArray");
        var sortedIdsJogadorReserva = $("#sortable-jogadores-reserva-mandante").sortable("toArray");

        for (var i = 0; i < sortedIdsGoleiroTitular.length; i++) {
            $('#numero_' + sortedIdsGoleiroTitular[i]).rules('add', {
                required: true,
                notEqualToGroup: ['.inputNumero']
            });
        }

        for (var i = 0; i < sortedIdsGoleiroReserva.length; i++) {
            $('#numero_' + sortedIdsGoleiroReserva[i]).rules('add', {
                required: true,
                notEqualToGroup: ['.inputNumero']
            });
        }

        for (var i = 0; i < sortedIdsJogadorTitular.length; i++) {
            $('#numero_' + sortedIdsJogadorTitular[i]).rules('add', {
                required: true,
                notEqualToGroup: ['.inputNumero']
            });
        }

        for (var i = 0; i < sortedIdsJogadorReserva.length; i++) {
            $('#numero_' + sortedIdsJogadorReserva[i]).rules('add', {
                required: true,
                notEqualToGroup: ['.inputNumero']
            });
        }
    }


    var sortableVisitante = function () {
        $(".sortablesVisitante").sortable({
            connectWith: '.connectedSortableVisitante',
            receive: function (event, ui) {
                var id = this.id;
                var idItem = ui.item.attr("id");


                if (id !== 'sortable-comissao-disponiveis-visitante') {
                    $('#comissao_funcao_visitante_'+idItem).removeAttr("disabled");
                }else{
                    $('#comissao_funcao_visitante_'+idItem).attr('disabled', 'disabled');
                }

                if (id !== 'sortable-atletas-disponiveis-visitante') {
                    $('#show_numero_' + idItem).html('');
                    if (id === 'sortable-goleiro-titular-visitante') {
                        $('#show_numero_' + idItem).html('Nº <input type="text" style="width: 50px;" class="numberMask3 inputNumero" id="numero_' + idItem + '" name="numero_goleiro_titular_visitante[' + idItem + ']">');
                    }
                    if (id === 'sortable-goleiro-reserva-visitante') {
                        $('#show_numero_' + idItem).append('Nº <input type="text" style="width: 50px;" class="numberMask3 inputNumero" id="numero_' + idItem + '" name="numero_goleiro_reserva_visitante[' + idItem + ']">');
                    }
                    if (id === 'sortable-jogadores-titular-visitante') {
                        $('#show_numero_' + idItem).append('Nº <input type="text" style="width: 50px;" class="numberMask3 inputNumero" id="numero_' + idItem + '"  name="numero_jogadores_titular_visitante[' + idItem + ']">');
                    }
                    if (id === 'sortable-jogadores-reserva-visitante') {
                        $('#show_numero_' + idItem).append('Nº <input type="text" style="width: 50px;" class="numberMask3 inputNumero" id="numero_' + idItem + '" name="numero_jogadores_reserva_visitante[' + idItem + ']">');
                    }
                    if ((id === 'sortable-goleiro-titular-visitante') || (id === 'sortable-goleiro-reserva-visitante') || (id === 'sortable-jogadores-titular-visitante') || (id === 'sortable-jogadores-reserva-visitante')) {
                        $('#show_numero_' + idItem).show();
                        $('#numero_' + idItem).rules('add', {required: true, notEqualToGroup: ['.inputNumero']});
                    }

                } else {
                    if (typeof ($("div#numero_" + idItem)) !== "undefined") {
                        $('#numero_' + idItem).each(function () {
                            $(this).rules('remove', 'required');
                        });
                    }
                    $('#show_numero_' + idItem).hide();
                    $('#show_numero_' + idItem).html('');
                }

                $('#numero_' + idItem).val('').focus();

                if (
                    ($('#sortable-goleiro-titular-visitante').children().length > 1) ||
                    ($('#sortable-jogadores-titular-visitante').children().length > 10) ||
                    (($('#sortable-goleiro-reserva-visitante').children().length + $('#sortable-jogadores-reserva-visitante').children().length) > ($maxAtletas - ($('#sortable-goleiro-titular-visitante').children().length + $('#sortable-jogadores-titular-visitante').children().length)))
                ) {
                    $(ui.sender).sortable('cancel');
                    $('#show_numero_' + idItem).hide();
                    $('#show_numero_' + idItem).html('');
                } else {
                    if ((id === 'sortable-goleiro-titular-visitante') || (id === 'sortable-goleiro-reserva-visitante') || (id === 'sortable-jogadores-titular-visitante') || (id === 'sortable-jogadores-reserva-visitante')) {
                        $("#search_atletas_visitante").val('').trigger('keyup').focus();
                    }
                }
            },
            update: function (event, ui) {
                var changedList = this.id;
                var order = $(this).sortable('toArray');
                var positions = order.join(';');
                var qtd_atletas_disponiveis_visitante = $('#sortable-atletas-disponiveis-visitante').children().length;
                var qtd_goleiro_titular_visitante = $('#sortable-goleiro-titular-visitante').children().length;
                var qtd_goleiro_reserva_visitante = $('#sortable-goleiro-reserva-visitante').children().length;
                var qtd_jogadores_titular_visitante = $('#sortable-jogadores-titular-visitante').children().length;
                var qtd_jogadores_reserva_visitante = $('#sortable-jogadores-reserva-visitante').children().length;
                var qtd_comissao_disponiveis_visitante = $('#sortable-comissao-disponiveis-visitante').children().length;
                var qtd_comissao_visitante = $('#sortable-comissao-escalada-visitante').children().length;


                $('#qtd_atletas_disponiveis_visitante').text(qtd_atletas_disponiveis_visitante);
                $('#qtd_goleiro_titular_visitante').text(qtd_goleiro_titular_visitante);
                $('#qtd_goleiro_reserva_visitante').text(qtd_goleiro_reserva_visitante);
                $('#qtd_jogadores_titular_visitante').text(qtd_jogadores_titular_visitante);
                $('#qtd_jogadores_reserva_visitante').text(qtd_jogadores_reserva_visitante);
                $('#total_titulares_visitante').text(qtd_goleiro_titular_visitante + qtd_jogadores_titular_visitante);
                $('#total_reservas_visitante').text(qtd_goleiro_reserva_visitante + qtd_jogadores_reserva_visitante);
                $('#total_escalados_visitante').text(qtd_goleiro_titular_visitante + qtd_jogadores_titular_visitante + qtd_goleiro_reserva_visitante + qtd_jogadores_reserva_visitante);

                $('#comissao_tecnica_visitante').text(qtd_comissao_disponiveis_visitante);
                $('#total_comissao_escalados_visitante').text(qtd_comissao_visitante);


                if (changedList === 'sortable-comissao-escalada-visitante') {
                    $('#comissao_tecnica_selecionada_visitante').val(positions);
                }


            }
        }).disableSelection();
    }

    var calculosVisitaneSortables = function () {
        var sortedIdsGoleiroTitular = $("#sortable-goleiro-titular-visitante").sortable("toArray");
        var sortedIdsGoleiroReserva = $("#sortable-goleiro-reserva-visitante").sortable("toArray");
        var sortedIdsJogadorTitular = $("#sortable-jogadores-titular-visitante").sortable("toArray");
        var sortedIdsJogadorReserva = $("#sortable-jogadores-reserva-visitante").sortable("toArray");

        for (var i = 0; i < sortedIdsGoleiroTitular.length; i++) {
            $('#numero_' + sortedIdsGoleiroTitular[i]).rules('add', {
                required: true,
                notEqualToGroup: ['.inputNumero']
            });
        }

        for (var i = 0; i < sortedIdsGoleiroReserva.length; i++) {
            $('#numero_' + sortedIdsGoleiroReserva[i]).rules('add', {
                required: true,
                notEqualToGroup: ['.inputNumero']
            });
        }

        for (var i = 0; i < sortedIdsJogadorTitular.length; i++) {
            $('#numero_' + sortedIdsJogadorTitular[i]).rules('add', {
                required: true,
                notEqualToGroup: ['.inputNumero']
            });
        }

        for (var i = 0; i < sortedIdsJogadorReserva.length; i++) {
            $('#numero_' + sortedIdsJogadorReserva[i]).rules('add', {
                required: true,
                notEqualToGroup: ['.inputNumero']
            });
        }
    }


    return {
        init: function () {
            sortableMandante();
            calculosMandanteSortables();
            sortableVisitante();
            calculosVisitaneSortables();
        }
    };
}();

jQuery(document).ready(function () {
    FormSortable.init();
});