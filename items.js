let helpersElement = document.getElementById("helpers");
let upgradesElement = document.getElementById("upgrades");

const multipliers = multipliersJSON.map(
  ({ name, value, cost }, i) => new Item(name, value, cost, i)
);

const upgrades = upgradesJSON.map(
  ({ name, value, cost }, i) => new Item(name, value, cost, i)
);

multipliers.forEach((multiplier) => {
  var li = document.createElement("li");

  var btn = document.createElement("button");
  btn.id = `helper_${multiplier.id}`;

  var p1 = document.createElement("p");
  p1.id = `helper_${multiplier.id}_name`;
  p1.innerText = `${multiplier.name}`;

  var p2 = document.createElement("p");
  p2.id = `cost_helper_${multiplier.id}`;
  p2.innerText = `Costs: ${FormatValue(multiplier.cost)}`;

  btn.appendChild(p1);
  btn.appendChild(p2);

  btn.addEventListener("click", e => {
    multiplier.Add()
  })

  li.appendChild(btn);

  helpersElement.appendChild(li);
});

upgrades.forEach((upgrade) => {
  var li = document.createElement("li");

  var btn = document.createElement("button");
  btn.id = `upgrade_${upgrade.id}`;

  var p1 = document.createElement("p");
  p1.id = `upgrade_${upgrade.id}_name`;
  p1.innerText = `${upgrade.name}`;

  var p2 = document.createElement("p");
  p2.id = `cost_upgrade_${upgrade.id}`;
  p2.innerText = `Costs: ${FormatValue(upgrade.cost)}`;

  btn.appendChild(p1);
  btn.appendChild(p2);

  btn.addEventListener("click", e => {
    upgrade.Add()
  })

  li.appendChild(btn);

  upgradesElement.appendChild(li);
});
