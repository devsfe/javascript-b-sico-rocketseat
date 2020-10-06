
/// VARIÁVEIS ///
console.log('1. Variáveis');

var nome = "Fernando"; //string
var idade = 18; //inteiro
var peso = 60.4; //float
var humano = true; //boolean
var alunos = ['Fernando', 'Isaque', 'Lucas']; //vetores

var aluno = { //objetos
    nome: alunos[2],
    idade: 18,
    peso: 60.4,
    humano: true
};

console.log(aluno.nome);

/// OPERAÇÕES MATEMÁTICAS ///
console.log('2. Operações Matemáticas');


var x = 10, y = 5;

var result =  x * y;

x += 5; // x = x + 5;

console.log(x);
console.log(result);


/// FUNÇÕES ///
console.log('3. Funções');


function soma(n1, n2) {
    var result = n1 + n2;

    return result;
}

var result = soma(9, 9);

console.log(result);


/// CONDICIONAIS ///
console.log('4. Condicionais');


function retornaSexo(sexo) { // usando if else
    if(sexo === 'M') {
        return 'Masculino';
    } else if (sexo === 'F'){
        return 'Feminino';
    } else {
        return 'Outro(s)';
    }
}

var result = retornaSexo('F');
console.log(result);

function retornaSexo2(sexo2) { // usando switch case
    switch(sexo2) {
        case 'M':
            return 'Masculino';
        case 'F':
            return 'Feminino';
        default:
            return 'Outro(s);'
    }
}

var result2 = retornaSexo2('M');
console.log(result2);

/// OPERADORES LÓGICOS ///
console.log('5. Operadores Lógicos');

// AND && OR || NOT !

var sexo = 'F';

var masculino = (sexo === 'M');


console.log(masculino);


/// CONDIÇÕES TERNÁRIAS ///
console.log('6. Condições Ternárias');

var sexo = 'F';

var retorno = (sexo === 'M') ? 'Masculino' : 'Feminino'

console.log(retorno);


/// ESTRUTURAS DE REPETIÇÃO ///
console.log('7. Estruturas de Repetição');

for (var i = 0; i <= 100; i++) {
    console.log(i);
}

var j = 0;
while (j <= 100) {
    console.log(j);

    j++;
}

/// INTERVALO E TIMEOUT ///
console.log('7. Intervalo e Timeout');

function exibeAlgo() {
    console.log('Hello World');
}

setTimeout(exibeAlgo, 5000);