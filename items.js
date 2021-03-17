let helpers = document.getElementById("helpers");
let upgrades = document.getElementById("upgrades");
let multItems = [
  {
    name: "Multiplier 1",
    value: 0.01,
    buy: 10,
  },
  {
    name: "Multiplier 2",
    value: 0.02,
    buy: 50,
  },
  {
    name: "Multiplier 3",
    value: 0.05,
    buy: 250,
  },
  {
    name: "Multiplier 4",
    value: 0.01,
    buy: 1250,
  },
  {
    name: "Multiplier 5",
    value: 0.02,
    buy: 6250,
  },
  {
    name: "Multiplier 6",
    value: 0.05,
    buy: 31250,
  },
  {
    name: "Multiplier 7",
    value: 0.075,
    buy: 156250,
  },
  {
    name: "Multiplier 8",
    value: 0.0125,
    buy: 781250,
  },
  {
    name: "Multiplier 9",
    value: 0.015,
    buy: 3906250,
  },
  {
    name: "Multiplier 10",
    value: 0.0175,
    buy: 19531250,
  },
];
let touchItems = [
  {
    name: "Touch +2",
    value: 10,
    buy: 10,
  },
];

multItems.forEach(({ name, value, buy }) => {
  var li = document.createElement("li");

  li.innerHTML = `
        <button onclick="AddMulti(${value}, ${buy})">
            <p>${name}</p>
            <p>Costs: ${buy}</p>
        </button>
    `;

  helpers.appendChild(li);
});

touchItems.forEach(({ name, value, buy }) => {
  var li = document.createElement("li");

  li.innerHTML = `
          <button onclick="AddTouch(${value}, ${buy})">
            <p>${name}</p>
            <p>Costs: ${buy}</p>
          </button>
      `;

  upgrades.appendChild(li);
});
