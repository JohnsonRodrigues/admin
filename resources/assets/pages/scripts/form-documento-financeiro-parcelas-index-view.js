var FormCustomParcelas = function () {
    var parcelasModal = function () {
        var table = $('#dataTableBuilder').DataTable();
        $('table tbody').on('click', 'a.parcelasModalForm', function (e) {
            var data = table.row($(this).parents('tr')).data();
            var parcela = $(this).attr('data-parcela');
            $('#titulo-modal-parcelas').text('Parcela: ' + data['parcela'] + ' | Valor: ' + data['valor_total'] + ' - Vencimento: ' + data['data_vencimento']);
            $('#parcela_id').val(parcela);
        });
    }

    var anexarDocumentoModal = function () {
        var table = $('#dataTableBuilder').DataTable();
        $('table tbody').on('click', 'a.anexarDocumentoModalForm', function (e) {
            var data = table.row($(this).parents('tr')).data();
            var parcela = $(this).attr('data-parcela');
            $('#titulo-modal-anexar_documento').text('Parcela: ' + data['parcela'] + ' | Valor: ' + data['valor_total'] + ' - Vencimento: ' + data['data_vencimento']);
            $('#parcela_id2').val(parcela);
        });
    }


    var documentoModal = function () {
        var table = $('#dataTableBuilder').DataTable();
        $('table tbody').on('click', 'a.show-documento-item', function (e) {
            var url = $(this).attr('data-url');
            var data = table.row($(this).parents('tr')).data();
            $('#titulo-modal').text('Parcela: ' + data['parcela'] + ' | Valor: ' + data['valor_total'] + ' - Vencimento: ' + data['data_vencimento']);
            $('#btn-donload-docs').attr('href', url).attr('download', 'documento_' + data['id']);
            $('#iframe-preview-docs').attr('src', url);
        });
    }


    return {
        //main function to initiate the module
        init: function () {
            documentoModal();
            anexarDocumentoModal();
            parcelasModal();
        }
    };
}();

jQuery(document).ready(function () {
    FormCustomParcelas.init();
});