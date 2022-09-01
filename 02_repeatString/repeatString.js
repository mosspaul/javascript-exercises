const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    } else {
        list = [];
        for (let i = 0; i < num; i++) {
            list.push(string);
        }
        return list.join("");

    }
    };

// Do not edit below this line
module.exports = repeatString;
