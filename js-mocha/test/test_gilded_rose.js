var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("item quality and sellIn should reduce one", function() {
    const gildedRose = new Shop([ new Item("foo", 3, 2) ]);
    const itemAfterOneDay = gildedRose.updateQuality();
    expect(itemAfterOneDay[0].quality).to.equal(1);
    expect(itemAfterOneDay[0].sellIn).to.equal(2);
  });

  it("item quality should never be negative", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const itemAfterOneDay = gildedRose.updateQuality();
    expect(itemAfterOneDay[0].quality).to.equal(0);
  });

});
