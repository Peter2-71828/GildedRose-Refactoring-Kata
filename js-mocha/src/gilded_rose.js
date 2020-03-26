class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {

    const unusualItems = ['Aged Brie', 'Sulfuras, Hand of Ragnaros', 'Backstage passes to a TAFKAL80ETC concert']

    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i]
      item.sellIn--
      if (unusualItems.includes(item.name)) { otherItems(item) }
      else { standardItems(item) }
    }return this.items
  }
}

function standardItems(item) {
  if (item.quality > 0) {
    item.quality--
    if (item.sellIn < 0) { item.quality-- }
  }
}

function otherItems(item) {
  if (item.name === 'Aged Brie') { agedBrie(item) }
  else if (item.name === 'Sulfuras, Hand of Ragnaros') { sulfural(item) }
  else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') { backstagePasses(item) }
}

function agedBrie(item) {
  if (item.quality < 50) {
    item.quality++
    if (item.sellIn < 0) { item.quality++ }
  }
}

module.exports = {
  Item,
  Shop
}

// if (this.items[i].sellIn < 6) {
//   if (this.items[i].quality < 50) {
//     this.items[i].quality = this.items[i].quality + 1;
//   }
// }
// }
// }
// }
// if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
// this.items[i].sellIn = this.items[i].sellIn - 1;
// }
// if (this.items[i].sellIn < 0) {
// if (this.items[i].name != 'Aged Brie') {
// if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
// if (this.items[i].quality > 0) {
//   if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//     this.items[i].quality = this.items[i].quality - 1;
//   }
// }
// } else {
// this.items[i].quality = this.items[i].quality - this.items[i].quality;
// }
// } else {
// if (this.items[i].quality < 50) {
// this.items[i].quality = this.items[i].quality + 1;
// }
// }
// }
// }
