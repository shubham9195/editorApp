var commentedText
function comment (){
    if(window.getSelection){
        text = window.getSelection().toString();
        commentedText = document.execCommand("backColor", false, "yellow")
        console.log('chchchchhc',text);
          return text
          
          }else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
          }
        return text;
}