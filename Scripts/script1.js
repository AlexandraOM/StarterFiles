const numberButton = document.querySelectorAll("[data-number]");
const actionButton = document.querySelectorAll("[data-action]");
const decimalButton = document.querySelector;
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");

const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const keys = document.querySelectorAll("button");

const action = keys.dataset.action;

keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    if (!action) {
      console.log("number key!");
    }
  }
});

// keys.onclick = function() {
//   if (!action) {
//     console.log("number key!");
//   }
// };

numberButton.onclick = function() {};
