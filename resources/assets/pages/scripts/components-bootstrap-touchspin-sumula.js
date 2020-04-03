var ComponentsBootstrapTouchSpin = function() {

    var handleTouchSpin = function() {

        $(".touchspin").TouchSpin({
            min: 0,
            max: 100,
            buttondown_class: "btn blue",
            buttonup_class: "btn red"
        });

    }

    return {
        //main function to initiate the module
        init: function() {
            handleTouchSpin();
        }
    };

}();

jQuery(document).ready(function() {
    ComponentsBootstrapTouchSpin.init();
});