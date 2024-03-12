let string = "ababa";

let obj = {
    "a" :"c",
    "b":"d"
}

function findNumber(input){

    let total = 0
    for(let i = 0 ; i < input.length ; i++){
         let count = 0;

        for(let j = i+1 ; j < input.length ; j++){
            
            if(obj[input[i]] ==  obj[input[j]] ){
                count++;
            }
    }
    if(total < count){
        total = count ; 
    }
    }
    return total
}

console.log(findNumber(string))