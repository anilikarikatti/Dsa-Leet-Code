var minimumTotal = function(triangle) {

    let sum = 0 ;
    let lastIndex = 0;
     for(let elem of triangle){
        let  item = [elem[lastIndex],elem[lastIndex - 1],elem[lastIndex + 1]]

        item =  item.filter(elem=>elem)
        console.log(item)
      
        let minimum = Math.min(...item);
          lastIndex = elem.indexOf(minimum)
        sum +=minimum;
     }

     return sum
    
};

let arr = [[2],[3,4],[6,5,7],[4,1,8,3]]


minimumTotal(arr)