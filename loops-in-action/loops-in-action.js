// Calculator - "for" loop (sum numbers)

// Get access to the input, button, and paragraph element
const calcSumBtnElement = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number");
  // get access to the entered number by user
  const enteredNumber = userNumberInputElement.value;

  let sumUpToEnteredNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    // assign a new value:
    sumUpToEnteredNumber = sumUpToEnteredNumber + i;
  }

  const resultParagraphElement = document.getElementById("calculated-sum");
  resultParagraphElement.textContent = sumUpToEnteredNumber;
  resultParagraphElement.style.display = "block";
}

calcSumBtnElement.addEventListener("click", calculateSum);
