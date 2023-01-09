// removes one value
// const removeFromArray = function(array, removeIndex) {
//     let originalArray = array;
//     index = originalArray.indexOf(removeIndex);

//     if (index > -1) {
//         originalArray.splice(index, 1);
//     }

//     return originalArray
// };

// const removeFromArray = function (...args) {
//     const array = args[0];
//     const newArray = [];

//   // use forEach to go through the array
//   array.forEach((item) => {
//     // push every element into the new array
//     // UNLESS it is included in the function arguments
//     // so we create a new array with every item, except those that should be removed

//     // dont push the items in array(variable) that are also included in ...args into newArray
//     if (!args.includes(item)) {
//       newArray.push(item);
//     }
//   });    
//     // and return that array
//     return newArray;
// }

var removeFromArray = function(...args) {
  const array = args[0]
  return array.filter(val => !args.includes(val))
}

// console.log(removeFromArray([1,2,3,4],3,4))

// Do not edit below this line
module.exports = removeFromArray;
