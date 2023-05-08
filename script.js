//* DISPLAY
let clear = false;
let firstNum = 12;
let secondNum = 23;
let operator = "+";

if (clear) {
  res = 0;
}

let res = 0;
const display = document.querySelector(".display");
const calculationResult = document.createElement("p");
calculationResult.classList.add("calculation-result");
calculationResult.innerText = res;
display.appendChild(calculationResult);

//* BUTTONS
const buttonContainer = document.querySelector(".calculator .buttons");
const tokens = [
  "AC",
  "del",
  "^",
  "%",
  "7",
  "8",
  "9",
  "+",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "/",
  "0",
  ".",
  "=",
  "*",
];
for (let i = 0; i < tokens.length; i++) {
  const button = document.createElement("div");
  button.classList.add("button");
  button.innerText = tokens[i];
  buttonContainer.appendChild(button);
}
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const pressed = event.target.innerText;
    if (pressed == "AC") {
      clear = true;
    }
    if (pressed == "=") {
      val = operate(firstNum, secondNum, operator);
    }
    eqn += pressed;
    console.log(eqn);
  });
});

//* OPERATE FUNCTION
const operate = (num1, num2, operator) => {
  num1 = +num1;
  num2 = +num2;
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 + num2;
    case "*":
      return num1 + num2;
    case "/":
      return num1 + num2;
    case "^":
      return num1 ** num2;
    case "+":
      return num1 + num2;
    default:
      return "Maths Error";
  }
};
