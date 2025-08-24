const validPin = 1234;
const validAccount = 1234567890;

// -- add money feature -- >

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bank = document.getElementById("bank").value;

    const accountNumber = parseInt(
      document.getElementById("account-number").value
    );

    const amount = parseInt(document.getElementById("add-amount").value);

    const pin = parseInt(document.getElementById("add-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (pin !== validPin || accountNumber !== validAccount) {
      alert("your pin or account is invalid");
      return;
    }

    const totalAvailableBalance = amount + availableBalance;

    document.getElementById("available-balance").innerText =
      totalAvailableBalance;
  });

//   cash out feature-->

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const pin = parseInt(document.getElementById("pin-2").value);

  const accountNumber = parseInt(
    document.getElementById("account-number-2").value
  );

  if(pin!==validPin || accountNumber!==validAccount){
    alert("your pin or account number is invalid")
  }

  const amount = parseInt(document.getElementById("withdraw-amount").value);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  const totalAvailableBalance = availableBalance - amount;

  document.getElementById("available-balance").innerText =
    totalAvailableBalance;
});

//   toggling feature---->

document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";

  document.getElementById("add-money-parent").style.display = "block";
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";

    document.getElementById("cash-out-parent").style.display = "block";
  });
