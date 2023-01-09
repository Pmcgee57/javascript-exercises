const sumAll = function(min, max) {
    //return erros if either argument is negative
    if (min < 0 || max < 0 || typeof min != "number" || typeof max != "number"){
        return "ERROR"
    }
    // if min is greater than max, reverse them
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    // loop through and sum all values between max and min
    sum = 0
    for (let i = min; i <= max; i ++) {
        sum += i;
    }
    return sum
};

// console.log(sumAll(1,4))

// const sumAll = function(min, max) {
//     if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
//     if (min < 0 || max < 0) return "ERROR";
//     if (min > max) {
//       const temp = min;
//       min = max;
//       max = temp;
//     }
//     let sum = 0;
//     for (let i = min; i < max + 1; i++) {
//       sum += i;
//     }
//     return sum;
//   };
  

// Do not edit below this line
module.exports = sumAll;
