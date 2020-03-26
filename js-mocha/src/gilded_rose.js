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

// Logic for updateQuality method for all the types of items

function standardItems(item) {
  if (item.quality > 0) {
    item.quality--
    if (item.sellIn < 0) { item.quality-- }
  }
}

function otherItems(item) {
  if (item.name === 'Aged Brie') { agedBrie(item) }
  else if (item.name === 'Sulfuras, Hand of Ragnaros') { sulfuras(item) }
  else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') { backstagePasses(item) }
}

function agedBrie(item) {
  if (item.quality < 50) {
    item.quality++
    if (item.sellIn < 0) { item.quality++ }
  }
}

function sulfuras(item) { item.sellIn++ }

function backstagePasses(item) {
  if (item.sellIn < 0) { item.quality = 0 }
  else if (item.sellIn <= 5) {item.quality += 3}
  else if (item.sellIn <= 10) {item.quality += 2}
  else { item.quality++ }
}

module.exports = {
  Item,
  Shop
}
