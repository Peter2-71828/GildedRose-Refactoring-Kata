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
      if (unusualItems.includes(item.name)) {
        unusualItems(item)
      }
      else {
        standardItems(item)
      }
    }
    return this.items
  }
}

function standardItems(item) {
  if (item.quality > 0) {
    item.quality--
    item.sellIn--
    if (item.sellIn < 0) {
      item.quality--
    }
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
