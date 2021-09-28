const {stringLenght, reverseString, Calculator, capitalize} = require("./main")

describe("String Lenghts", () => {
    test("Lenght for Hello", () => {
        expect(stringLenght("Hello")).toBe(5)
    })
    
    // Error handling in tests needs to be done with a wrapping function
    test("Long String", () => {
        expect(() => stringLenght("asdasdasdasdasdasdasdasdasd")).toThrow("The message is not in between the required")
    })
    
    test("Short String", () => {
        expect(stringLenght("a")).toBe(1)
    })
    
    test("No String", () => {
        expect(() => stringLenght("")).toThrow("The message is not in between the required")
    })
})

describe("Reverse Strings", () => {
    test("Hello", () => {
        expect(reverseString("Hello")).toBe("olleH")
    })
})

describe.each([
    {num1: 1, num2: 1, addExpected: 2, subExpected: 0, divExpected: 1, mulExpected: 1},
    {num1: 2, num2: 1, addExpected: 3, subExpected: 1, divExpected: 2, mulExpected: 2},
    {num1: 10, num2: -20, addExpected: -10, subExpected: 30, divExpected: 10/-20, mulExpected: -200},
    //{num1: 3, num2: 6, addExpected: this.num1+this.num2, subExpected: this.num1 - this.num2, divExpected: this.num1 / this.num2, mulExpected: this.num1 * this.num2} This Doesn't Work
])('Calculator for $num1 and $num2', ({num1, num2, operation, addExpected, subExpected, divExpected, mulExpected}) => {
    const Calc = new Calculator(num1, num2)
    test(`Addition ${num1} + ${num2}`, () => {
        //expect(Calc.add()).toBe(addExpected)
        expect(Calc.add()).toBe(num1 + num2) // This is a way of doing it while saving a bunch of time writing those big test cases
    })
    test(`Substraction ${num1} - ${num2}`, () => {
        expect(Calc.substract()).toBe(subExpected)
    })
    test(`Division ${num1} / ${num2}`, () => {
        expect(Calc.divide()).toBe(divExpected)
    })
    test(`Multiplication ${num1} * ${num2}`, () => {
        expect(Calc.multiply()).toBe(mulExpected)
    })
})


describe("Capiutalize", () => {
    test("Capitalized", () => {
        expect(capitalize("Hello")).toBeTruthy();
    })
    test("Not Capitalized", () => {
        expect(capitalize("hello")).toBeFalsy();
    })
})