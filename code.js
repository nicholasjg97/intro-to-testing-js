// helloWorld function 
const helloWorld = function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    return input === true || input === false ? 'Hello, World!' : "Hello, " + input + "!";

}

function isFive(input) {
    return input == 5;
}

function isEven(input) {
    return input === false ? false : input % 2 === 0;
}

function isVowel (input) {
    switch (input) {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
}

function add(input1, input2) {
    return parseFloat(input1) + parseFloat(input2);
}