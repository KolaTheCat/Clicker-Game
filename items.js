let helpers = document.getElementById("helpers");
let upgrades = document.getElementById("upgrades");
let multItems = [
  {
    name: "Multiplier 1",
    value: 0.02,
    buy: 20,
  },
  {
    name: "Multiplier 2",
    value: 2,
    buy: 400,
  },
  {
    name: "Multiplier 3",
    value: 4,
    buy: 1800,
  },
  {
    name: "Multiplier 4",
    value: 9,
    buy: 50000,
  },
  {
    name: "Under Development",
    value: 0.61,
    buy: 610,
  },
  {
    name: "Under Development",
    value: 1.25,
    buy: 2500,
  },
];
let touchItems = [
  {
    name: "Upgrade 1",
    value: 0.07,
    buy: 1000,
  },
  {
    name: "Upgrade 2",
    value: 5,
    buy: 5000,
  },
  {
    name: "Upgrade 3",
    value: 13,
    buy: 13000,
  },
  {
    name: "Upgrade 4",
    value: 29,
    buy: 29000,
  },
  {
    name: "Upgrade 5",
    value: 61,
    buy: 61000,
  },
  {
    name: "Upgrade 6",
    value: 125,
    buy: 125000,
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
