//Metodos de interações de array: operam em cada item de array.

// MAP: retorna um novo array sem alterar o array original,
//criando uma copia com as alterações que desejamos.

const elementos = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];
elementos.map(elemento => console.log(elemento.length)) //voltou um novo array com o comprimento de cada string

// FILTER: retorna um novo array com os elementos filtrados

const numeros = [34, 24, 36, 78, 91]
const numerosImpares = numeros.filter(numero => numero%2 != 0)
console.log(numerosImpares)

// FIND: encontra e retorna o primeiro elementos 
//que achar igual ao elemento passado por parâmetro.

const produtos = ["geladeria", "fogao", "cama", "mesa"];

const encontraCama = produtos.find(produto => produto === "cama")
console.log(encontraCama)

// SORT: ordena o array 
//num.sort([funcaoDeComparacao]) > especifica uma funcao que define 
//a ordenacao se omitido ele ira ordenar em ordem crescente
const num = [90, 76, 34, 55];

const crescente = num.sort((a,b) => a-b)
console.log(crescente);
//Para comparar números a função de comparação pode simplesmente 
//subtrair b de a, irá ordenar o array em ordem crescente
const decrecente = num.sort((a,b) => b-a)

// REDUCE: reduz nosso array a um resultado de uma operação matematica
const numbers = [1,34,55];
const soma = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual;
})
console.log(soma)
