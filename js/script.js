alert("JavaScript Connected!");

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "C") {
            expression = "";
            display.value = "";
        } 
        else if (value === "=") {
            try {
                expression = eval(expression).toString();
                display.value = expression;
            } catch {
                display.value = "Error";
                expression = "";
            }
        } 
        else {
            expression += value;
            display.value = expression;
        }
    });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
    if ("0123456789+-*/".includes(e.key)) {
        expression += e.key;
        display.value = expression;
    }

    if (e.key === "Enter") {
        try {
            expression = eval(expression).toString();
            display.value = expression;
        } catch {
            display.value = "Error";
            expression = "";
        }
    }

    if (e.key === "Backspace") {
        expression = expression.slice(0, -1);
        display.value = expression;
    }
});
