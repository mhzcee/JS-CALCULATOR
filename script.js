alert("Basic Arithmetic Calculator. Enter the appropriate parameters. This calculator perform operations between 2 numbers.");



function add(a, b) {
    alert("Result: "+ (a) + " + " + (b) + " = " + (a + b));
}
function subtract(a, b) {
    alert("Result: "+ (a) + " - " + (b) + " = " + (a - b));
}
function divide(a, b) {
    alert("Result: " + (a) + " / " + (b) + " = " + (a / b));
}
function multiply(a, b) {
    alert("Result: "+ (a) + " * " + (b) + " = " + (a * b));
}


function calculate(a, b, operation) {
    if (operation == "+") {
        add(a, b);
    } else if (operation == "-") {
        subtract(a, b);
    } else if (operation == "/") {
        divide(a, b);
    } else if (operation == "*") {
        multiply(a, b);
    } else {
        alert("Please enter a valid operation.");
    }
}

let a = parseFloat(prompt("Please enter the first number: "));
let b = parseFloat(prompt("Please enter the second number: "));
let operation = prompt("Please enter the operation you would like to perform: add +, subtract -, divide /, multiply * ");

calculate(a, b, operation);

