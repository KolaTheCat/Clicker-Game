let list = document.getElementById("list");
let multItems = [
  {
    name: "Multiplier +0.25",
    value: 0.25,
    buy: 10,
  },
];
let touchItems = [
  {
    name: "Touch +10",
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

  list.appendChild(li);
});

touchItems.forEach(({ name, value, buy }) => {
  var li = document.createElement("li");

  li.innerHTML = `
          <button onclick="AddTouch(${value}, ${buy})">
            <p>${name}</p>
            <p>Costs: ${buy}</p>
          </button>
      `;

  list.appendChild(li);
});
