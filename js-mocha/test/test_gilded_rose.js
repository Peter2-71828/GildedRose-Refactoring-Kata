var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("item quality should never be negative", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const itemAfterOneDay = gildedRose.updateQuality();
    expect(itemAfterOneDay[0].quality).to.equal(0);
  });

});
