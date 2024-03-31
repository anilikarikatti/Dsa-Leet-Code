class Human{
    
    constructor(color,height,weight){
        // console.log(height,weight,color);
        // this.height = height;
        this.weight = weight;
        this.color = color;

    }
    // height=0;
      get  age() {
        // console.log(`you are ${this.height} old`);
        // alert())
        console.log("klsfjklsaff , kajhfjkas",this.height);
        return this._height;
    }

    set age(h){
        console.log(h);
        this.height = h;
        return this.height;
    }

}


let obj1 = new Human('red',105,57);
let obj2 = new Human('red',105,57);
let obj3 = new Human('blue',102,17);

// console.log(obj1.age(90));
obj1 = new Human('yello',90);
console.log(obj1.age);
// console.log(obj1)
// console.log(obj2);
// console.log(obj3);

// (obj1 == obj2) ? console.log("equal"): console.log("not equal");;
// console.log(
// obj1.age()
// );
// console.log(typeof(Human)); 
// console.log(typeof(obj1)); 
// console.log(Human.prototype.constructor,Human);

// console.log(Human.prototype);

// console.log(Human.prototype.age())

// console.log(Object.getOwnPropertyNames(Human.prototype));