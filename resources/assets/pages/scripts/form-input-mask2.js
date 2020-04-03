var FormInputMask = function () {

    var handleInputMasks = function () {
        $("#mask_date").inputmask("d/m/y", {
            autoUnmask: true
        }); //direct mask
        $("#mask_date1").inputmask("d/m/y", {
            "placeholder": "*"
        }); //change the placeholder
        $(".mask_date2").inputmask("d/m/y", {
            "placeholder": "dd/mm/yyyy"
        }); //multi-char placeholder
        $("#mask_phone").inputmask("mask", {
            "mask": "(999) 999-9999"
        }); //specifying fn & options
        $("#mask_phone2").inputmask("mask", {
            "mask": ["(99) 9999-9999", "(99) 99999-9999"]
        }); //specifying fn & options
        $("#mask_tin").inputmask({
            "mask": "99-9999999",
            placeholder: "" // remove underscores from the input mask
        }); //specifying options only
        $("#mask_number").inputmask({
            "mask": "9",
            "repeat": 10,
            "greedy": false
        }); // ~ mask "9" or mask "99" or ... mask "9999999999"
        $(".mask_decimal").inputmask('decimal', {
            rightAlignNumerics: true
        }); //disables the right alignment of the decimal input
        $("#mask_currency").inputmask('€ 999.999.999,99', {
            numericInput: true
        }); //123456  =>  € ___.__1.234,56

        $("#mask_currency2").inputmask('€ 999,999,999.99', {
            numericInput: true,
            rightAlignNumerics: false,
            greedy: false
        }); //123456  =>  € ___.__1.234,56
        $("#mask_ssn").inputmask("999-99-9999", {
            placeholder: " ",
            clearMaskOnLostFocus: true
        }); //default


        $(".moneyMask").inputmask('decimal', {
            radixPoint: ",",
            groupSeparator: ".",
            autoGroup: true,
            digits: 2,
            digitsOptional: false,
            prefix: 'R$ ',
            placeholder: '0',
            rightAlign: false,
            unmaskAsNumber: true,
            removeMaskOnSubmit: true,
            onBeforeMask: function (value, opts) {
                return value;
            }
        });


        $(".telefoneMask").inputmask("mask", {
            "mask": "(99) 9999-9999"
        });

        $(".celularMask").inputmask("mask", {
            "mask": "(99) 99999-9999"
        });

        $(".cepMask").inputmask("mask", {
            "mask": "99999-999"
        });

        $(".cpfMask").inputmask("mask", {
            "mask": "999.999.999-99"
        });

        $(".cnpjMask").inputmask("mask", {
            "mask": "99.999.999/9999-99"
        });


        $(".numberMask").inputmask({
            "mask": "9",
            "repeat": 20,
            "greedy": false
        }); // ~ mask "9" or mask "99" or ... mask "9999999999"


        $(".numberMask3").inputmask({
            "mask": "9",
            "repeat": 3,
            "greedy": false
        });

        $(".mask_time").inputmask("mask", {
            "mask": "99:99"
        });

    }


    return {
        //main function to initiate the module
        init: function () {
            handleInputMasks();
        }
    };

}();

if (App.isAngularJsApp() === false) {
    jQuery(document).ready(function () {
        FormInputMask.init(); // init metronic core componets
    });
}