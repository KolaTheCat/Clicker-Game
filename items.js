let helpers = document.getElementById("helpers");
let upgrades = document.getElementById("upgrades");
let multItems = [
  {
    name: "Multiplier 1",
    value: 0.01,
    buy: 20,
  },
  {
    name: "Multiplier 2",
    value: 0.05,
    buy: 100,
  },
  {
    name: "Multiplier 3",
    value: 0.13,
    buy: 260,
  },
  {
    name: "Multiplier 4",
    value: 0.29,
    buy: 580,
  },
  {
    name: "Multiplier 5",
    value: 0.61,
    buy: 610,
  },
  {
    name: "Multiplier 6",
    value: 1.25,
    buy: 2500,
  },
  {
    name: "Multiplier 7",
    value: 2.53,
    buy: 5060,
  },
  {
    name: "Multiplier 8",
    value: 5.09,
    buy: 10180,
  },
  {
    name: "Multiplier 9",
    value: 10.21,
    buy: 20420,
  },
  {
    name: "Multiplier 10",
    value: 20.45,
    buy: 40900,
  },
];
let touchItems = [
  {
    name: "Touch 1",
    value: 1,
    buy: 10,
  },
  {
    name: "Touch 2",
    value: 5,
    buy: 50,
  },
  {
    name: "Touch 3",
    value: 13,
    buy: 130,
  },
  {
    name: "Touch 4",
    value: 29,
    buy: 290,
  },
  {
    name: "Touch 5",
    value: 61,
    buy: 610,
  },
  {
    name: "Touch 6",
    value: 125,
    buy: 1250,
  },
  {
    name: "Touch 7",
    value: 253,
    buy: 2530,
  },
  {
    name: "Touch 8",
    value: 509,
    buy: 5090,
  },
  {
    name: "Touch 9",
    value: 1021,
    buy: 10210,
  },
  {
    name: "Touch 10",
    value: 2045,
    buy: 20450,
  },
];

multItems.forEach(({ name, value, buy }, item) => {
  var li = document.createElement("li");

  li.innerHTML = `
        <button id="helper_${item}" onclick="AddMulti(${value}, ${buy}, ${item})">
            <p>${name}</p>
            <p id="cost_helper_${item}">Costs: ${FormatValue(buy)}</p>
        </button>
    `;
  helpers.appendChild(li);
});

touchItems.forEach(({ name, value, buy }, item) => {
  var li = document.createElement("li");

  li.innerHTML = `
        <button id="upgrade_${item}" onclick="AddTouch(${value}, ${buy}, ${item})">
            <p>${name}</p>
            <p id="cost_upgrade_${item}">Costs: ${FormatValue(buy)}</p>
        </button>
    `;

  upgrades.appendChild(li);
});
