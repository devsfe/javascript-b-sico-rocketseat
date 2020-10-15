var inputElement = document.querySelector('div#app input');
var btnElement = document.querySelector('button.botao');


btnElement.onclick = function() {
    var text = inputElement.value;

    alert(text);
}



