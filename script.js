let money = document.getElementById("money");
let touch = document.getElementById("touch");
let mult = document.getElementById("multi");
let btn = document.getElementById("btn");
let item = document.getElementById("item");

var touchValue = 1;
var multValue = 0;
var moneyValue = 0;

const additive = 0.25;

btn.addEventListener("click", () => {
  moneyValue += touchValue;
  money.innerText = moneyValue.toFixed(2);
});

setInterval(() => {
  moneyValue += multValue;
  money.innerText = moneyValue.toFixed(2);
  mult.innerText = multValue;
  touch.innerText = touchValue;
}, 1000);

function AddMulti(value, buy, id) {
  if (moneyValue >= buy) {
    multValue += value;
    moneyValue -= buy;
    // console.log([document.getElementById(id), id]);
    document
      .getElementById(id)
      .setAttribute("onclick", `AddMulti(${value}, ${buy / additive}, ${id})`);
    document.getElementById(`cost_helper_${id}`).innerText = `Costs: ${(
      buy / additive
    ).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })}`;
  }
}

function AddTouch(value, buy) {
  if (moneyValue >= buy) {
    touchValue += value;
    moneyValue -= buy;
  }
}
