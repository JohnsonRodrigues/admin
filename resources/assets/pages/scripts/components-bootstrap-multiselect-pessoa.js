var ComponentsBootstrapMultiselect = function () {

    return {
        //main function to initiate the module
        init: function () {
            $('.mt-multiselect').each(function () {
                var btn_class = $(this).attr('class');
                var drop_right = ($(this).data('drop-right')) ? $(this).data('drop-right') : false;
                var select_all = ($(this).data('select-all')) ? $(this).data('select-all') : false;
                var width = ($(this).data('width')) ? $(this).data('width') : '';
                var height = ($(this).data('height')) ? $(this).data('height') : '';
                var filter = ($(this).data('filter')) ? $(this).data('filter') : false;



                // init multiselect
                $(this).multiselect({
                    search:'pesquisar',
                    allSelectedText: 'Todos selecionados',
                    filterPlaceholder: 'Search',
                    nSelectedText: 'selected',
                    nonSelectedText: 'Nada selecionado',
                    selectAllText: 'Selecionar tudo',
                    disableIfEmpty: true,
                    enableFiltering: filter,
                    includeSelectAllOption: select_all,
                    dropRight: drop_right,
                    buttonWidth: width,
                    maxHeight: height,
                    buttonClass: btn_class,
                });
            });

        }
    };

}();

jQuery(document).ready(function () {
    ComponentsBootstrapMultiselect.init();
});