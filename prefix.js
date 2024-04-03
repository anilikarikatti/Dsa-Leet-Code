var longestCommonPrefix = function(strs) {

   

    let prefix = true;
    let previous = "";
    let numberOfchars = 1 ; 
    while(prefix){
        
        let subString = strs[0]?.slice(0,numberOfchars)
        if(previous.length >= strs[0]?.length ) return previous
        if(subString){

        
        let value = strs?.every(elem=>elem.startsWith(subString))

        console.log(value);

        if(value){
            numberOfchars+=1;
            previous = subString
        }
        else{
            prefix = false;
            return previous
        }
        }else{
            return previous
        }
    }
    
};

let strs = ["c","acc","ccc"]
console.log(longestCommonPrefix(strs));