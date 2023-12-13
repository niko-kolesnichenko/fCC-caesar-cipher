/*
Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Tests:
rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
rot13("SERR YBIR?") should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/

// Final solution
function rot13(str) {
  const originalAlphabetDict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const cipherDict = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  
  return str.replace(/[A-Z]/gi, letter => cipherDict[originalAlphabetDict.indexOf(letter)]);;
}
  
console.log(rot13("SERR PBQR PNZC"));

// Thinking history

function test_rot13(str) {
/*
I need to preserve whitespaces, punctuation, etc.

I can blow string into array and then iterate through array and convert letters using lookup dictionary,
then join array into decoded string.
I can do w/o additional array and iterate through string, writing down new string with decoded values.
Second choice looks better (no addit. arrays)

I can use loop which will check characters against Unicode and then shift them to decoded characters.
I can also use regex and straightforward lookup dicts which I will write for this concrete fCC task, not a general case.

regex feels more elegant, so I'll go with that approach
*/

const originalAlphabetDict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const cipherDict = "NOPQRSTUVWXYZABCDEFGHIJKLM";

return str.replace(/[A-Z]/gi, letter => cipherDict[originalAlphabetDict.indexOf(letter)]);;

}

console.log(test_rot13("SERR,./\_ YBIR?"));