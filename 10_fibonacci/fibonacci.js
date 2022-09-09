const fibonacci = function (num) {
    if (num < 0) {
        return "OOPS";
    }
    let i = 1;
    let n = 0;
    let list = [0, 1];
    while (i <= num) {
        list.push(fib(n));
        n++;
        i++;
    }
    function fib(n) {
        return list[n] + list[n + 1];
    }
    return list[num];
};

console.log(fibonacci(4));
// Do not edit below this line
module.exports = fibonacci;
