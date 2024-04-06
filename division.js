var divide = function(dividend, divisor) {
    if(dividend < -2147483647 && divisor == -1 ){
        return 2147483647
    }
    let output = dividend / divisor
    output = String(output).split('.')
    return Number(output[0])
};