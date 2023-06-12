const { Port } = require("../src/ports.js");

describe("Port", () => {
  it("instantiates Port object", () => {
    expect(new Port("Spithead")).toBeInstanceOf(Object);
  });

  it("checks name of Port", () => {
    const port = new Port("Spithead");

    expect(port.name).toEqual("Spithead");
  });

  describe("adds and removes ports", () => {
    let port;

    beforeEach(() => {
      port = new Port("Spithead");
    });

    it("adds a Ship to Port", () => {
      const ship = jest.fn();

      port.addShip(ship);

      expect(port.ships).toContain(ship);
    });

    it("can remove a ship from Port", () => {
      const supply = jest.fn();
      const sirius = jest.fn();

      port.addShip(supply);
      port.addShip(sirius);

      expect(port.ships).toContain(sirius);

      port.removeShip(supply);

      expect(port.ships).not.toContain(sirius);
    });
  });
});
