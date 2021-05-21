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



let x = 10;

while(x < 100) {

  x += 10;
  
  if(x === 60 || x === 90) {
    console.log("CONTINUE");
    continue;
  }

  console.log("Testando continue " + x);

}