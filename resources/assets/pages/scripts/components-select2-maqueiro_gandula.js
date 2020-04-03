var ComponentsSelect2 = function () {

    var handleDemo = function () {
        $('option[value=""]').attr("disabled", "disabled");
        $.fn.select2.defaults.set("theme", "bootstrap");
        $('.js-data-maqueiro_gandula-ajax').select2({
            width: "off",
            language: "pt-BR",
            ajax: {
                url: base_path + 'clube/maqueiro_gandula/pessoa/select',
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        q: params.term,
                    };
                },
                processResults: function (data) {
                    return {
                        results: data
                    };
                },
                cache: true
            },
            placeholder: 'Pesquisar...',
            minimumInputLength: 1,
            templateResult: formatRepo,
            templateSelection: formatRepoSelection
        });

        function formatRepo(repo) {
            if (repo.loading) {
                return repo.text;
            }
            var $container = $(
                "<div class='select2-result-repository clearfix'>" +
                "<div class='select2-result-repository__avatar'><img width='50px' src='" + repo.foto + "' /></div>" +
                "<div class='select2-result-repository__meta'>" +
                "<div class='select2-result-repository__title'>" + repo.text + "</div>" +
                "</div>" +
                "</div>" +
                "</div>"
            );
            return $container;
        }

        function formatRepoSelection(repo) {
            var span = repo.id === "" ? "" : $("<span><img width='20px' src='" + repo.foto + "'/> " + repo.text + "</span>");
            return span || repo.text;
        }
    }

    return {
        //main function to initiate the module
        init: function () {
            handleDemo();
        }
    };

}();

if (App.isAngularJsApp() === false) {
    jQuery(document).ready(function () {
        ComponentsSelect2.init();
    });
}