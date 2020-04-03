var FormSearchSortable = function () {

    var searchMandante = function () {
        $('input#search_atletas_mandante').bind('keydown keypress keyup change', function () {
            var search = this.value.toUpperCase();
            var $li = $("#sortable-atletas-disponiveis-mandante  li").hide();
            $li.filter(function () {
                return $(this).text().indexOf(search) >= 0;
            }).show();

            if ($('#sortable-atletas-disponiveis-mandante  li:visible').length > 0) {
                $('#nenhum_registro_atleta_mandante').hide();
            } else {
                $('#nenhum_registro_atleta_mandante').show();
            }
        });
        $('input#search_comissao_mandante').bind('keydown keypress keyup change', function () {
            var search = this.value.toUpperCase();
            var $li = $("#sortable-comissao-disponiveis-mandante li").hide();
            $li.filter(function () {
                return $(this).text().indexOf(search) >= 0;
            }).show();

            if ($('#sortable-comissao-disponiveis-mandante li:visible').length > 0) {
                $('#nenhum_registro_comissao_mandante').hide();
            } else {
                $('#nenhum_registro_comissao_mandante').show();
            }
        });
    }

    var searchVisitante = function () {
        $('input#search_atletas_visitante').bind('keydown keypress keyup change', function () {
            var search = this.value.toUpperCase();
            var $li = $("#sortable-atletas-disponiveis-visitante  li").hide();
            $li.filter(function () {
                return $(this).text().indexOf(search) >= 0;
            }).show();

            if ($('#sortable-atletas-disponiveis-visitante  li:visible').length > 0) {
                $('#nenhum_registro_atleta_visitante').hide();
            } else {
                $('#nenhum_registro_atleta_visitante').show();
            }
        });
        $('input#search_comissao_visitante').bind('keydown keypress keyup change', function () {
            var search = this.value.toUpperCase();
            var $li = $("#sortable-comissao-disponiveis-visitante li").hide();
            $li.filter(function () {
                return $(this).text().indexOf(search) >= 0;
            }).show();

            if ($('#sortable-comissao-disponiveis-visitante li:visible').length > 0) {
                $('#nenhum_registro_comissao_visitante').hide();
            } else {
                $('#nenhum_registro_comissao_visitante').show();
            }
        });
    }

    return {
        //main function to initiate the module
        init: function () {
            searchMandante();
            searchVisitante();
        }
    };
}();

jQuery(document).ready(function () {
    FormSearchSortable.init();
});