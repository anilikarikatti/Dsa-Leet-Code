class LinkedList{
    constructor(val){
        this.node = val;
        this.next = null;
    }
}

let arr = [100,200,300]

const arrAyToList = (list,value)=>{
    if(list == null){
        return new LinkedList(value)
    }else{
        list.next = arrAyToList(list.next,value)
    }
    return list
}
let list =null;

for (let index = 0; index < arr.length; index++) {
  list =   arrAyToList(list,arr[index]);
    
}

console.log(list);


// traverse
let arrTo = []
function traverseLinkedList(list){
    if(list.next == null){
        console.log(list.node);
        arrTo.push(list.node)
        return arrTo
    }
    arrTo.push(list.node)

    console.log(list.node);
    return traverseLinkedList(list.next);
}

console.log(
    traverseLinkedList(list)
);