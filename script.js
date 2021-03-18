let money = document.getElementById("money");
let touch = document.getElementById("touch");
let mult = document.getElementById("multi");
let btn = document.getElementById("btn");
let item = document.getElementById("item");

var touchValue = 1;
var multValue = 0;
var moneyValue = 0;
var multcont = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
};
var touchcont = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
};

const additive = 0.25;
const achieviment = [
  {
    Nome: "Achivement 1",
    When: 100,
    Received: false,
    Upgrade: 1,
  },
  {
    Nome: "Achivement 2",
    When: 1000,
    Received: false,
    Upgrade: 10,
  },
  {
    Nome: "Achivement 3",
    When: 10000,
    Received: false,
    Upgrade: 100,
  },
  {
    Nome: "Achivement 4",
    When: 100000,
    Received: false,
    Upgrade: 1000,
  },
  {
    Nome: "Achivement 5",
    When: 1000000,
    Received: false,
    Upgrade: 10000,
  },
  {
    Nome: "Achivement 6",
    When: 10000000,
    Received: false,
    Upgrade: 100000,
  },
];

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

  for (let i = 0; i <= 5; i++) {
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
    // let moneyRegex = parseInt(
    //   money.innerText
    //     .split(/[A-z\:]/)
    //     .join("")
    //     .split(/[R\$]/)
    //     .join("")
    //     .split(/[.][0-9]+$/)
    //     .join("")
    //     .split(/\,/)
    //     .join("")
    //     .trim()
    // );

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

  for (let a = 0; a <= 5; a++) {
    if (achieviment[a].When <= moneyRegex && achieviment[a].Received == false) {
      touchValue += achieviment[a].Upgrade;
      achieviment[a].Received = true;
      alert(`${achieviment[a].Nome}: You reach ${achieviment[a].When}`);
      alert(`Your touch was upgraded to ${achieviment[a].Upgrade}`);
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
    multcont[id] += 1;
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
    multValue += value * multcont[id];
    moneyValue -= buy;
    touchcont[id] += 1;
    document
      .getElementById(`upgrade_${id}`)
      .setAttribute("onclick", `AddTouch(${value}, ${buy / additive}, ${id})`);
    document.getElementById(
      `cost_upgrade_${id}`
    ).innerText = `Costs: ${FormatValue(buy / additive)}`;
  }
}

let achievements = document.getElementById("achievements");
achieviment.forEach((item) => {
  let li = document.createElement("li");
  let rec = item.Received ? "Received" : "Not Received";

  li.innerHTML = `
    <button>
      <p>${item.Nome}</p>
      <p>You receive when reach $${item.When}</p>
      <p>You get ${item.Upgrade} of touch points</p>
      <p>Status: ${rec}</p>
    </button>
  `;

  achievements.appendChild(li);
});
