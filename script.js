let money = 1000;
let colour = "not_selected";
let display_color;
let lost;
function updateMoneyDisplay() {
  document.getElementById("money").textContent = `Money: $${money}`;
}

function updateColourDisplayRed() {
  document.getElementById("colour").textContent = `Colour Selected: Red`;
  document.getElementById("red-button").style.borderColor = `gray`;
  document.getElementById("black-button").style.borderColor = `lightgray`;
}

function updateColourDisplayBlack() {
  document.getElementById("colour").textContent = `Colour Selected: Black`;
  document.getElementById("black-button").style.borderColor = `gray`;
  document.getElementById("red-button").style.borderColor = `lightgray`;
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

function red() {
  updateColourDisplayRed();
  colour = "red";
  lost = "black";
}

function black() {
  updateColourDisplayBlack();
  colour = "black";
  lost = "red";
  ``;
}

function spin() {
  amount = document.getElementById("bet-amount");
  if (amount.value == "") {
    alert("Enter Bet Below To Spin!");
  } else if (money == 0) {
    alert("You Lost, Plese Refresh To Start Playing Again.");
  } else if (money < amount.value) {
    alert("You Cannot Bet More Than Your Money!");
  } else if (colour == "not_selected") {
    alert("Please Select A Color To Bet On!");
  } else {
    let number = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    let remainder = number % 2;
    if (remainder == 0) {
      display_color = colour;
      alert("YOU WON $" + amount.value);
      addMoney(amount.value);
    } else {
      display_color = lost;
      alert("You Lost $" + amount.value);
      subtractMoney(amount.value);
    }
  }
}
