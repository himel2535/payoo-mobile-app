const validPin = 1234;
const validAccount = 1234567890;

// -- add money feature -- >

function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

// to get inner text-->
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}

// to set inner text-->

function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

// function to toggle-->
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
    document.getElementById(id).style.display = "block";
  }
}

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bank = getInputValue("bank");

    const accountNumber = getInputValueNumber("account-number");

    const amount = getInputValueNumber("add-amount");

    const pin = getInputValueNumber("add-pin");

    const availableBalance = getInnerText("available-balance");

    if (pin !== validPin || accountNumber !== validAccount) {
      alert("your pin or account is invalid");
      return;
    }

    const totalAvailableBalance = amount + availableBalance;

    setInnerText(totalAvailableBalance);
  });

//   cash out feature-->

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const pin = getInputValueNumber("pin-2");

  const accountNumber = getInputValueNumber("account-number-2");

  const amount = getInputValueNumber("withdraw-amount");

  const availableBalance = getInnerText("available-balance");

  if (pin !== validPin || accountNumber !== validAccount) {
    alert("your pin or account number is invalid");
    return;
  }

  const totalAvailableBalance = availableBalance - amount;

  setInnerText(totalAvailableBalance);
});

//   toggling feature---->

document.getElementById("add-button").addEventListener("click", function () {
  handleToggle("add-money-parent");
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");
  });

document
  .getElementById("transfer-money-button")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");
  });

document
  .getElementById("get-bonus-button")
  .addEventListener("click", function () {
    handleToggle("get-bonus-parent");
  });
