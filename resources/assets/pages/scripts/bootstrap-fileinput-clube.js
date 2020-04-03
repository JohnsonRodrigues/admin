var bootstrapInputFileClube = function () {

    var inputFileConfig = function () {
        $(".avatar").fileinput({
            language: "pt-BR",
            overwriteInitial: true,
            maxFileSize: 2000,
            showClose: false,
            showCaption: false,
            showBrowse: false,
            browseOnZoneClick: true,
            browseLabel: '',
            removeLabel: '',
            browseIcon: '',
            removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
            removeTitle: 'Cancelar ou redefinir alterações',
            elErrorContainer: '#kartik-file-errors',
            defaultPreviewContent: '<img src=' + urlImagemFile + ' width="150px" alt="imagem"><h5 class="text-muted">Clique para selecionar</h6>',
            layoutTemplates: {main2: '{preview} {remove} {browse}'},
            allowedFileExtensions: ["jpg", "png", "gif"],
            fileActionSettings: {
                showDrag: false,
                showZoom: false,
                showUpload: false,
                showRemove: false,
                showDrag: false,
                indicatorNew: "",
                indicatorSuccess: "",
                indicatorError: ""
            },
        })
    }

    return {
        //main function to initiate the module
        init: function () {
            inputFileConfig();
        }
    };
}();

jQuery(document).ready(function () {
    bootstrapInputFileClube.init();
});