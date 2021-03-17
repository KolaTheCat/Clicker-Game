let helpers = document.getElementById("helpers");
let upgrades = document.getElementById("upgrades");
let multItems = [
  {
    name: "Multiplier +0.25",
    value: 0.25,
    buy: 10,
  },
  {
    name: "Multiplier +5",
    value: 5,
    buy: 50,
  },
  {
    name: "Multiplier +25",
    value: 25,
    buy: 250,
  },
  {
    name: "Multiplier +125",
    value: 125,
    buy: 1250,
  },
  {
    name: "Multiplier +625",
    value: 625,
    buy: 6250,
  },
  {
    name: "Multiplier +3125",
    value: 3125,
    buy: 31250,
  },
  {
    name: "Multiplier +15625",
    value: 15625,
    buy: 156250,
  },
  {
    name: "Multiplier +78125",
    value: 78125,
    buy: 781250,
  },
  {
    name: "Multiplier +390625",
    value: 390625,
    buy: 3906250,
  },
  {
    name: "Multiplier +1953125",
    value: 1953125,
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
