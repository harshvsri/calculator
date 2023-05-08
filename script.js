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

let firstNum = "";
let secondNum = "";
let operator = "";
let res = "";
const display = document.querySelector(".display");
const result = document.createElement("p");
result.classList.add("result");
result.innerText = res;
display.appendChild(result);

const buttons = document.querySelectorAll(".button");
let eqn = "";
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const pressed = event.target.innerText;
    res += pressed;
    eqn += pressed;
    console.log(eqn);
  });
});
