// 1º exercício

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};


// 2º exercício
// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares

function pares (x, y) {
    for (var i = x; i <= y; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

pares(20, 39);

// 2º exercício
// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares

