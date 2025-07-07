// Greet a user by name
function greet(name) {
    return "Hello, " + name + "!";
}

// Add two numbers and return the sum
function sum(number1, number2) {
    return number1 + number2;
}

// Find the maximum between two numbers
function findMax(num1, num2) {
    return Math.max(num1, num2);
}

// Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Check if the inputted day is Tuesday
function isItTacoTuesday(day) {
    if (day === 'Tuesday') {
        return "Yay! It's taco tuesday!";
    } else {
        return "No tacos today :(";
    }
}

// Check if your crush loves you or not using number of petals
function loveChecker(numPetals) {
    if (numPetals % 2 === 1) {
        return "They love me";
    } else {
        return "They love me not";
    }
}
