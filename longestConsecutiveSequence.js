class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

         if(nums.length <= 0 ){
            return 0
        }
       let sortedNums = new Set( nums.sort((a,b)=>a-b))

        console.log(sortedNums)

       

        let object = {}

        let previous = null

        let lastElement = ""

        for(let elem of sortedNums){
            if(previous == null){
                previous = elem;
                object[elem] = 1
                lastElement = elem

            }else{
                if(lastElement + 1 == elem){
                    console.log(previous )
                    object[previous] += 1
                   
                }else{
                   previous = elem;
                    object[previous] = 1

                }
                lastElement = elem
            }
        }
        let output = Math.max(...Object.values(object))
        return output
    }
}
