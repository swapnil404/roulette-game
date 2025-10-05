let money = 1000;
let colour = "not_selected";
let display_color;
let lost;

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

function red(){
  colour = "red";
  lost = "black";
}

function black(){
  colour = "black";
  lost="red";``
}

function spin() {
  amount = document.getElementById("bet-amount");
  let number =Math.floor(Math.random()*(10-1+1))+1;
  let remainder = number % 2;
  if (remainder == 0) {
    display_color= colour;
    addMoney(amount.value);
  } else {
    display_color= lost;
   subtractMoney(amount.value);
  }
}
