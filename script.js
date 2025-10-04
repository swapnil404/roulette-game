let money = 1000;

function updateMoneyDisplay() {
  document.getElementById("money").textContent = `Money: $${money}`;
}

function addMoney(amount) {
  money += parseInt(amount);
  updateMoneyDisplay();
}

function subtractMoney(amount) {
  if (money >= amount) {
    money -= amount;
    updateMoneyDisplay();
    return true;
  }
  return false;
}

function spin() {
  console.log("button");

  amount = document.getElementById("bet-amount");

  addMoney(amount.value);
}
