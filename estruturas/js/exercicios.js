// Número Impar e Par

// let i = 0;
// let j = Number(prompt('Digite um número'));
// let text = '';

// while (i <= j){
//     if((i % 2 === 0)){
//         text += `${i} é Par\n`
//     } else {
//        text += `${i} é Impar\n`
//     }
//     i++
// }

// alert(`Você escolheu o número ${j} e aqui estão os pares e impares até o número escolhido: 
// ${text}`)

// Contagem Regressiva

// let i = Number(prompt("Digite um número"));
// let j = 0

// while(i >= j){
//     console.log(`contagem ${i}`)
//     i--
// }

// Tabuada
let i = 1
let j = Number(prompt('Digite um número:'))
let text = ''
while(i <= 10){
    text += `A tabuada do número escolhido ${j} x ${i}: ${i * j}\n`
    i++
}
alert(text)