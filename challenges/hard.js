// challenges/hard.js

// 1. Verificar se uma pessoa está na faixa etária de 20 a 30 anos.
function isInAgeRange(age) {
    // Retorna true se a idade estiver entre 20 e 30 (inclusive)
    if (age >= 20 && age <= 30) {
        return true;
    } else {
        return false;
    }
}

// 2. Verificar se um número está em uma lista específica.
function isInList(num, list) {
    // Inicializa a variável encontrada como false
    let found = false;
    // Verifica cada item da lista
    for (let i = 0; i < list.length; i++) {
        if (list[i] === num) {
            found = true; // Atualiza found se o número estiver na lista
            break; // Sai do loop se o número for encontrado
        }
    }
    // Retorna found
    if (found) {
        return true;
    } else {
        return false;
    }
}

// 3. Verificar se uma cor é primária.
function isPrimaryColor(color) {
    // Define as cores primárias
    const primaryColors = ['red', 'blue', 'yellow'];
    // Verifica se a cor está nas cores primárias
    if (primaryColors.includes(color.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}

// 4. Verificar se um número é ímpar.
function isOdd(num) {
    // Um número é ímpar se o resto da divisão por 2 for diferente de 0
    if (num % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

// 5. Verificar se uma string contém apenas letras.
function containsOnlyLetters(str) {
    // Verifica se cada caractere da string é uma letra
    for (let i = 0; i < str.length; i++) {
        if (!/[a-zA-Z]/.test(str[i])) {
            return false; // Retorna false se encontrar um caractere que não seja letra
        }
    }
    // Retorna true se todos os caracteres forem letras
    return true;
}

module.exports = {
    isInAgeRange,
    isInList,
    isPrimaryColor,
    isOdd,
    containsOnlyLetters
};
