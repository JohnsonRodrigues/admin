var bootstrapInputFileDocumentacao = function () {

    var inputFileConfig = function () {
        $(".filesInput").fileinput({
            language: "pt-BR2",
            maxFileSize: 20000,
            showUpload: false,
            showPreview: false,
            allowedFileExtensions: ["jpg", "png", "gif", 'pdf'],
            elErrorContainer: '#kartik-file-errors',
            browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>',
            removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
        });
    }

    return {
        //main function to initiate the module
        init: function () {
            inputFileConfig();
        }
    };
}();

jQuery(document).ready(function () {
    bootstrapInputFileDocumentacao.init();
});