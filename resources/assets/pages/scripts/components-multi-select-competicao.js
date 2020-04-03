var ComponentsDropdowns = function () {

    var handleMultiSelect = function () {
        $('#multi_select_criterios').multiSelect({
            keepOrder: true,
            selectableHeader: "<div style='padding: 5px; border-radius: 4px 4px 0px 0px;' class='bg-dark bg-font-dark text-center bold uppercase'>Critérios</div>",
            selectionHeader: "<div style='padding: 5px; border-radius: 4px 4px 0px 0px;' class='bg-dark bg-font-dark text-center bold uppercase'>Critérios selecionado(s)</div>",
            afterSelect: function(value, text){
                var get_val = $("#criterios").val();
                var hidden_val = (get_val != "") ? get_val+"," : get_val;
                $("#criterios").val(hidden_val+""+value);
            },
            afterDeselect: function(value, text){
                var get_val = $("#criterios").val();
                var new_val = get_val.replace(value, "");
                $("#criterios").val(new_val);
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