
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