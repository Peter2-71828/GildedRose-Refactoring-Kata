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

  it("Aged Brie should increase in quality", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 5, 15) ]);
    const itemAfterOneDay = gildedRose.updateQuality();
    expect(itemAfterOneDay[0].quality).to.equal(16);
  });

  it("Aged Brie increases in quality twice as fast after sell by date", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", -1, 20) ]);
    const itemAfterOneDay = gildedRose.updateQuality();
    expect(itemAfterOneDay[0].quality).to.equal(22);
  });

  // given code allows for entry of quality greater than 50
  it("quality of an item is never more than 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 10, 50) ]);
    const itemAfterOneDay = gildedRose.updateQuality();
    expect(itemAfterOneDay[0].quality).to.equal(50);
  });

  it("properties of Sulfuras should not change", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 5, 30) ]);
    const itemAfterOneDay = gildedRose.updateQuality();
    expect(itemAfterOneDay[0].quality).to.equal(30);
    expect(itemAfterOneDay[0].sellIn).to.equal(5);
  });

});
