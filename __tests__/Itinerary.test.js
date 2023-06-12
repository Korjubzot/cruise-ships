const Itinerary = require("../src/itinerary.js");

describe("Itinerary", () => {
  it("instantiates Itinerary object", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("can have ports", () => {
    const spithead = jest.fn();
    const botanyBay = jest.fn();

    const itinerary = new Itinerary([spithead, botanyBay]);

    expect(itinerary.ports).toEqual([spithead, botanyBay]);
  });
});
