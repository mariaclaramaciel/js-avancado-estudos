const pessoa = {
    nome: "maria",
    idade: 24,
    cidade: "sao paulo"
}

//notacao de ponto 
console.log(pessoa.nome) //"maria"

//notacao de colchetes
console.log(pessoa["idade"]) //24

//como desestruturar objetos

const {nome, idade, cidade} = pessoa;
console.log(nome);
console.log(idade);
console.log(cidade);