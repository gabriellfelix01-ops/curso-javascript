// 1 - Number
console.log(typeof 1);
console.log(typeof 1.10);
console.log(typeof -10);

// 2 - Operações Aritméticas
console.log(10+10);
console.log(10*10);
console.log(100/10);
console.log(5+(10*10));

// 3 - Special Number
console.log(typeof Infinity);
console.log(typeof -Infinity);

console.log(5 * "five");
console.log(typeof NaN);

// 4 - Strings
console.log(typeof "Hello World.");
console.log(typeof `Hello World 2.`);

// 5 - Strings Especiais
console.log("Testando a \nquebra de linha.");
console.log("Espaçamento \t de tab.");

// 6 - Concatenação
console.log("Hello" + " World.");

//  7 - Template Strings 
console.log(`o resultado de 2 + 2 é igual a ${4}`);

// 8 - Booleans 
console.log(true);
console.log(false);
console.log(5<10);
console.log(5>10);

console.log(typeof true);

// 9 - Comparações
console.log(5 >= 5);
console.log(10>20);
console.log(10 == 9);
console.log(10 != 9);
console.log(10===10);

// 10 - Idênticos
console.log(10==("10"));
console.log(10==="10");
console.log(9!="9");
console.log(9!=="9");

// 11 - Operadores Lógicos
console.log(5>1 && 10==10);
console.log(10>5 && 100!=100);
console.log(50>20 || 100!=100);
console.log(10>20 || 50!=50);
console.log(!5==5);

// 12 - Empty Values
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);