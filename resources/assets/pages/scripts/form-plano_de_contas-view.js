var FormCustom = function () {
    var planoDeContasForm = function () {
        $('option[value=""]').attr("disabled", "disabled");
    }


    return {
        //main function to initiate the module
        init: function () {
            planoDeContasForm();
        }
    };
}();

jQuery(document).ready(function () {
    FormCustom.init();
});