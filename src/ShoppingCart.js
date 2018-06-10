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
  clone(){
    // Create a new ShoppingCart
    const clonedCart = new ShoppingCart()
    // The following spread operation on the items array
    // does not work for some reason
    //clonedCart.items = [...this.items]

    // Instead use the map function to add a new
    // array of items to the new ShoppingCart using
    // the ShoppingCart addItem method
    this.items.map(item =>
        clonedCart.addItem(item.name,item.quantity,
                           item.pricePerUnit))
    // Return the cloned ShoppingCart
    return clonedCart
  }
}

// Export the class ShoppingCart
module.exports = ShoppingCart
