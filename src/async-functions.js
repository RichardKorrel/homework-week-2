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

// Declare function promiseToGiveItBackLater and pass it
// a parameter called value
function promiseToGiveItBackLater(value){
  // Create and return a new promise object with the
  // eventually resolved value of parameter value
  return new Promise((resolve) => {
    // Declare the function willBeCalledLater that will
    // resolve the value of the parameter called value
    function willBeCalledLater() {
      resolve(value)
    }
    // Call the function willBeCalledLater that resolves
    // the value of the parameter value but only after
    // 100 milliseconds
    setTimeout(willBeCalledLater, 100)
  })
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
