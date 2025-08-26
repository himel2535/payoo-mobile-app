const validPin = 1234;
const validAccount = 1234567890;

const transactionData = [];

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

// function to toggle buttons-->

function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
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

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
    console.log(transactionData);
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

  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
  console.log(transactionData);
});


// transaction feature-->

document
  .getElementById("transactions-button")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    transactionContainer.innerText = "";

    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
              <div class="flex justify-between items-center bg-white rounded-xl p-3 mt-4">
          <div class="flex items-center">
            <div class="rounded-full p-3 bg-[#f4f5f7] mx-3">
              <img src="media/assets/wallet1.png" alt="" />
            </div>
            <div>
              <h1>${data.name}</h1>
              <p>${data.date}</p>
            </div>
          </div>
          <div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      `;
      transactionContainer.appendChild(div);
    }
  });

//   toggling feature---->

document.getElementById("add-button").addEventListener("click", function () {
  handleToggle("add-money-parent");

  handleButtonToggle("add-button");
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");

    handleButtonToggle("cash-out-button");
  });

document
  .getElementById("transfer-money-button")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");

    handleButtonToggle("transfer-money-button");
  });

document
  .getElementById("get-bonus-button")
  .addEventListener("click", function () {
    handleToggle("get-bonus-parent");

    handleButtonToggle("get-bonus-button");
  });

document.getElementById("bill-button").addEventListener("click", function () {
  handleToggle("pay-bill-parent");

  handleButtonToggle("bill-button");
});

document
  .getElementById("transactions-button")
  .addEventListener("click", function () {
    handleToggle("transactions-parent");

    handleButtonToggle("transactions-button");
  });
