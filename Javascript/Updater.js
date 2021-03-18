class Updater extends Observer {
  constructor() {
    super()
  }

  Update(observable) {
    money.innerText = FormatValue(moneyValue);
    mult.innerText = multValue.toFixed(2);
    
    multipliers.forEach(multiplier => {
      document.getElementById(`cost_helper_${multiplier.id}`).innerText = `Costs: ${FormatValue(multiplier.cost)}`;
    })

    upgrades.forEach(upgrade => {
      document.getElementById(`cost_upgrade_${upgrade.id}`).innerText = `Costs: ${FormatValue(upgrade.cost)}`;
    })

  }
}
