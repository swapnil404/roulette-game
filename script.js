let money = 1000;

function updateMoneyDisplay() {
  document.getElementById("money").textContent = `Money: $${money}`;
}

function addMoney(amount) {
  money += amount;
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
