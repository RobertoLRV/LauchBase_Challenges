// Construcao e impressão de objetos

// Crie um programa que armazena dados da empresa Rockeat dentro de um objeto chamado empresa.

const empresa ={
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

/**
 *  Vetores e objetos 
 *      Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologia que trabalha.
 *      Um programador pode trabalhar com varia tecnologias, por isso armazene essa tecnologias em um array.
 *      As tecnologias tambem devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:
 */


const programador = {
    nome: "Carlos",
    idade: 32,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop'},
        { nome: 'Python', especialidade: 'Data Science'},
        { nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ]
}

console.log(`O usuario ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)