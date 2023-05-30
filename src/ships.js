function Ship(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
}

Ship.prototype.dock = function() {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

    this.currentPort = itinerary.ports[previousPortIndex + 1];
}

Ship.prototype.setSail = function() {

    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
    if (currentPortIndex === (itinerary.ports.length - 1)) {
        throw new Error('End of itinerary reached')
    }

    this.previousPort = this.currentPort;
    this.currentPort = null;
}

function Port(name) {
    this.name = name;
}

Port.prototype.addShip = function(ship) {
    if (!this.ships) {
        this.ships = [];
    }

    this.ships.push(ship);
}

Port.prototype.removeShip = function(ship) {
    this.ships.pop(ship);
}

module.exports = { Ship, Port };