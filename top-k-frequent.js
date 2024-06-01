topKFrequent(nums, k) {
        
        let previousElementsCount = {}

        for(let elem of nums){
               
            if(previousElementsCount[elem]){
                previousElementsCount[elem]+=1
            }else{
                previousElementsCount[elem]=1
            }
        
        }

       
        let output = Object.keys(previousElementsCount).sort((a,b)=>previousElementsCount[b] - previousElementsCount[a])
        
        return output.slice(0,k)

    }

    
}
