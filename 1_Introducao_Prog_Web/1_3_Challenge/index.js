/**
 * Crie um programa que armazena um array de usuarios (objetos), cada usuario tem um nome e suas tecnologias (novo array), por exemplo:
 * 
 * const usuarios = [
 * { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
 * { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
 * { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
 * ];
 * 
 * Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:
 *  Carlos trabalha com HTML, CSS
 *  Jarmine trabalha com JavaScript, CSS
 *  Tuane trabalha com HTML, Node.js
 */


const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
  ]

//for (let usuario of usuarios) {
//    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
//}

for (let i = 0; i < usuarios.length; i++){
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(', ')}`)
}


/**
 * Busca por teconologia
 * 
 * Bseado no desafio anterior, utilize a mesma lista de usuario construida.
 * 
 * Crie uma função que recebe os dados de um objeto de usuario e retorna SE o usuario trabalha com CSS ou não. Essa função deve retornar um
 * boolean true/false.
 * 
 * 
 */


 function checaSeUsuarioUsaCSS(usuario){
    let checkUser = false;
    for (let i =0; i < usuario.tecnologias.length; i++){
        if(usuario.tecnologias[i] == 'CSS'){
          checkUser = true;
        }
    }
    return checkUser;
 }


  for (let i =0; i < usuarios.length; i++){
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

    if (usuarioTrabalhaComCSS){
      console.log(`O usuario ${usuarios[i].nome} trabalha com CSS`);
    }
  }

/**
 * Soma de despesas e receitas 
 * 
 * Crie um programa que calcula a soma de receitas e despesas de usuarios e no fim retorna o saldo (receitas - despesas)
 * 
 *
 */

const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

/**
 * Percorra o array de usuarios e para cada usuario chame uma função chamda calculaSaldo que recebe como parametro as receitas e
 * despesas do usuario:
 */

function calculaSaldo(receitas, despesas){
  

  const somaReceitas = somaNumeros(receitas);
  const somaDepesas = somaNumeros(despesas);

  const saldo = somaReceitas - somaDepesas;

  return saldo;
}


function somaNumeros(numeros){
  let soma = 0;

  for (let i = 0; i < numeros.length; i++){
    soma = soma + numeros[i];
  }

  return soma;
}



for (let i =0; i < usuarios.length; i++){
  const usuarioSaldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas);

  if (usuarioSaldo > 0){
    console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${usuarioSaldo}`);
  }
  else{
    console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${usuarioSaldo}`);
  }
}










