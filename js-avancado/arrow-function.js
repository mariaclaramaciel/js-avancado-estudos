//Uma expressão arrow function possui uma sintaxe mais curta 
//quando comparada a uma expressão de função (function expression)

const soma = (num1,num2) => num1 + num2 //nao precisa de chaves pois é apenas uma linha
console.log(soma(1,2)); 

const sayHello = name => `Hello ${name}`//quando é apenas um parametro nao precisa de ()
console.log(sayHello('Maria'))