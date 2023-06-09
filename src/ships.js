class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.previousPort = null;
    this.currentPort = itinerary.ports[0];
    this.currentPort.addShip(this);
  }

  dock() {
    const ports = this.itinerary.ports;
    const previousPortIndex = ports.indexOf(this.previousPort);

    this.currentPort = ports[previousPortIndex + 1];

    this.currentPort.addShip(this);
  }

  setSail() {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
    if (currentPortIndex === itinerary.ports.length - 1) {
      throw new Error("End of itinerary reached");
    }

    this.previousPort = this.currentPort;
    this.currentPort = null;
    if (this.previousPort) {
      this.previousPort.removeShip(this);
    }
  }
}

module.exports = { Ship };
