var FormCustomDetalhe = function () {
    var ajaxFormDetalhe = function () {

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $('table tbody').on('click', 'a.detalhe-item', function (e) {
            e.preventDefault();
            var href = $(this).attr('href');


            var tr = $(this).closest('tr');
            var row = $('#dataTableBuilder').DataTable().row( tr );

            if ( row.child.isShown() ) {
                row.child.hide();
                tr.removeClass('shown');
            }
            else {
                row.child( format(row.data()) ).show();
                tr.addClass('shown');
            }






            $.ajax({
                type: 'POST',
                url: href,
                beforeSend: function () {
                    App.blockUI();
                },
                success: function (results) {
                    if (results.success === true) {
                        $('#dataTableBuilder').DataTable().ajax.reload();
                        Swal.fire({
                            'title': results.message,
                            'type': "success"
                        });
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
            ajaxFormDetalhe();
        }
    };
}();

jQuery(document).ready(function () {
    FormCustomDetalhe.init();
});