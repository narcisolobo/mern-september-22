class Vehicle {

  constructor(manufacturer, model, color) {
    this.miles = 0;
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
  }

  drive() {
    this.miles += 10;
    return this;
  }

  beep() {
    console.log('BEEP. I SAY, BEEP.');
    return this;
  }

  showStats() {
    console.log(
    `
    Manufacturer: ${this.manufacturer}
    Model: ${this.model}
    Miles: ${this.miles}
    Color: ${this.color}
    `)
    return this;
  }
}

export default Vehicle;