//  var wordPattern = function(pattern, s) {

//     let obj = {}

//     let patterns = pattern.split('');
//     let string = s.split(' ');

//     if(patterns.length != string.length ) return false

//     for(let i in patterns ){
//         let item = obj[patterns[i]];
//         console.log(item , obj )
//         if(item ){
//             if( item != string[i] )
//                 return false


//         }else{
//             let values = Object.values(obj);
//             if(!values.includes(string[i])){
//                 obj[patterns[i]] = string[i];
//             }else{
//                 return false
//             }
//         }
//     }
//     return true

    
// };

var wordPattern = function(pattern, s) {
    const patternToWord = new Map();
    const wordToPattern = new Map();
    const words = s.split(' ');

    if (pattern.length !== words.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (!patternToWord.has(char) && !wordToPattern.has(word)) {
            patternToWord.set(char, word);
            wordToPattern.set(word, char);
        } else if (
            patternToWord.get(char) !== word ||
            wordToPattern.get(word) !== char
        ) {
            return false;
        }
    }

    return true;
};
