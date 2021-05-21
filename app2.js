// //Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.

function calculaIMC(massa, altura) {
    return massa / (altura**2)
}

let imc = calculaIMC(80, 1.58)
console.log(imc)

// //Crie uma função que determina se um número é par ou impar.

function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

let resultado = parOuImpar(30)
console.log(resultado)


// //Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.

let num = 3

for (i = 1; i <= 10 ; i++) {
    console.log(`${num} x ${i} = ${num*i}`)
}

console.log("FIM")
// //Imprima na tela os números pares existentes entre 0 e 100.

let cont = 0;
while (cont <= 100) {
    let resto = cont % 2
    if (resto === 0){
        console.log("Par " + cont)
    }
    cont++
}
console.log("FIM")

// //Crie uma função que recebe uma temperatura em graus celsius retorna o valor convertido em Fahrenheit.

function converteTemperatura(temp) {
    return (temp * 9/5) + 32
}

let conversao = converteTemperatura(40)
console.log(`${conversao}F`)

// // Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo:  3! = 3 * 2 * 1 // 6

function fatorial(n) {
    let fat = 1
    for (let i = n; i >1 ; i--) {
        fat *= i
    }
    return fat
}

console.log(fatorial(3))


//Crie uma função que recebe 2 parâmetros e retorna a multiplicação deles.

function multiplica(a,b) {
    return a * b
}

console.log(multiplica(2,5))

// Crie uma função que calcula 5% de desconto retornando o valor do desconto.

function desconta(valor) {
    let desconto = valor * (5/100)
    return desconto
}

console.log(desconta(100))

//Crie uma função que irá converter uma quantia de real para dolar utilizando a cotação do dia.

function converteRealDolar(valor) {
    let dolar = 5.37
    let resultado = valor * dolar
    return resultado
}

console.log(converteRealDolar(100))

//Utilize a estrutura de repetição for para imprimir no console  conforme instruções: 

// a) números de 1 a 100  
for (i = 1; i <= 100 ; i++) {
    console.log(i)
}
// b) quando chegar no número 50 interrompa a instrução e pare o loop 
for (i = 1; i <= 100 ; i++) {
    if ( i === 51 ) {
        break
    }
    console.log(i)
}

// c) quando chegar no número 50 pule a instrução|

for (i = 1; i <= 100 ; i++) {
    if ( i === 50 ) {
        continue
    }
    console.log(i)
}



// imprima na tela a partir de 20 e depois de 10 em 10, em vez dos numeros 60 e 90 imprima a palavra continue.

let x = 10;

while(x < 100) {

  x += 10;
  
  if(x === 60 || x === 90) {
    console.log("CONTINUE");
    continue;
  }

  console.log(x);

}


// Para revisao de quarta:

// | Exemplo 12 | Descrição |
// | --- | --- |
// | `Piramide` | Construa uma piramide com hashtags, a piramide é espelhada e tem um espaço no meio e recebe um número que determina sua altura.
// ```
// Height: 4
//    #  #
//   ##  ##
//  ###  ###
// ####  ####
// ```
// <img src ="https://www.researchgate.net/profile/Michael-Green-45/publication/334209333/figure/fig1/AS:782831043244032@1563652873593/Super-Mario-Bros-scene-where-Mario-need-to-jump-over-a-gap-from-the-first-pyramid-to-the_Q320.jpg"/>
// |
