
class Linked{
    constructor(elem){
        this.elem = elem;
        this.next = null;
    }


}

let arr = [100, 200 , 300 , 400]

const arrayToList = (list , value)=>{
    if(list == null){
        return new Linked(value)
    }
    else{
       list.next =  arrayToList(list.next, value)
    }
    return list
}

let list = null;

for(elem of arr){
    console.log(list,elem);
    list = arrayToList(list, elem)

}

// console.log(list)
let newArray = []
const listToArray = (newArray , list)=>{
        if(list.next == null){
            newArray.push(list.elem)
            return
        }
            newArray.push(list.elem)


        return listToArray(list.next)
}


console.log(listToArray(list));

console.log(newArray,"new Array");