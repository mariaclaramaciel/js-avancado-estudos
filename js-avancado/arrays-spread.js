//Spread(sitaxe de espalhamento) permite que um objeto iterável, 
//como uma expressão de array ou uma string seja expandido para 
//ser usado onde zero ou mais argumentos (para chamadas de funções) 
//ou elementos (para arrays literais) são esperados, ou que um 
//objeto seja expandido onde zero ou mais pares propriedade:valor 
//(para objetos literais) são esperados.

const alunas = [
    'Paula',
    'Maria',
    'Simara'
]; 
console.log(alunas[1]) //Maria
//Operador spred (...), traz o array anterior sem modificala
const alunasXp = [...alunas, 'Larissa', 'Emanuela']
console.log(alunasXp) 

//Outro exemplo:
function soma(num1,num2,num3){
    return num1+num2+num3;
}
const numeros = [1,2,3];

console.log(soma(...numeros));