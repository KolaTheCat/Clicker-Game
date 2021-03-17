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
  money.innerText = moneyValue;
}, 1000);

function AddMulti(value) {
  multValue += value;
}

function AddTouch(value) {
  touchValue += value;
}
