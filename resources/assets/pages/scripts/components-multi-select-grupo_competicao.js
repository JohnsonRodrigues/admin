var qtdSelecionado = 0;
var ComponentsDropdowns = function () {
    var handleMultiSelect = function () {
        $('#multi_select_clubes_participante').multiSelect({
            keepOrder: true,
            selectableHeader: "<div style='padding: 5px; border-radius: 4px 4px 0px 0px;' class='bg-dark bg-font-dark text-center bold uppercase form-control'>Clubes participantes</div><input type='text' class='search-input form-control' id='search-input-selectable' autocomplete='off' placeholder='Nome do clube'>",
            selectionHeader: "<div style='padding: 5px; border-radius: 4px 4px 0px 0px;' class='bg-dark bg-font-dark text-center bold uppercase form-control'>Clubes selecionado(s)</div><input type='text' class='search-input form-control' id='search-input-selection' autocomplete='off' placeholder='Nome do clube'>",
            selectableFooter:"<div style='padding: 5px; border-radius: 4px 4px 0px 0px;' class='bg-dark bg-font-dark text-center bold uppercase form-control'></div>",
            selectionFooter: "<div style='padding: 5px; border-radius: 4px 4px 0px 0px;' class='bg-dark bg-font-dark text-center bold  form-control' id='footer_selection'>0 de "+limite+"</div>",
            afterInit: function (ms) {
                var that = this,
                    $selectableSearch = that.$selectableUl.prev(),
                    $selectionSearch = that.$selectionUl.prev(),
                    selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
                    selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';
                that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
                    .on('change', function (e) {
                        if (e.which === 40) {
                            that.$selectableUl.focus();
                            return false;
                        }
                    });

                that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
                    .on('keydown', function (e) {
                        if (e.which == 40) {
                            that.$selectionUl.focus();
                            return false;
                        }
                    });
            },
            afterSelect: function (value) {
                this.qs1.cache();
                this.qs2.cache();
                $("#search-input-selection").val('').trigger('keyup').focus();
                $("#search-input-selectable").val('').trigger('keyup').focus();
                if(qtdSelecionado>=limite){
                    $('#multi_select_clubes_participante').multiSelect('deselect', ''+value+'');
                }
                qtdSelecionado++;
                $('#footer_selection').text(qtdSelecionado+" de "+limite);
            },
            afterDeselect: function (value) {
                $("#search-input-selection").val('').trigger('keyup').focus();
                $("#search-input-selectable").val('').trigger('keyup').focus();
                this.qs1.cache();
                this.qs2.cache();
                qtdSelecionado--;
                $('#footer_selection').text(qtdSelecionado+" de "+limite);
            }
        });
    }

    return {
        //main function to initiate the module
        init: function () {
            handleMultiSelect();
        }
    };

}();

jQuery(document).ready(function () {
    ComponentsDropdowns.init();
});