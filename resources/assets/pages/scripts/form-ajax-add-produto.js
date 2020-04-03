var FormCustomProduto = function () {
    var ajaxAddProduto = function () {

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $('#addProduto').on('click', function (e) {
            e.preventDefault();
            var href = $(this).attr('href');
            var produto = $('#produto').val();
            var quantidade = $('#quantidade').val();


            if (produto == null || produto.trim() === '') {
                Swal.fire({
                    'title': 'Selecione um produto',
                    'type': "error"
                });
                return false;
            }

            if (produto == null || quantidade <= 0) {
                Swal.fire({
                    'title': 'Informe uma quantidade válida',
                    'type': "error"
                });
                return false;
            }


            $.ajax({
                type: 'POST',
                url: href,
                data: {"produto": produto, "quantidade": quantidade},
                beforeSend: function () {
                    App.blockUI();
                },
                success: function (results) {
                    if (results.success === true) {
                        $('#dataTableBuilder').DataTable().ajax.reload();
                        $('#produto').prop('selectedIndex', 0);
                        $('#quantidade').val(1);
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
        });
    };

    return {
        //main function to initiate the module
        init: function () {
            ajaxAddProduto();
        }
    };
}();

jQuery(document).ready(function () {
    FormCustomProduto.init();
});