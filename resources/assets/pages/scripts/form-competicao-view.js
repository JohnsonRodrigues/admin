var FormCompeticaoCustom = function () {
    var competicaoForm = function () {
        $('option[value=""]').attr("disabled", "disabled");
    }

    return {
        //main function to initiate the module
        init: function () {
            competicaoForm();
        }
    };
}();

jQuery(document).ready(function () {
    FormCompeticaoCustom.init();
});