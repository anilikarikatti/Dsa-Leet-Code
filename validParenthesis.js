// var isValid = function(s) {

//     let stack = [];

//     for(let elem of s ){
//         console.log(elem)
//         if(elem == "(" || elem == "{" || elem == "["){
//             stack.push(elem)
//         }else if(elem == ")" || elem == "}" || elem == "]"){
//             let lastElem = stack.pop();
//             let value = ""
//             if(elem == ")") value = "("
//             else if(elem == "}") value = "{"
//             else if(elem == "]") value = "["
//             console.log("value",value)
//             if(lastElem != value){
//                 return false;
//             }
//         }
//     }
//    if(stack.length == 0){
//     return true
//    }
//    return false
    
// };

var isValid = function(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of s) {
        if (char in pairs) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (pairs[last] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

