const sumAll = function(a, b) {
    if (!(typeof(a) === "number")||!(typeof(b) === "number")) {
        return "ERROR";
    } else if (a < 0 || b < 0) {
        return "ERROR"
    } else if (a > b) {
        higher = a;
        lower = b;
    } else if (b > a) {
        higher = b;
        lower = a;
    }
    let sum = 0;
    for (let i = lower; i <= higher; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
