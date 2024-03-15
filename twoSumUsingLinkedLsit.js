class LinkedList{
    constructor(val){
        this.node = val;
        this.next = null;
    }
}
let a1 = [2,4,3] ;
let a2 = [5,6,4]

function addTwoNumbers(a1,a2){
   let maxLength = 0;

    if(a1.length > a2.length){
        maxLength = a1.length;
        a2 = reStructure(a2,maxLength - a2.length)
    }else{
        maxLength = a2.length
        a1 = reStructure(a1,maxLength - a1.length)

    }



    a1 = a1.reverse().join('')
    a2 = a2.reverse().join('')

    let res = Number(a1) + Number(a2) 
    res = String(res)

    res =  res.split('').reverse();

    let list =null

    for(let i = 0; i < res.length ; i++){
       list = arrayToList(list,Number(res[i]))

    }

    return list
    
    
}


let reStructure = (arr,times)=>{
    for(let i =0 ; i< times;i++){
        arr.push(0)

    }
    return arr
}

function arrayToList(list,data){

    if(list == null){
        return new LinkedList(data);
    }
    else{
        list.next = arrayToList(list.next,data)
    }
    return list
}


console.log(
    addTwoNumbers(a1,a2)
);

