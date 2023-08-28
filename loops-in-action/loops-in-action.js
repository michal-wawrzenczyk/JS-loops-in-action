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

// Highlight links - "for of" loop

const highlightLinksBtnElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  // get access to all anchor elements (querySelectorAll returns an array)
  const anchorElements = document.querySelectorAll("#highlight-links a");

  // style each anchor by using "for of" loop
  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksBtnElement.addEventListener("click", highlightLinks);

// Display user data - "for in" loop

const dummyUserData = {
  firstName: "Michał",
  lastName: "Wawrzeńczyk",
  age: 28,
};

const displayUserDataBtnElement = document.querySelector("#user-data button");

function displayUserData() {
  // get access to <ul>
  const ulElement = document.getElementById("output-user-data");

  // remove all exisiting <li> from <ul> before we create and add new one with help of the 'for in' loop.
  ulElement.textContent = "";

  // add list items to the <ul> (one <li> to each property inside the object with data)
  // helper variable (const key/propertyName)
  for (const key in dummyUserData) {
    // create list item <li>
    const newUserDataListItemElement = document.createElement("li");
    // store the output text (dynamically access the value of each property of data object)
    const outputText = key.toUpperCase() + ": " + dummyUserData[key];
    // set the text content for each list item
    newUserDataListItemElement.textContent = outputText;
    // append each <li> to the <ul> element
    ulElement.append(newUserDataListItemElement);
  }
}

displayUserDataBtnElement.addEventListener("click", displayUserData);

// Statistics / Roll the 1-6 dice - "while" loop

const rollDiceBtnElement = document.querySelector("#statistics button");

// function which will roll the dice (select random number)
function rollDice() {}

// main function after click on the button (output list of rolls)
function deriveNumberOfDiceRolls() {
  // get access to the input
  const targetNumberInputElement =
    document.getElementById("user-target-number");
  // get/extract the entered number
  const enteredNumber = +targetNumberInputElement.value; // value type: number (as converted string)
  // get access to the <ul> list
  const diceRollsListElement = document.getElementById("dice-rolls");
  // clear any <li> from <ul> with every click on a button
  diceRollsListElement.innerHTML = "";

  // create a variable BEFORE the while loop (let, because it will receive new values)
  let hasRolledTargetNumber = false;
  // to keep track of number of rolls
  let numberOfRolls = 0;

  // keep on rolling numbers until we reach the entered number
  while (!hasRolledTargetNumber) {
    // execute the rollDice function and store the number
    const rolledNumber = rollDice();
    // change number of rolls by 1
    // numberOfRolls = numberOfRolls + 1;
    // shorter:
    numberOfRolls++;

    // create list element
    const newRollListItemElement = document.createElement("li");
    // set textContent for the <li>
    const listItemOutputText = "Roll" + numberOfRolls + ": " + rolledNumber;
    newRollListItemElement.textContent = listItemOutputText;
    // append the <li>
    diceRollsListElement.append(newRollListItemElement);

    // check using "if"
    // if (rolledNumber === enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    // or shorter:
    hasRolledTargetNumber = rolledNumber === enteredNumber; // boolean: true/false
  }

  // show some statistics
  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumberElement = document.getElementById(
    "output-target-number"
  );

  // set the textContent
  outputTargetNumberElement.textContent = enteredNumber.toString();
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceBtnElement.addEventListener("click", deriveNumberOfDiceRolls);
