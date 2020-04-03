var FormCustomCarteirinha = function () {
    var ajaxFormCarteirinha = function () {

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $('table tbody').on('click', 'a.carteirinha-item', function (e) {
            e.preventDefault();
            var href = $(this).attr('href');
            Swal.fire({
                title: "Emitir carteirinha?",
                text: "Por favor, assegure e confirme!",
                type: "warning",
                showCancelButton: !0,
                confirmButtonText: "Sim, emitir!",
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
                            console.log(results);
                            window.open("data:application/pdf," + results.message);

                            if (results.success === true) {
                                console.log(results.message);
                                window.open(results.message, '_blank');
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
            })
        });
    };

    return {
        //main function to initiate the module
        init: function () {
            ajaxFormCarteirinha();
        }
    };
}();

jQuery(document).ready(function () {
    FormCustomCarteirinha.init();
});