
var reverse = function(x) {
    let value = x ;
    console.log(typeof(value));
    return String(value).split('').reverse().join('')
};

let num = 123;
console.log(reverse(num));