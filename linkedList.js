class LinkedList{
    constructor(val){
        this.node = val;
        this.next = null;
    }
}

// let list = new LinkedList(100);
// list.next =new LinkedList(200);
// list.next.next = new LinkedList(300)
// console.log(list);

let arr = [1,2,3];

let list = new LinkedList(100)

list.next = new LinkedList(200)

// console.log(list,"list");

function arrToList(arr){

   let root = null;

   for(let i= 0 ; i < arr.length ; i++){

   }

    
}

function addValues(list,val){
    let ptr = list
    while(ptr != null){
        if(list.next == null){
            list.next = new LinkedList(val)
        }
        else{

        }

    }
}