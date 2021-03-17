let money = document.getElementById("money");
let touch = document.getElementById("touch");
let mult = document.getElementById("multi");
let btn = document.getElementById("btn");
let item = document.getElementById("item");

var touchValue = 1;
var multValue = 1;
var moneyValue = 0;

btn.addEventListener("click", () => {
  moneyValue += touchValue;
  money.innerText = moneyValue;
});

setInterval(() => {
  moneyValue *= multValue;
  money.innerText = moneyValue.toFixed(0);
  mult.innerText = multValue;
  touch.innerText = touchValue;
}, 1000);

function AddMulti(value, buy) {
  if (moneyValue >= buy) {
    multValue += value;
    moneyValue -= buy;
  }
}

function AddTouch(value, buy) {
  if (moneyValue >= buy) {
    touchValue += value;
    moneyValue -= buy;
  }
}
