var singleNumber = function(nums) {

    let obj = {

    }
    
    for(let elem of nums){
        if(obj[elem]){
            obj[elem] += 1
        }else{
            obj[elem] = 1
        }
    }

    for(let elem in obj ){
        if(obj[elem] == 1){
            return elem
        }
    }
    // let str = nums.join('');
    // console.log(str)

    // for(let elem of nums){
    //     let re = new RegExp(elem,'g');

    //     console.log(re)

    //     let arr = str.match(re);

    //     if(arr?.length == 1){
    //         return elem
    //     }

    // }
    
};