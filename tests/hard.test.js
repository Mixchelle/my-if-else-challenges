// tests/hard.test.js

const {
    isInAgeRange,
    isInList,
    isPrimaryColor,
    isOdd,
    containsOnlyLetters
} = require('../challenges/hard');

test('Teste isInAgeRange', () => {
    expect(isInAgeRange(25)).toBe(true);
    expect(isInAgeRange(19)).toBe(false);
});

test('Teste isInList', () => {
    expect(isInList(3, [1, 2, 3, 4, 5])).toBe(true);
    expect(isInList(6, [1, 2, 3, 4, 5])).toBe(false);
});

test('Teste isPrimaryColor', () => {
    expect(isPrimaryColor("red")).toBe(true);    
    expect(isPrimaryColor("blue")).toBe(true);   
    expect(isPrimaryColor("yellow")).toBe(true);  
    expect(isPrimaryColor("green")).toBe(false);  
    expect(isPrimaryColor("purple")).toBe(false); 
});

test('Teste isOdd', () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(4)).toBe(false);
});

test('Teste containsOnlyLetters', () => {
    expect(containsOnlyLetters("Hello")).toBe(true);
    expect(containsOnlyLetters("Hello123")).toBe(false);
});
