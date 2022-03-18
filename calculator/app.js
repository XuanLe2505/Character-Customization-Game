let display = document.querySelector("#display");
let num1 = "";
let num2 = "";
let operator = null;
let result;
let haveDot = false;

const calculate = (num1, num2) => {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (operator === "+") {
    result = num1 + num2;
  }
  if (operator === "-") {
    result = num1 - num2;
  }
  if (operator === "/") {
    result = num1 / num2;
  }
  if (operator === "*") {
    result = num1 * num2;
  }
  display.textContent = result;
};

const clearCalc = () => {
  (num1 = ""),
    (num2 = ""),
    (operator = null),
    (display["innerHTML"] = "");
  haveDot = false;
};

const del = () => {
    display["innerHTML"] = "";
    num2 = "";
    result = 0;
};

const handleBtnClick = (e) => {
  if (e.target.innerText === "." && !haveDot) {
    haveDot = true;
  } else if (e.target.innerText === "." && haveDot) {
    return;
  }
  
  if (operator) {
    num2 += e.target.innerText;
    display.textContent = num2;
  } else {
    num1 += e.target.innerText;
    display.textContent = num1;
  }
};;

const handleOperatorClick = (e) => {
    haveDot = false;
  if (e.target.innerText === "=") {
    calculate(num1, num2);
    num1 = result;
    num2 = "";
    operator = e.target.innerText;
  } else if (operator && num2) {
    calculate(num1, num2);
    operator = e.target.innerText;
    num1 = result;
    num2 = "";
  } else if (e.target.innerText != isNaN) {
    operator = e.target.innerText;
    result = 0;
  }
};

const btnNumber = document.querySelectorAll(".number");
btnNumber.forEach((btnNumber) =>
  btnNumber.addEventListener("click", handleBtnClick)
);

const btnOperator = document.querySelectorAll(".operator");
btnOperator.forEach((btnOperator) =>
  btnOperator.addEventListener("click", handleOperatorClick)
);

const btnClear = document.querySelector(".clear");
btnClear.addEventListener("click", clearCalc);

const btnDel = document.querySelector(".del");
btnDel.addEventListener("click", del);
