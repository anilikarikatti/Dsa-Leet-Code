var romanToInt = function(s) {

    let value = 0
    
    let obj = {
           "I" :  "1",
           "V" :  "5",
           "X" :  "10",
           "L" :  "50",
           "C" :  "100",
           "D" :  "500",
           "M" :  "1000",
           "IV" : "4",
           "XL" : "40",
           "XC" : "90",
           "CD" :"400",
            "CM" : "900",
            "IX":"9"
    }

    for(let i = 0 ; i  < s.length ; i++ ){
       if(s[i+1]  ){
           let val =  obj[s[i]+s[i+1]]
           if(val){
            console.log(val,s[i],s[i+1])
            value += parseInt(val)
            i+=1
           }else{
            value += parseInt(obj[s[i]])
           }
       }else{
            value += parseInt(obj[s[i]])

       }
        // value += parseInt(obj[elem]);
    }
    console.log(value)
    return value

};