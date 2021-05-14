// #### 6.5 **Exemplos:**

// | Exemplo 01 | Descrição |
// | --- | --- |
// | `Variaveis` | Vamos criar variaveis usando let, const e var, atribuir valores, identificar comportamentos e saídas quando tentarmos recuperar. |

var num = 10;
var price = 50;
var myName = 'Simara'
var trueValue = true
var nullVar = null

const lastName //vai imprimir erro, pois precisa ser inicializada
let sobrenome //não vai imprimir erro, vai ser undefined, pois pode criar sem inicializar

let language = "Javascript"
const padrao = "ECMAcript"

// | Exemplo 02 | Descrição |
// | --- | --- |
// | `Concatenar x interpolar` | Vamos criar variaveis usando let, const e var, atribuir strings e vamos concatenar e interpolar. |
let saudacao = 'Hello'
let name = "Simara"

//concatenando
console.log(saudacao + ' ' + name)
// Vai imprimir Hello World

console.log(saudacao + name)
//Vai imprimir sem espaço HelloWorld

console.log('Hello' + " " + myName)
//Vai imprimir Hello Simara

//interpolando
console.log(`Hello ${name}`)
//Vai imprimir Hello Simara

// | Exemplo 03 | Descrição |
// | --- | --- |
// | `Média entre números` | Crie uma variavel e atribua como valor uma operacao de média entre 5 números inteiros e positivos. |

const num1 = 10
const num2 = 50
const num3 = 70
const num4 = 90
const num5 = 85

let media = (num1 + num2 + num3 + num4 + num5) /5

console.log(media)


// | Exemplo 04 | Descrição |
// | --- | --- |
// | `Quero lucrar` | Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%? |

const custo = (300 * 100) / (60)
const lucro = custo * (25/100)

const valorDeVenda = custo + lucro

console.log(valorDeVenda)
// | Exemplo 05 | Descrição |
// | --- | --- |
// | `Quero somar` | Faça um programa que peça dois números e imprima no console a soma desses dois números.|

let entrada1 = 25
let entrada2 = 25

let soma = entrada1 + entrada2
console.log(soma)

// | Exemplo 06 | Descrição |
// | --- | --- |
// | `Desapegada` | Crie um programa que me diga quanto cobrar para vender um notebook usado: o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%? |
const custo = 3000
const desconto = custo * (25/100)

const valorDeVenda = custo - desconto

console.log(valorDeVenda)

// | Exemplo 07 | Descrição |
// | --- | --- |
// | `conversor de medidas` | Escreva um programa que receba um valor em metros e o exiba no console convertido em milímetros. |

let entrada = 20
let metroParaMilimetro = entrada * 1000

console.log(metroParaMilimetro)

// | Exemplo 08 | Descrição |
// | --- | --- |
// | `Semaforo, sinal ou sinaleira?` | Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito. |
let sinal = 'vermelho'
if (sinal === 'vermelho') {
    console.log('PARE')
} else if (sinal === 'amarelo'){
    console.log('ATENÇÃO')
} else if (sinal === 'verde'){
    console.log('PASSE')
} else {
    console.log(`${sinal} não está funcionando.`)
}
// | Exemplo 09 | Descrição |
// | --- | --- |
// | `FizzBuzz` | Utilizando os conceitos que estudamos, vamos criar um programa que irá imprimir 'FizzBuzz'para números divisiveis por 3 e 5, para números divisíveis por 3 irá impirmir 'Fizz' e para números divisíveis por 5 irá imprimir 'Buzz' e por fim, se não cumprir nenhum dos casos acima imprime o próprio número. |

let entrada = 150

    if (entrada % 3 === 0 && entrada % 5 === 0 ) {
        console.log('FizzBuzz')
    } else if (entrada % 3 === 0) {
        console.log('Fizz')
    } else if (entrada % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(`não cumpre um requisito, o numéro é ${entrada}`)
    }

console.log(entrada)
// | Exemplo 10 | Descrição |
// | --- | --- |
// | `É dia de aula?` | Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar os dias de aula para a nossa turma. |
let diaDeAula = 'sabado'
if (diaDeAula === 'sabado') {
    console.log('Hoje é diaaa')
} else if (diaDeAula === 'quarta'){
    console.log('Hoje tem revisão')
} else if (diaDeAula === 'segunda'){
    console.log('Hoje tem plantão')
} else {
    console.log(`${diaDeAula} posso estudar um pouco por conta e ajudar as coleguinhas.`)
}











