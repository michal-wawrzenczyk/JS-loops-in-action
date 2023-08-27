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
