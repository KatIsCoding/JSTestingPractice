const stringLenght = (string) =>{
    if (string.length >= 1 && string.length < 10){
        return string.length
    } else {
        throw new Error("The message is not in between the required")
    }
}

const reverseString = (string) => {
    return string.split("").reverse().join("")
}

class Calculator {
    constructor(num1, num2){
        this.a = num1
        this.b = num2
    }
    add() {
        return this.a + this.b
    }
    substract() {
        return this.a - this.b
    }
    divide() {
        return this.a / this.b
    }
    multiply() {
        return this.a * this.b
    }
}

const capitalize = (string) => {
    return string[0] === string[0].toUpperCase()
}

module.exports = {stringLenght, reverseString, Calculator, capitalize}