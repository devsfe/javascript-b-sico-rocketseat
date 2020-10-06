// 1º exercício

function exibeMensagem() {
    return (
        "O usuário mora em " +
        endereco.cidade +
        " / " +
        endereco.uf +
        ", no bairro " +
        endereco.bairro +
        ', na rua "' +
        endereco.rua +
        '" com nº ' +
        endereco.numero +
        "."
    );
}

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
        cidade: "São Paulo",
    uf: "SP"
};  

console.log(exibeMensagem());

// 2º exercício
// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares

console.log ('Exercicio 2')

function pares (x, y) {
    for (var i = x; i <= y; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

pares(20, 39);

// 3º exercício
// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares

