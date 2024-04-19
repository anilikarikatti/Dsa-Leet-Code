var searchInsert = function(nums, target) {

    for(let i=0 ;i < nums.length ; i++){
         if (target == nums[i]){
            return i
        }
        else if (target < nums[i]){
            return i
        }
        else if(target >= nums[i]  && target <= nums[i+1]){
            return i+1
        }
        // else if(target == 0 ){
        //     return 0
        // }
    }
    return nums.length
    
};

// var searchInsert = function(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
    
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
        
//         if (nums[mid] === target) {
//             return mid;
//         } else if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
    
//     return left;
// };
