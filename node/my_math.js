const PI = 3.14;

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
} 

function divide(x, y){
    if(y == 0){
        return null;
    }
    return x / y;
}

module.exports = {
    pi: PI,
    add: add,
    multiply: multiply,
    divide: divide,
    subtract: subtract
}