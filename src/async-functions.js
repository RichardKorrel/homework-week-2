// Declare function giveItBackLater and pass it
// a parameter called value and a parameter called
// callback which is a function
function giveItBackLater(value, callback){
  // Declare function willBeCalledLater that will call
  // the callback function
  function willBeCalledLater() {
      callback(value)
  }
  // Call the function willBeCalledLater that calls the
  // callback function but only after 100 milliseconds
  setTimeout(willBeCalledLater, 100)
}

// Declare function promiseToGiveItBackLater
function promiseToGiveItBackLater(value){
}

// Declare function addSomePromises
function addSomePromises(somePromise){
}

// Export the fuctions
module.exports = {
  giveItBackLater,
  addSomePromises,
  promiseToGiveItBackLater
}
