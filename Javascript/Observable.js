class Observable {
  constructor() {
    this.observers = [];
  }

  Subscribe(observer) {
    this.observers.push(observer);
  }

  Unsubscribe(observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  Notify() {
    console.log(this);
    this.observers.forEach((observer) => observer.Update(this));
  }
}
