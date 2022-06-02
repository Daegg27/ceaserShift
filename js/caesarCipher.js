exports.caesarCipher = function(initialString, num) {
    let standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let capitalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let originalLetter = "";
    let shiftedLetter = "";
    let wordToArray = [];
    let numToNumber = parseInt(num);
// Loops through the array and applies the encryption.
    for (let i = 0; i < initialString.length; i++){
        if (initialString.charAt(i).match(/[^a-zA-Z]/)){
            wordToArray.push(initialString.charAt(i))
            continue;
        }
        originalLetter = standardAlphabet.indexOf(initialString.charAt(i))
        if (originalLetter == -1){
                originalLetter = capitalAlphabet.indexOf(initialString.charAt(i))
        }

        let newNumberCalculator = originalLetter + numToNumber;
        if (newNumberCalculator >= 26){
                newNumberCalculator -= 26;
        }
        if (newNumberCalculator < 0){
            newNumberCalculator += 26
        }
        

        shiftedLetter = standardAlphabet[newNumberCalculator];
            if (standardAlphabet.indexOf(initialString.charAt(i)) == -1){
                shiftedLetter = capitalAlphabet[newNumberCalculator]
        }
        wordToArray.push(shiftedLetter)
        // console.log(newNumberCalculator, initialString.charAt(i),)
    }
    let finalResult = wordToArray.join("");
    console.log(finalResult);
    return finalResult
 
 
  
};
