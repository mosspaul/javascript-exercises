const repeatString = function(string, num) {
    list = [];
    for (let i = 0; i < num; i++) {
        list.push(string);
    }
    return list.join("");
};

// Do not edit below this line
module.exports = repeatString;
