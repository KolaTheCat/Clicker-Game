class Item extends Observable {
  constructor(name, value, cost, id) {
    // Props:
    super();
    this.name = name;
    this.value = value;
    this.cost = cost;
    this.oldCost = cost;
    this.id = id;
  }

  Add() {
    console.log(`CHAMADO ADD DO ITEM [${this.id}] | NAME [${this.name}]`);
    if (moneyValue >= this.cost) {
      moneyValue -= this.cost;
      multValue += this.value;
      multcont[this.id] += 1;

      let oldCost = this.cost;

      this.cost += this.oldCost;
      this.oldCost = oldCost;

      this.Notify();
    }
  }
}
