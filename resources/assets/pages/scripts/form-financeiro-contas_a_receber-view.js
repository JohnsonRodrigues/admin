var FormCustom = function () {


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


    var contasAReceberForm = function () {
        $('option[value=""]').attr("disabled", "disabled");
    }


    var contasAReceber = function () {

        $('#btnGerarParcelas').on('click', function () {

            $('.table-result').show();
            $('#result_table tbody tr').remove();
            var qtde_parcelas = $('#parcelas').val();
            var repeticao = $('#repeticao').val();
            $valorBruto = converteMoedaFloat($('#valor_bruto').val());
            $desconto = converteMoedaFloat($('#desconto').val());
            $valorParcela = ($valorBruto - $desconto) / parseInt(qtde_parcelas);

            var arrendondar = Math.round($valorParcela * 100);
            var resultado = Math.ceil(arrendondar) / 100;


            $valorParcela = resultado;
            var time = new Date();
            if ($('#data_vencimento').val() != '') {
                /* Capture o tempo em milissegundos desde 01/01/1970 */
                time = Date.parse($('#data_vencimento').val().split("/").reverse().join("/"));
            } else {
                $('#data_vencimento').val(time.toLocaleString("pt-BR", {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric'
                }))
            }


            /* Instancia o objeto Date e define a data em milissegundos */
            vencimento = new Date();
            vencimento.setTime(time);
            for (i = 1; i <= qtde_parcelas; i++) {
                var data = vencimento;

                var newElement = $("[name='forma_de_pagamento_id']").clone().attr('name', 'forma_de_pagamento[]').attr('id', 'forma_de_pagamento_' + i);
                var input = $('<input />').val(numberToReal($valorParcela)).attr({'class': 'form-control moneyMask3 parcelasGrid'}).attr('name', 'valor_parcela[]').attr('id', 'valor_parcela_' + i).attr('value', 0);
                var inputParcela = $('<input />').val(i).attr({'type': 'hidden'}).attr('name', 'parcela[]').attr('id', 'parcela_' + i);
                var inputVencimento = $('<input />').val(data.toLocaleString("pt-BR", {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric'
                }).split("/").reverse().join("-")).attr({'type': 'hidden'}).attr('name', 'vencimento[]').attr('id', 'vencimento_' + i);
                var select = $('<select>').attr({'class': 'form-control'}).attr('name', 'recebido[]').attr('id', 'recebido_' + i).append(new Option('NÃO', '0', true, true)).append(new Option('SIM', '1', false, false));

                $('#result_table')
                    .find('tbody')
                    .append($('<tr>')
                        .append($('<td title="parcela">').append(i + " de " + qtde_parcelas))
                        .append(inputParcela)
                        .append($('<td title="vencimento">').append(data.toLocaleString("pt-BR", {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric'
                        })))
                        .append(inputVencimento)
                        .append($('<td>').append(input))
                        .append($('<td>').append(newElement))
                        .append($('<td>').append(select))
                    );


                // .append("<tr ><td> "</td><td >" +  + "</td><td title=\"parcela\">" + newElement.html() + "</td></tr>");

                /* Captura o dia do mês e soma mais 30 dias */
                vencimento.setDate(data.getDate() + parseInt(repeticao));

            }
        });


        $(document).on("change keyup", ".parcelasGrid", function () {
            calculaValorTotal2();
        });

        $(document).on("change keyup", "#valor_bruto,#desconto", function () {
            calculaValorTotal();
            recalculaParcelas();
        });


    }


    var calculaValorTotal2 = function () {
        $totalParcelas = 0;
        $.each($('.parcelasGrid'), function (i, e) {
            $totalParcelas = $totalParcelas + converteMoedaFloat($(e).val());
        });
        $desconto = parseFloat($('#desconto').inputmask('unmaskedvalue'));
        $valorBruto = $('#valor_bruto').val($totalParcelas + $desconto);
        calculaValorTotal();
    }


    var recalculaParcelas = function () {
        $qtd_parcelas = parseInt($('#parcelas').val());
        $valorBruto = parseFloat($('#valor_bruto').inputmask('unmaskedvalue'));
        $desconto = parseFloat($('#desconto').inputmask('unmaskedvalue'));
        $valorParcela = ($valorBruto - $desconto) / $qtd_parcelas;

        $.each($('.parcelasGrid'), function (i, e) {
            $(e).val(numberToReal($valorParcela));
        });
    }


    var calculaValorTotal = function () {
        $valorBruto = parseFloat($('#valor_bruto').inputmask('unmaskedvalue'));
        $desconto = parseFloat($('#desconto').inputmask('unmaskedvalue'));
        $valorTotal = $valorBruto - $desconto

        if (isNaN($valorTotal)) {
            $valorTotal = 0;
        }

        $('#valor_total').text(formatter.format($valorTotal));
    }

    function converteMoedaFloat(valor) {

        if (valor === "") {
            valor = 0;
        } else {
            valor = valor.replace('R$', '');
            valor = valor.replace(".", "");
            valor = valor.replace(",", ".");
            valor = parseFloat(valor);
        }
        return valor;

    }


    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    });


    function numberToReal(numero) {
        var numero = numero.toFixed(2).split('.');
        numero[0] = "R$" + numero[0].split(/(?=(?:...)*$)/).join('.');
        return numero.join(',');
    }


    return {
        //main function to initiate the module
        init: function () {
            handleDatePickers();
            contasAReceberForm();
            contasAReceber();
        }
    };
}();

jQuery(document).ready(function () {
    FormCustom.init();
});