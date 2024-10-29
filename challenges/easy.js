// challenges/easy.js

// 1. Verificar se um número é positivo.
function isPositive(num) {
    // Retorna true se num for maior que 0, caso contrário retorna false
    if (num > 0) {
        return true;
    } else {
        return false;
    }
}

// 2. Verificar se um número é par.
function isEven(num) {
    // Um número é par se o resto da divisão por 2 for igual a 0
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// 3. Verificar se um número está entre 10 e 50.
function isBetween10And50(num) {
    // Retorna true se num estiver entre 10 e 50 (inclusive)
    if (num >= 10 && num <= 50) {
        return true;
    } else {
        return false;
    }
}

// 4. Determinar se uma pessoa pode votar (idade >= 18).
function canVote(age) {
    // Retorna true se a idade for 18 ou mais, caso contrário retorna false
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// 5. Função que verifica se um carro pode aceitar um número específico de passageiros
function canAcceptPassengers(numPassengers) {
    // Aceita até 4 passageiros
    if (numPassengers < 1) {
        return "O número de passageiros deve ser pelo menos 1.";
    } else if (numPassengers > 4) {
        return false; // Não aceita mais de 4 passageiros
    } else {
        return true; // Aceita entre 1 e 4 passageiros
    }
}


// 6. Retornar o maior entre dois números.
function maxOfTwoNumbers(num1, num2) {
    // Retorna num1 se for maior que num2, senão retorna num2
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// 7. Retornar o menor entre três números.
function minOfThreeNumbers(num1, num2, num3) {
    // Inicializa a variável menor com o primeiro número
    let min = num1;
    // Compara com num2
    if (num2 < min) {
        min = num2;
    }
    // Compara com num3
    if (num3 < min) {
        min = num3;
    }
    return min; // Retorna o menor
}

// 8. Verificar se uma palavra começa com "A".
function startsWithA(word) {
    // Retorna true se a palavra começar com 'A' (case insensitive)
    if (word.charAt(0).toUpperCase() === 'A') {
        return true;
    } else {
        return false;
    }
}

// 9. Verificar se um número está dentro de um intervalo.
function isInInterval(num, start, end) {
    // Retorna true se num estiver entre start e end (inclusive)
    if (num >= start && num <= end) {
        return true;
    } else {
        return false;
    }
}

// 10. Verificar se um número é divisível por 5.
function isDivisibleBy5(num) {
    // Um número é divisível por 5 se o resto da divisão por 5 for igual a 0
    if (num % 5 === 0) {
        return true;
    } else {
        return false;
    }
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
