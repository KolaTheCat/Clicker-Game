let money = document.getElementById("money");
let touch = document.getElementById("touch");
let mult = document.getElementById("multi");
let btn = document.getElementById("btn");
let item = document.getElementById("item");

const updaterController = new Updater();

multipliers.forEach(multiplier => {
    multiplier.Subscribe(updaterController);
});
upgrades.forEach(upgrade => {
    upgrade.Subscribe(updaterController);
});