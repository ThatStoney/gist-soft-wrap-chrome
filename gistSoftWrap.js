function changeContent(){
    return function() {
var element = document.getElementsByClassName('form-select select-sm js-code-wrap-mode');
element[0].options.selectedIndex = 1;
}
}

setTimeout(changeContent(), 100)
