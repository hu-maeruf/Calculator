function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return Math.round((num1 / num2) * 100) / 100;
}


function operate(num1, sign, num2) {
    switch (sign) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            alert("Not the correct operation!")
            break;
    };
};

const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let input = "";


buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let clickedButton = btn.textContent;

        if(!isNaN(clickedButton)) {
            input += clickedButton;
            display.textContent = input;
        } else if (clickedButton === "+" || clickedButton === "-" || clickedButton === "*" || clickedButton === "/") {
            firstNumber = Number(input);
            operator = clickedButton;
            input = "";
        } else if (clickedButton === "=") {
            secondNumber = Number(input);
            const result = operate(firstNumber, operator, secondNumber);
            display.textContent = result;
            firstNumber = result;
            input = "";
            operator = "";
        } else if (clickedButton === "clear") {
            clearDisplay();
        };
    });
});


function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    input = "";
    display.textContent = 0;
}