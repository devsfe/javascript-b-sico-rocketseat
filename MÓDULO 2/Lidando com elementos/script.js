var linkElement = document.createElement('a'); //Criando link
linkElement.setAttribute('href', 'https://rocketseat.com.br/');

var textElement = document.createTextNode('Acessar Rocketseat'); //Criando texto para link
linkElement.appendChild(textElement);

var containerElement = document.querySelector('#app');
containerElement.appendChild(linkElement); //Adicionando o link via js

var inputElement = document.querySelector('#nome');
containerElement.removeChild(inputElement); //Removendo input via js