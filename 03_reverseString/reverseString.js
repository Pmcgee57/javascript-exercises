// const reverseString = function(str) {
    // let splitString = str.split("");

    // let reverseArray = splitString.reverse();
    // let joinArray = reverseArray.join("");
    // return joinArray;

//     return str.split("").reverse().join("");
// };


const reverseString = function(string) {

    let newString = ''
    for(let i = string.length - 1; i >= 0; i --) {
        newString = newString + string[i];
    }
    return newString
}


// Do not edit below this line
module.exports = reverseString;
