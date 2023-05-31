function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
  this.currentPort.addShip(this);
}

Ship.prototype.dock = function () {
  const itinerary = this.itinerary;
  const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

  this.currentPort = itinerary.ports[previousPortIndex + 1];

  this.currentPort.addShip(this);
};

// testing

Ship.prototype.setSail = function () {
  const itinerary = this.itinerary;
  const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
  if (currentPortIndex === itinerary.ports.length - 1) {
    throw new Error("End of itinerary reached");
  }

  this.previousPort = this.currentPort;
  this.currentPort = null;
  //ship removes itself from a Ports [ships] array

  if (this.currentPort) {
    const ships = this.currentPort.ships;
    const shipIndex = ships.indexOf(this);
    if (shipIndex !== -1) {
      ships.splice(shipIndex, 1);
    }
  }

  this.previousPort.removeShip(this);
};

function Port(name) {
  this.name = name;
  this.ships = [];
}

Port.prototype.addShip = function (ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function (ship) {
  this.ships.pop(ship);
};

module.exports = { Ship, Port };
