var FormCustomDeleteSubstituicao = function () {
    var ajaxFormDeleteSubstituicao = function () {

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $('table tbody').on('click', 'button.destroy-item', function (e) {
            e.preventDefault();
            var href = $(this).attr('href');
            Swal.fire({
                title: "Excluir?",
                text: "Por favor, assegure e confirme!",
                type: "warning",
                showCancelButton: !0,
                confirmButtonText: "Sim, exclua!",
                cancelButtonText: "Não, cancele!",
                reverseButtons: !0
            }).then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        type: 'POST',
                        data: {"_method": 'DELETE'},
                        url: href,
                        beforeSend: function () {
                            App.blockUI();
                        },
                        success: function (results) {
                            if (results.success === true) {
                                $('#substiuicao-table').DataTable().ajax.reload();
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

                } else {
                    e.dismiss;
                }

            }, function (dismiss) {
                return false;
            });
        });
    };

    return {
        //main function to initiate the module
        init: function () {
            ajaxFormDeleteSubstituicao();
        }
    };
}();

jQuery(document).ready(function () {
    FormCustomDeleteSubstituicao.init();
});