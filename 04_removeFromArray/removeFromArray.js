const removeFromArray = function(array, ...args) {
    for (const arg in args) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === args[arg]) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};
removeFromArray([1, 2, 3, 4], 1, 3)

// Do not edit below this line
module.exports = removeFromArray;
