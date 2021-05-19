//instalar code runner


//Elabore um algoritmo que receba dois números e determine qual é o menor entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

let num1 = 228
let num2 = 228

if (num1 < num2) {
    console.log(`${num1} é o menor número`)
} else if (num1 > num2) {
    console.log(`${num2} é o menor número`)
} else {
    console.log(`Os números são iguais`)
}

//Elabore um algoritmo que receba uma string com dia da semana e devolva um número (1-7) correspondente ao dia da semana.


let dia = "sábado"

switch (dia) {
    case 'domingo':
        console.log(1)
        break
    case 'segunda':
        console.log(2)
        break
    case 'terça':
        console.log(3)
        break
    case 'quarta':
        console.log(4)
        break
    case 'quinta':
        console.log(5)
        break
    case 'sexta':
        console.log(6)
        break
    case 'sabado':
        console.log(7)
        break
    default:
        console.log('digite um dia válido!')
}

//Elabore um algoritmo que receba uma string com dia da semana (sexta, sábado ou domingo) e devolva uma string: sextou, sabadou ou domingou e se for qualquer outro dia, interpolar e  informar que nao é um dia festivo. 


let diaDaSemana = 'sábado'

switch (diaDaSemana) {
    case 'domingo':
        console.log('Domingou')
        break
    case 'sábado':
        console.log('Sabadou')
        break
    case 'sexta':
        console.log('Sextou')
        break
    default: 
        console.log(`${diaDaSemana} não é um dia festivo.`)
}


//Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (30%) e o valor total a ser pago.

let subtotal = 400
let taxa = subtotal * (30/100)

let totalAPagar = subtotal + taxa
console.log(totalAPagar)


//Crie um algoritmo que receba o valor da conta e a quantidade de amigas, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago e valor para cada amiga.

let conta = 400
let amigas = 5

let servico = conta * (10/100)

let totalDaConta = subtotal + servico
let valorPorAmiga = totalDaConta/amigas

console.log(valorPorAmiga)

//Crie uma variavel que recebe a idade da pessoa e informa se ela pode assistir ao filme com classificação de 14 anos

let idade = 12 

if (idade < 14) {
    console.log(`Devido a classificação, você não pode assistir ao filme!`)
} else {
    console.log(`Bom filme!`)
}

// Se um processo seletivo para vaga de deva tem 10 algoritmos e serao aprovados quem acertar pelo menos 7 deles, crie um sistema que informe se a candidata foi aprovada ou nao

let acertos = 7

if (acertos >= 7) {
    console.log(`aprovada`)
} else {
    console.log(`tente novamente`)
}

// Execute as seguintes tarefas: 1.Declare uma nova variável chamada 'calculadora', e adicione uma instrução somando os valores 10 e 5.

// Incremente 1 à variável 'calculadora', usando o operador de soma abreviado.

// Atribua à variável 'calculadora' seu próprio valor multiplicando por 3, usando o operador de multiplicação abreviado.

// Mostre os valores no console.

let calculadora = 10 + 5
calculadora++ //16
calculadora*=3 //48

console.log(calculadora)

