// Declare a class ShoppingCart
class ShoppingCart {
  // The ShoppingCart has items, initially empty
  constructor (items) {
    this.items = []
  }
  // Get the items that are in the ShoppingCart
  getItems() {
    return this.items
  }
  // Add a new item in the ShoppingCart
  addItem(itemName, quantity, price) {
    // an item consists of a name, quantity and price
    const item = {
      name: itemName,
      quantity: quantity,
      pricePerUnit:price
    }
    // Concatenate the item to the items list
    this.items=this.items.concat(item)
  }
  // Clear all the items from the ShoppingCart
  clear(){
    this.items = []
  }
}

// Export the class ShoppingCart
module.exports = ShoppingCart
