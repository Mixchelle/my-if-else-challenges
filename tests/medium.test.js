// tests/medium.test.js

const {
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
} = require('../challenges/medium');

test('Teste greeting', () => {
    expect(greeting(9)).toBe("Bom dia");
    expect(greeting(15)).toBe("Boa tarde");
    expect(greeting(20)).toBe("Boa noite");
});

test('Teste isPerfectSquare', () => {
    expect(isPerfectSquare(16)).toBe(true);
    expect(isPerfectSquare(20)).toBe(false);
});

test('Teste canDrive', () => {
    expect(canDrive(18, true)).toBe(true);
    expect(canDrive(17, false)).toBe(false);
});

test('Teste isPalindrome', () => {
    expect(isPalindrome("arara")).toBe(true);
    expect(isPalindrome("banana")).toBe(false);
});

test('Teste areEqual', () => {
    expect(areEqual(5, 5)).toBe(true);
    expect(areEqual(5, 10)).toBe(false);
});

test('Teste isMultipleOf3Or7', () => {
    expect(isMultipleOf3Or7(21)).toBe(true);
    expect(isMultipleOf3Or7(8)).toBe(false);
});

test('Teste isEmptyString', () => {
    expect(isEmptyString("")).toBe(true);
    expect(isEmptyString("Hello")).toBe(false);
});

test('Teste isLeapYear', () => {
    expect(isLeapYear(2020)).toBe(true);
    expect(isLeapYear(2021)).toBe(false);
});

test('Teste isVowel', () => {
    expect(isVowel("a")).toBe(true);
    expect(isVowel("b")).toBe(false);
});

test('Teste isNegative', () => {
    expect(isNegative(-5)).toBe(true);
    expect(isNegative(5)).toBe(false);
});
