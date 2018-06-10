// Declare function pathFind
function pathFind(propertiesNameList,propertiesObject) {
  // Assume propertiesNameList is an array of strings and
  // the propertiesObject is an object of nested property
  // names/values where the property names correspond to
  // to the propertiesNameList values in the left to right
  // order.
  // E.g. if propertiesNameList is ['x','y','z'] then
  //         propertiesObject is something like
  //                               {x:{y:{z:'set'}}}
  if (propertiesNameList.length===1) {
    // If the propertiesNameList only has one property
    // then the propertiesObject also contains one
    // property name/value pair identifying the property
    // This is the end of recursion, so return the
    // property value to the previous call of pathFind
    // e.g. for ["foo"], { foo: "bar" } return "bar"
    return propertiesObject[propertiesNameList[0]]
  }
  else {
    // otherwise return the value of the
    // recursive pathFind call with parameters
    // propertiesNameList without the 1st element and
    // propertiesObject with only the property value
    // identified by the 1st element of the
    // propertiesNameList
    // e.g. for ["author", "name"], { author: { name: "Stephen" } }
    // return pathFind(["name"], { name: "Stephen"})
    // which will resolve in a returned value of "Stephen"
    return pathFind(
      propertiesNameList.slice(1),
      propertiesObject[propertiesNameList[0]]
    )
  }
}

// Export the function pathFind
module.exports = {pathFind}
