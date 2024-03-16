let str = "ac";
let start = 0;
// function substring(value){

    

//     if(value.length <= 1){
//         start+=1
//         value = str.slice(start);

//         if(value.length <= 1){
//             return value
//         }

//         if(value.length > start){
//             return substring(value)
//         }

        
//     }

//     if(value == value.split('').reverse().join('')){
//         return value
//     }

//     return substring(value.slice(0,value.length-1));
// }

// console.log(substring(str));



// var longestPalindrome = function(value) {
//     if(value.length <= 1){
//        start+=1
//        value = s.slice(start);

//        if(value.length > start){
//            return longestPalindrome(value)
//        }

       
//    }

//    if(value == value.split('').reverse().join('')){
//        return value
//    }

//    return longestPalindrome(value.slice(0,value.length-1));
// }

var longestPalindrome = function(s) {
   
    return substring(s,s)
    
};

function substring(value,s){

    if(s.length == 1 ){
        return value
    }

    if(value.length <= 1){
        start+=1
        value = s.slice(start);

        if(value.length == 1){
            return value
        }

        if(value.length >= start){
            return substring(value,s)
        }

        
    }

    if(value == value.split('').reverse().join('')){
        return value
    }

    return substring(value.slice(0,value.length-1),s);
}

console.log(
    longestPalindrome(str)
);