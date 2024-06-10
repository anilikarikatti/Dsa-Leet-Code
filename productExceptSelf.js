     productExceptSelf(nums) {
      

        // Big O(n)

        const output = []
        const leftProduct= []
        const rightProduct = []

        for(let i =0 ; i < nums.length ; i++){
          if(leftProduct.length >= 2){
             leftProduct.push(nums[i-1] * leftProduct[leftProduct.length-1] )
          }else{
            leftProduct.push(nums[i-1]? nums[i-1] : "")

          }
        }


        for(let i =nums.length-1 ; i >= 0 ; i--){
          if(rightProduct.length >= 2){
                rightProduct.unshift(nums[i+1] *  rightProduct[0] )

          }else{
            rightProduct.unshift(nums[i+1]? nums[i+1] : "")

          }
        }

        
      

        console.log(leftProduct , rightProduct)
        for(let i = 0 ; i< nums.length ;i++){
            output.push((leftProduct[i] != "" ? leftProduct[i] : 1) * (rightProduct[i] != "" ? rightProduct[i] : 1));
        }

        return output
    }
}
