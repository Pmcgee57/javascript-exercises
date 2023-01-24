const palindromes = function (array) {
    const original = array.replace(/[^\w\s\']|_/g, "")
        .replace(/\s{2,}/g," ")
        .toLowerCase()
        .split(" ")
        .join("");
    const reverse = original.split("").reverse().join("");
    return (original === reverse ? true : false);
    // if (original === reverse) {
    //     return true
    // } else {
    //     return false
    // }
    // console.log(original);
    // console.log(reverse);
};

// Do not edit below this line
module.exports = palindromes;
