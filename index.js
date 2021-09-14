
document.writeln("<link rel='stylesheet' type = 'text/css' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />");
document.writeln("<script type='text/javascript' src='./fabric/fabric.js'></script>");
document.writeln("<script type='text/javascript' src='./tui-editor-image/js/theme/black-theme.js'></script>");
document.writeln("<script type='text/javascript' src='./tui-editor-image/js/theme/white-theme.js'></script>");
document.writeln("<link rel='stylesheet' type = 'text/css' href='./tui-editor-image/dist/tui-image-editor.css'/>");
document.writeln("<script type='text/javascript' src='./tui-editor-image/dist/tui-code-snippet.min.js'></script>");
document.writeln("<script type='text/javascript' src='./tui-editor-image/dist/tui-color-picker.js'></script>");
document.writeln("<link rel='stylesheet' type = 'text/css' href='./tui-editor-image/dist/tui-color-picker.css'/>");
document.writeln("<script type='text/javascript' src='./tui-editor-image/dist/tui-image-editor.js'></script>");
function createEditor(id, src, locale_Ja, initMenu, menuBarPosition, menu, width, height){
    new tui.ImageEditor(document.getElementById(id), {
        includeUI: {
            loadImage: {
                path: src,
                name: 'SampleImage',
            },
            locale: locale_Ja,
            theme: blackTheme, // or whiteTheme
            initMenu: initMenu,
            menuBarPosition: menuBarPosition,
            menu: menu,
        },
        cssMaxWidth: width,
        cssMaxHeight: height,
        usageStatistics: false,
    });
}

function editUICanvas(){
    $(".tui-image-editor-header").remove();
    $(".tui-image-editor-menu").append("<li id='saveImage' tooltip-content='保存' class='tie-btn-save tui-image-editor-item help'> <a href='#' ><i class='fa fa-floppy-o fa-2x' aria-hidden='true' style='color: #282828;'></i></a></li>");
}


function saveImage(){
    var can = document.getElementsByTagName("canvas");
    var imageData = can[0].toDataURL();
    // Store
    localStorage.setItem("baseImage", imageData);
    return imageData;
}
module.exports.editimage = createEditor;
