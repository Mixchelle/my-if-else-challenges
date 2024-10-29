// challenges/easy.js

// 1. Verificar se um número é positivo.
// A função deve receber um número e retornar true se ele for maior que 0; 
// caso contrário, deve retornar false.
function isPositive(num) {
    // Adicione sua lógica aqui
    // Exemplo: if (num > 0) { return true; } else { return false; }
}

// 2. Verificar se um número é par.
// A função deve receber um número e retornar true se ele for par. 
// Um número é considerado par se o resto da divisão por 2 for igual a 0.
function isEven(num) {
    // Adicione sua lógica aqui
    // Exemplo: if (num % 2 === 0) { return true; } else { return false; }
}

// 3. Verificar se um número está entre 10 e 50, inclusive.
// A função deve retornar true se o número fornecido estiver dentro do intervalo de 10 a 50 (inclusive).
function isBetween10And50(num) {
    // Adicione sua lógica aqui
    // Exemplo: if (num >= 10 && num <= 50) { return true; } else { return false; }
}

// 4. Determinar se uma pessoa pode votar.
// A função deve receber a idade de uma pessoa e retornar true se a idade for 18 anos ou mais; 
// caso contrário, deve retornar false.
function canVote(age) {
    // Adicione sua lógica aqui
    // Exemplo: if (age >= 18) { return true; } else { return false; }
}

// 5. Verificar se um carro pode aceitar um número específico de passageiros.
// A função deve receber um número representando a quantidade de passageiros e retornar true 
// se o carro pode aceitar esse número (até 4 passageiros).
function canAcceptPassengers(numPassengers) {
    // Adicione sua lógica aqui
    // Exemplo: if (numPassengers <= 4) { return true; } else { return false; }
}

// 6. Retornar o maior entre dois números.
// A função deve receber dois números e retornar aquele que for maior. 
// Se ambos forem iguais, retorna qualquer um deles.
function maxOfTwoNumbers(num1, num2) {
    // Adicione sua lógica aqui
    // Exemplo: if (num1 > num2) { return num1; } else { return num2; }
}

// 7. Retornar o menor entre três números.
// A função deve receber três números e retornar o menor deles. 
// Utilize uma variável para armazenar o menor número encontrado.
function minOfThreeNumbers(num1, num2, num3) {
    // Adicione sua lógica aqui
    // Exemplo: let menor = num1; 
    // if (num2 < menor) { menor = num2; } 
    // if (num3 < menor) { menor = num3; } 
    // return menor;
}

// 8. Verificar se uma palavra começa com "A".
// A função deve receber uma string e retornar true se a palavra começar com a letra 'A', 
// considerando a insensibilidade a maiúsculas e minúsculas.
function startsWithA(word) {
    // Adicione sua lógica aqui
    // Exemplo: if (word.charAt(0).toLowerCase() === 'a') { return true; } else { return false; }
}

// 9. Verificar se um número está dentro de um intervalo.
// A função deve receber um número e dois limites (inicial e final) e retornar true 
// se o número estiver entre esses limites (inclusive).
function isInInterval(num, start, end) {
    // Adicione sua lógica aqui
    // Exemplo: if (num >= start && num <= end) { return true; } else { return false; }
}

// 10. Verificar se um número é divisível por 5.
// A função deve receber um número e retornar true se ele for divisível por 5. 
// Um número é divisível por 5 se o resto da divisão por 5 for igual a 0.
function isDivisibleBy5(num) {
    // Adicione sua lógica aqui
    // Exemplo: if (num % 5 === 0) { return true; } else { return false; }
}

module.exports = {
    isPositive,
    isEven,
    isBetween10And50,
    canVote,
    canAcceptPassengers,
    maxOfTwoNumbers,
    minOfThreeNumbers,
    startsWithA,
    isInInterval,
    isDivisibleBy5
};
