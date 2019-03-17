var Reset = function () {
    var handleReset = function () {

        $('.reset-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true
                },
                password_confirmation: {
                    equalTo: "#register_password"
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit

            },
            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },
            errorPlacement: function (error, element) {
                error.insertAfter(element);
            },
            submitHandler: function (form) {
                form.submit();
            }
        });

        $('.reset-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.reset-form').validate().form()) {
                    $('.reset-form').submit();
                }
                return false;
            }
        });
    }

    return {
        //main function to initiate the module
        init: function () {
            handleReset();
        }
    };
}();

jQuery(document).ready(function () {
    Reset.init();
});