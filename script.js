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
  money.innerText = FormatValue(moneyValue);
});

setInterval(() => {
  moneyValue += multValue;
  money.innerText = FormatValue(moneyValue);
  mult.innerText = multValue.toFixed(2);
  touch.innerText = touchValue;
}, 1000);

setInterval(() => {
  for (let i = 0; i <= 9; i++) {
    let cost_helper = parseInt(
      document
        .getElementById(`cost_helper_${i}`)
        .innerText.split(/[A-z\:]/)
        .join("")
        .split(/[R\$]/)
        .join("")
        .split(/[.][0-9]+$/)
        .join("")
        .split(/\,/)
        .join("")
        .trim()
    );
    let cost_upgrade = parseInt(
      document
        .getElementById(`cost_upgrade_${i}`)
        .innerText.split(/[A-z\:]/)
        .join("")
        .split(/[R\$]/)
        .join("")
        .split(/[.][0-9]+$/)
        .join("")
        .split(/\,/)
        .join("")
        .trim()
    );
    let moneyRegex = parseInt(
      money.innerText
        .split(/[A-z\:]/)
        .join("")
        .split(/[R\$]/)
        .join("")
        .split(/[.][0-9]+$/)
        .join("")
        .split(/\,/)
        .join("")
        .trim()
    );

    console.log([cost_helper, cost_upgrade, moneyRegex]);

    if (moneyRegex < cost_helper) {
      document.getElementById(`helper_${i}`).setAttribute("disabled", true);
    } else {
      document.getElementById(`helper_${i}`).removeAttribute("disabled");
    }
    if (moneyRegex < cost_upgrade) {
      document.getElementById(`upgrade_${i}`).setAttribute("disabled", true);
    } else {
      document.getElementById(`upgrade_${i}`).removeAttribute("disabled");
    }
  }
}, 1);

function FormatValue(string) {
  return string.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function AddMulti(value, buy, id) {
  if (moneyValue >= buy) {
    multValue += value;
    moneyValue -= buy;
    document
      .getElementById(`helper_${id}`)
      .setAttribute("onclick", `AddMulti(${value}, ${buy / additive}, ${id})`);
    document.getElementById(
      `cost_helper_${id}`
    ).innerText = `Costs: ${FormatValue(buy / additive)}`;
  }
}

function AddTouch(value, buy, id) {
  if (moneyValue >= buy) {
    touchValue += value;
    moneyValue -= buy;
    document
      .getElementById(`upgrade_${id}`)
      .setAttribute("onclick", `AddTouch(${value}, ${buy / additive}, ${id})`);
    document.getElementById(
      `cost_upgrade_${id}`
    ).innerText = `Costs: ${FormatValue(buy / additive)}`;
  }
}
