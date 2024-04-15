// var maximumSubarraySum = function(nums, k) {
//     let sum = 0;

//     for(let i =0 ; i < nums.length - (k-2) ; i++){
//         let set = new Set()
//         for(let j = i ; j < i+ k ; j++){
//             if(!set.has(nums[j])){
//                 set.add(nums[j])
//             }else{
//                 break
//             }
//         }

//         if(set.size == k  ){

//         let arr = Array.from(set)
//         let value =  arr.reduce((prev,curr)=>prev+curr , 0);
//         sum = sum < value ? value : sum;
//         }
//     }
//     return sum
// };

var maximumSubarraySum = function(nums, k) {
    let sum = 0;
    let maxSum = 0;
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i]);
            sum += nums[i];
            if (set.size > k) {
                let removedElement = nums[i - k];
                set.delete(removedElement);
                sum -= removedElement;
            }
        }

        if (set.size === k) {
            maxSum = Math.max(maxSum, sum);
        }
    }

    return maxSum;
};
