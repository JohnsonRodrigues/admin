var FormCustomBaixa = function () {
    var ajaxFormBaixarOrcamento = function () {

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $('table tbody').on('click', 'a.baixar-orcamento', function (e) {
            e.preventDefault();
            var href = $(this).attr('href');
            Swal.fire({
                title: "Baixar Orçamento?",
                text: "Por favor, assegure e confirme!",
                type: "warning",
                showCancelButton: !0,
                confirmButtonText: "Sim, baixar o orçamento!",
                cancelButtonText: "Não, cancele!",
                reverseButtons: !0
            }).then(function (e) {
                if (e.value === true) {
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
            ajaxFormBaixarOrcamento();
        }
    };
}();

jQuery(document).ready(function () {
    FormCustomBaixa.init();
});