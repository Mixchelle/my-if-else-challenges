// tests/easy.test.js

const {
    isPositive,
    isEven,
    isBetween10And50,
    canVote,
    hasMoreThanFiveChars,
    maxOfTwoNumbers,
    minOfThreeNumbers,
    startsWithA,
    isInInterval,
    isDivisibleBy5
} = require('../challenges/easy');

test('Teste isPositive', () => {
    expect(isPositive(10)).toBe(true);
    expect(isPositive(-5)).toBe(false);
});

test('Teste isEven', () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(3)).toBe(false);
});

test('Teste isBetween10And50', () => {
    expect(isBetween10And50(30)).toBe(true);
    expect(isBetween10And50(5)).toBe(false);
});

test('Teste canVote', () => {
    expect(canVote(18)).toBe(true);
    expect(canVote(16)).toBe(false);
});

test('Teste canAcceptPassengers', () => {
    expect(canAcceptPassengers(0)).toBe("O número de passageiros deve ser pelo menos 1."); // Menos que 1
    expect(canAcceptPassengers(1)).toBe(true);  // 1 passageiro
    expect(canAcceptPassengers(2)).toBe(true);  // 2 passageiros
    expect(canAcceptPassengers(3)).toBe(true);  // 3 passageiros
    expect(canAcceptPassengers(4)).toBe(true);  // 4 passageiros
    expect(canAcceptPassengers(5)).toBe(false); // Mais que 4 passageiros
    expect(canAcceptPassengers(-1)).toBe("O número de passageiros deve ser pelo menos 1."); // Número negativo
});
test('Teste maxOfTwoNumbers', () => {
    expect(maxOfTwoNumbers(10, 20)).toBe(20);
    expect(maxOfTwoNumbers(30, 10)).toBe(30);
});

test('Teste minOfThreeNumbers', () => {
    expect(minOfThreeNumbers(1, 2, 3)).toBe(1);
    expect(minOfThreeNumbers(5, 2, 8)).toBe(2);
});

test('Teste startsWithA', () => {
    expect(startsWithA("Apple")).toBe(true);
    expect(startsWithA("Banana")).toBe(false);
});

test('Teste isInInterval', () => {
    expect(isInInterval(25, 10, 30)).toBe(true);
    expect(isInInterval(5, 10, 30)).toBe(false);
});

test('Teste isDivisibleBy5', () => {
    expect(isDivisibleBy5(10)).toBe(true);
    expect(isDivisibleBy5(7)).toBe(false);
});
