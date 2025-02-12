/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let firstWord = strs[0];
    let currentLetter = 0;
    let match = true;
    let prefix = "";
    while ((match == true) && (currentLetter < firstWord.length)) {
        for (let currentWord = 1; currentWord < strs.length; currentWord++) {
            if (currentLetter < strs[currentWord].length) {
                if (strs[currentWord][currentLetter] == firstWord[currentLetter]) {
                } else {
                    match = false;
                    break;
                }
            } else {
                match = false;
                break;
            }
        }
        if (match == true) {
            prefix = prefix + firstWord[currentLetter];
        }
        currentLetter++;
    }
    return prefix;
};