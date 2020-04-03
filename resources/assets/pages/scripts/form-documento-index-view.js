var FormCustomDocumento = function () {
    var documentoModal = function () {
        var table = $('#dataTableBuilder').DataTable();
        $('table tbody').on('click', 'a.show-documento-item', function (e) {
            var url = $(this).attr('data-url');
            var data = table.row($(this).parents('tr')).data();
            $('#titulo-modal').text('Tipo documento: ' + data['tipo_documento'] + '| Nº: ' + data['numero_documento']);
            $('#btn-donload-docs').attr('href', url).attr('download', 'documento_' + data['id']);
            $('#iframe-preview-docs').attr('src', url);
        });
    }


    return {
        //main function to initiate the module
        init: function () {
            documentoModal();
        }
    };
}();

jQuery(document).ready(function () {
    FormCustomDocumento.init();
});