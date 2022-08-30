import Vehicle from "./Vehicle.js";

class M5 extends Vehicle {

  constructor(color) {
    super('BMW', 'M5', color);
    this.hp = 616;
  }

  showStats() {
    console.log(
      `My ${this.color} BMW M5 with a 4.4L V8 Twin Turbo engine packin ${this.hp}HP and and 553 lb-ft TQ with ${this.miles} miles.`
    );
  }

}

export default M5;