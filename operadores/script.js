// 1 - Number

console.log(typeof 2); 
console.log(typeof 2.5); 
console.log(typeof -345);

// 2 - Operadores Aritméticos

console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 / 3);

// 3 - Special Numbers

console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);

// 4 - Strings

console.log("Um texto");
console.log('Outro texto');
console.log(`Mais um texto`);

// 5 - Simbolos especiais em strings

console.log("Testando a \nquebra de linha");
console.log("Espaçamento \t de tab");

// 6 - Concatenação 

console.log("Oi" + " tudo" + " bem?");
console.log(`Testando` + ` com` + ` crase`); 

// 7 - Template Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log(`Podemos executar qualquer coisa: ${console.log("Testando")}`);

// 8 - Boolean

console.log(typeof true);
console.log(typeof false);

console.log(`2 é maior que 3 ? ${2 > 3 ? "Sim" : "Não"}`);
console.log(3 > 2);

// 9 - Comparações 
/*
    Maior e menor: > e < 
    Maior ou igual e menor ou igual: >= e <=
    Igual: == 
    Diferente: !=
    Identico: ===
*/

console.log(5 <= 5);
console.log(5 < 5);

console.log(10 == 10);
console.log(10 == 9);

console.log(10 != 9);

// 10 - Identico

console.log(10 == '10');
console.log(10 === '10');

console.log(10 != '10');
console.log(10 !== '10');

console.log(9 + '9');

// 11 - Operadores Lógicos
/* 
    E: &&      - Ambos os valores precisam ser verdadeiros para retornar verdadeiro
    OU: ||     - Apenas um dos valores precisa ser verdadeiro para retornar verdadeiro
    Negação: ! - Inverte o valor booleano
*/

console.log(true && true);
console.log(true && false);
console.log(true || false);

console.log(5 > 2 && 2 < 10);
console.log(5 > 2 || 'Teste' === 1);

console.log(!true);

// 12 - Empty Values
console.log(typeof null, typeof undefined);
console.log(null == undefined);
console.log(null === undefined);

// 13 - Conversão de tipos automática
console.log(5 * null);
console.log("teste" * "teste");
console.log("10" + 1);
console.log("10" - 1);
