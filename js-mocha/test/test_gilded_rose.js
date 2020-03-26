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

  it("Aged Brie increases in quality", function() {
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

  // 'Sulfuras' called 'Sulfuras, hand of Ragnaros' in given code
  it("properties of Sulfuras should not change", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 5, 30) ]);
    const itemAfterOneDay = gildedRose.updateQuality();
    expect(itemAfterOneDay[0].quality).to.equal(30);
    expect(itemAfterOneDay[0].sellIn).to.equal(5);
  });

  // 'Backstage passes' name in given code also different
  it("Backstage passes increase in quality", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 13, 42)]);
    const itemAfterOneDay = gildedRose.updateQuality();
    expect(itemAfterOneDay[0].quality).to.equal(43);
  });

  it("Backstage passes increase in quality by 2 when within 10 days of the sell by date", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 39)]);
    const itemAfterOneDay = gildedRose.updateQuality();
    expect(itemAfterOneDay[0].quality).to.equal(41);
  });

  it("Backstage passes increase in quality by three within 5 days of the sell by date", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 8)]);
    const itemAfterOneDay = gildedRose.updateQuality();
    expect(itemAfterOneDay[0].quality).to.equal(11);
  });

  // 'Backstage passes quality decrease at SellIn = 0 not after in given code'
  it("Backstage passes quality drops to 0 at sell by date", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]);
    const itemAfterOneDay = gildedRose.updateQuality();
    expect(itemAfterOneDay[0].quality).to.equal(0);
  });

});
