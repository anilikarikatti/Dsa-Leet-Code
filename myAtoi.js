// convert string to int 

var myAtoi = function(s) {
    // let regExp = /-*[0-9]/g
    // let value = s.match(regExp);
    // console.log(value)
    let value = parseInt(s)

    if(value){
        return value >  -2147483648 ?  (value < 2147483648   ? value : 2147483647 ) : -2147483648 ;
    }
    return 0
};