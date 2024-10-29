// challenges/medium.js

// 1. Retornar “Bom dia”, “Boa tarde” ou “Boa noite” com base na hora.
// A função deve receber um número representando a hora (0 a 23) e retornar uma saudação apropriada. 
// Se a hora estiver entre 5 e 11, deve retornar "Bom dia". 
// Para horas entre 12 e 17, deve retornar "Boa tarde". 
// E para horas entre 18 e 23, deve retornar "Boa noite". 
// Caso a hora não esteja dentro desse intervalo, deve retornar "Hora inválida".
function greeting(hour) {
    // Adicione a lógica aqui
}

// 2. Verificar se um número é um quadrado perfeito.
// A função deve determinar se um número não negativo é um quadrado perfeito. 
// Um quadrado perfeito é um número que é o quadrado de um número inteiro. 
// Se o número for negativo, a função deve retornar false.
function isPerfectSquare(num) {
    // Adicione a lógica aqui
}

// 3. Verificar se uma pessoa pode dirigir (idade >= 18 e com habilitação).
// A função deve verificar se uma pessoa tem idade suficiente para dirigir. 
// A idade deve ser maior ou igual a 18 e a pessoa deve ter uma habilitação. 
// Se ambos os critérios forem atendidos, deve retornar true; caso contrário, false.
function canDrive(age, hasLicense) {
    // Adicione a lógica aqui
}

// 4. Verificar se uma palavra é um palíndromo.
// A função deve determinar se uma palavra lida de trás para frente é igual à palavra original. 
// Se a palavra for um palíndromo, deve retornar true; caso contrário, false.
function isPalindrome(word) {
    // Adicione a lógica aqui
}

// 5. Verificar se dois números são iguais.
// A função deve comparar dois números e retornar true se forem iguais. 
// Caso contrário, deve retornar false.
function areEqual(num1, num2) {
    // Adicione a lógica aqui
}

// 6. Verificar se um número é múltiplo de 3 ou 7.
// A função deve verificar se um número é divisível por 3 ou por 7. 
// Se for um múltiplo de pelo menos um desses números, deve retornar true; caso contrário, false.
function isMultipleOf3Or7(num) {
    // Adicione a lógica aqui
}

// 7. Verificar se uma string está vazia.
// A função deve verificar se uma string é vazia (ou seja, se não contém nenhum caractere). 
// Deve retornar true se a string estiver vazia e false caso contrário.
function isEmptyString(str) {
    // Adicione a lógica aqui
}

// 8. Verificar se um ano é bissexto.
// A função deve determinar se um ano é bissexto. 
// Um ano é bissexto se é divisível por 4, não é divisível por 100, ou é divisível por 400. 
// Deve retornar true se o ano for bissexto e false caso contrário.
function isLeapYear(year) {
    // Adicione a lógica aqui
}

// 9. Verificar se uma letra é uma vogal.
// A função deve determinar se uma letra fornecida é uma vogal (a, e, i, o, u). 
// A verificação deve ser feita de forma insensível a maiúsculas e minúsculas, retornando true se for uma vogal e false caso contrário.
function isVowel(letter) {
    // Adicione a lógica aqui
}

// 10. Verificar se um número é negativo.
// A função deve verificar se um número é menor que zero. 
// Deve retornar true se o número for negativo e false caso contrário.
function isNegative(num) {
    // Adicione a lógica aqui
}

module.exports = {
    greeting,
    isPerfectSquare,
    canDrive,
    isPalindrome,
    areEqual,
    isMultipleOf3Or7,
    isEmptyString,
    isLeapYear,
    isVowel,
    isNegative
};
