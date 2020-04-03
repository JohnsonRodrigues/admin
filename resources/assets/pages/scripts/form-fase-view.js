var FormFaseCustom = function () {
    var faseForm = function () {
        $('option[value=""]').attr("disabled", "disabled");
    }

    return {
        //main function to initiate the module
        init: function () {
            faseForm();
        }
    };
}();

jQuery(document).ready(function () {
    FormFaseCustom.init();
});