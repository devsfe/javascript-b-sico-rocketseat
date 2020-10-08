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

console.log ('Exercicio 2');

function pares (x, y) {
    for (var i = x; i <= y; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

pares(20, 39);

// 3º exercício
/* Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não. */

console.log ('Exercicio 3');

/// Minha Solução ///

function temHabilidade (skills) {
    if (skills.indexOf("Javascript") > -1) {
        skills = true;
    } else {
        skills = false;
    }

    console.log(skills);
}

var skills = ["Javascript", "ReactJS", "React Native"];

temHabilidade(skills);

/// Solução Gabarito ///

function temHabilidade(skills) {
    return skills.indexOf("Javascript") !== -1;
  }
  
  var skills = ["Javascript", "ReactJS", "React Native"];
  console.log(temHabilidade(skills));



// 4º exercício
//Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

console.log('Exercicio 4');

/// Minha Solução ///

function experiencia(anos) {
    if(anos >= 0 && anos < 1) {
        console.log('Iniciante');
    }else if (anos >= 1 && anos < 3) {
        console.log('Intermediário');
    }else if (anos >= 3 && anos <= 6) {
        console.log('Avançado');
    } else if (anos >= 7) {
        console.log('Jedi Master');
    }
}

var anosEstudo = 2;
experiencia (anosEstudo);

/// Solução Gabarito ///
  
function experiencia(anos) {
    if (anos <= 1) {
      return "Iniciante";
    } else if (anos <= 3) {
      return "Intermediário";
    } else if (anos <= 6) {
      return "Avançado";
    } else {
      return "Jedi Master";
    }
  }
  
  var anosEstudo = 7;
  console.log(experiencia(anosEstudo));


// 5º exercício

console.log('Exercicio 5');

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
]

function habilidadesUsuarios() {
    for (var value of usuarios) {
        console.log(value.join());
    }    
}

habilidadesUsuarios();





