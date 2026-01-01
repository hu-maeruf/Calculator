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

let firstNumber = null;
let operator = null;
let input = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let clickedButton = btn.textContent;

        if(!isNaN(clickedButton)) {
            input += clickedButton;
            display.textContent = input;
            if (flag && firstNumber !== "") {
                firstNumber = "";
                secondNumber = null;
                flag = false;
            }
        } else if (clickedButton === "+" || clickedButton === "-" || clickedButton === "*" || clickedButton === "/") { 
            if (firstNumber !== ""){
                calculate();
                operator = clickedButton;
                flag = false;
            } else {
                firstNumber = Number(input);
                operator = clickedButton;
                input = "";
            }

        } else if (clickedButton === "=") {
            if (secondNumber === null) {
                calculate();
                flag = true;
            } else if (!isNaN(secondNumber)){
                const result = operate(firstNumber, operator, secondNumber);
                display.textContent = result;
                firstNumber = result;
            }

        } else if (clickedButton === "Clear") {
            clearDisplay();
        }
    });
});


function clearDisplay() {
    firstNumber = null;
    operator = null;
    input = "";
    display.textContent = 0;
};

function calculate() {
    if (firstNumber === null || input === "" || operator === null) {
        return;
    }
    const secondNumber = Number(input);
    const result = operate(firstNumber, operator, secondNumber);
    if (result ===null) {
        alert("Can't divide by zero")
        clearDisplay();
        return;
    }
    display.textContent = result;
    firstNumber = result;
    input = "";
}