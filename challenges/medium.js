// challenges/medium.js

// 1. Retornar “Bom dia”, “Boa tarde” ou “Boa noite” com base na hora.
function greeting(hour) {
    if (hour >= 5 && hour < 12) {
        return "Bom dia";
    } else if (hour >= 12 && hour < 18) {
        return "Boa tarde";
    } else if (hour >= 18 && hour < 24) {
        return "Boa noite";
    } else {
        return "Hora inválida"; // Caso a hora não esteja entre 0 e 23
    }
}

// 2. Verificar se um número é um quadrado perfeito.
function isPerfectSquare(num) {
    if (num < 0) {
        return false; // Números negativos não são quadrados perfeitos
    }
    const root = Math.sqrt(num);
    if (root * root === num) {
        return true;
    } else {
        return false;
    }
}

// 3. Verificar se uma pessoa pode dirigir (idade >= 18 e com habilitação).
function canDrive(age, hasLicense) {
    if (age >= 18 && hasLicense) {
        return true;
    } else {
        return false;
    }
}

// 4. Verificar se uma palavra é um palíndromo.
function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    if (word === reversedWord) {
        return true;
    } else {
        return false;
    }
}

// 5. Verificar se dois números são iguais.
function areEqual(num1, num2) {
    if (num1 === num2) {
        return true;
    } else {
        return false;
    }
}

// 6. Verificar se um número é múltiplo de 3 ou 7.
function isMultipleOf3Or7(num) {
    if (num % 3 === 0 || num % 7 === 0) {
        return true;
    } else {
        return false;
    }
}

// 7. Verificar se uma string está vazia.
function isEmptyString(str) {
    if (str === "") {
        return true;
    } else {
        return false;
    }
}

// 8. Verificar se um ano é bissexto.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// 9. Verificar se uma letra é uma vogal.
function isVowel(letter) {
    if (['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}

// 10. Verificar se um número é negativo.
function isNegative(num) {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
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
