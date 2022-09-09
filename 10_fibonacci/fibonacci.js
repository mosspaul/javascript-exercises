const fibonacci = function (num) {
    if (num < 0) {
        return "OOPS";
    }
    // This uses the equation a{n} = [Phi^n – (phi)^n] / Sqrt[5]
    let sqr = Math.sqrt(5);
    let first = (1 + sqr) / 2;
    let last = (1 - sqr) / 2;
    return Math.floor((Math.pow(first, num) - Math.pow(last, num)) / sqr);
};
// Do not edit below this line
module.exports = fibonacci;
