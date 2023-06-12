const { Ship } = require("../src/ships.js");
const { Port } = require("../src/ports.js");
const { Itinerary } = require("../src/itinerary.js");

describe("Ship", () => {
  let spithead;
  let botanyBay;
  let itinerary;
  let ship;

  beforeEach(() => {
    spithead = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "Spithead",
      ships: [],
    };
    botanyBay = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "Botany Bay",
      ships: [],
    };
    itinerary = {
      ports: [spithead, botanyBay],
    };
    ship = new Ship(itinerary);
  });

  it("instantiates Ship object", () => {
    expect(ship).toBeInstanceOf(Object);
  });

  xit("gets added to port on instatiation", () => {
    expect(spithead.ships).toContain(ship);
  });
  // todo pass above test

  it("has a starting port", () => {
    expect(ship.currentPort).toBe(spithead);
  });
});

let spithead;
let botanyBay;
let itinerary;
let ship;

beforeEach(() => {
  spithead = {
    addShip: jest.fn(),
    removeShip: jest.fn(),
    name: "Dover",
    ships: [],
  };

  botanyBay = {
    addShip: jest.fn(),
    removeShip: jest.fn(),
    name: "Botany Bay",
    ships: [],
  };

  itinerary = {
    ports: [spithead, botanyBay],
  };
  ship = new Ship(itinerary);
});

it("can set sail", () => {
  ship.setSail();

  expect(ship.currentPort).toBeFalsy();
  expect(spithead.removeShip).toHaveBeenCalledWith(ship);
});

it("can dock at a different port", () => {
  ship.setSail();
  ship.dock();

  expect(botanyBay.addShip).toHaveBeenCalledWith(ship);
});

it("can't sail further than its itinerary", () => {
  ship.setSail();
  ship.dock();

  expect(() => ship.setSail()).toThrowError("End of itinerary reached");
});
