var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("item quality and sellIn should reduce one", function() {
    const gildedRose = new Shop([ new Item("foo", 1, 3) ]);
    const itemAfterOneDay = gildedRose.updateQuality();
    expect(itemAfterOneDay[0].sellIn).to.equal(0);
    expect(itemAfterOneDay[0].quality).to.equal(2);
  });

  it("quality degrades twice as fast after sell by date", function(){
    const gildedRose = new Shop([ new Item("foo", 0, 3) ]);
    const itemAfterOneDay = gildedRose.updateQuality();
    expect(itemAfterOneDay[0].quality).to.equal(1);
  });

  it("item quality should never be negative", function() {
    const gildedRose = new Shop([ new Item("foo", 2, 0) ]);
    const itemAfterOneDay = gildedRose.updateQuality();
    expect(itemAfterOneDay[0].quality).to.equal(0);
  });

});
