//forma reduzida de de escrever condicionais 
//condição(teste logico) ? expr1 : expr2 

//if(idade>=18) {
//    return "Maior de idade"
//} else {
//    return "Menor de idade"
//}

//em forma reduzida seria:
function calculaIdade(idade) {
    return idade >=19 ? 'Maior de idade' : 'Menor de idade'
}
console.log(calculaIdade(10 ))
