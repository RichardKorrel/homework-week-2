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

// Declare function addSomePromises and pass it a
// promise object parameter called somePromise
function addSomePromises(somePromise){
  // Create and return a new promise object with a value
  // depending on the result of promise somePromise
  return new Promise((resolve, reject) => {
    somePromise
    .then ( // somePromise completed
      // Case where somePromise resolves succesfully
      // Return the value double as required
      value  => {resolve(value+value)},
      // Case where somePromise rejects
      // Return the reason value triple as required
      reason => {resolve(reason+reason+reason)})
    // Case where somePromise resulted in an error
    // Return the error
    .catch(error => {return(error)})
  })
}

// Export the fuctions
module.exports = {
  giveItBackLater,
  addSomePromises,
  promiseToGiveItBackLater
}
