const palindromes = function (string) {
    let text = string.toLowerCase();
    list = [];
    textList = [];
    for (let i = text.length - 1; i >= 0; i--) {
        if (isCharacterALetter(text[i])) {
            list.push(text[i]);
            textList.push(text[i]);
        }
    }
    let str = list.join("").toLowerCase();
    let newText = textList.reverse().join("").toLowerCase();
    console.log(`Original text: ${newText}\n Current text: ${str}!`);
    return str === newText ? true : false;
};

function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
}

palindromes("race car!");
// Do not edit below this line
module.exports = palindromes;
