// var firstMissingPositive = function(nums) {

//     console.log(nums)

//     for(let i = 1 ; i <= 100001 ; i++){
//         let res = nums.includes(i);
//         if(!res){
//             return i
//         }
//     }
    
// };


var firstMissingPositive = function(nums) {
    const set = new Set(nums.filter(num => num > 0));

    for (let i = 1; i <= 100001; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
};
