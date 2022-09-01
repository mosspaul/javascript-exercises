const reverseString = function(string) {
    list = [];
    for (let i = string.length; i >= 0; i--) {
        list.push(string[i]);
    }
    return list.join("");
};

// Do not edit below this line
module.exports = reverseString;
