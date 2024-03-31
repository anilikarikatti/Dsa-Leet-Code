
let a1 = ()=>{console.log("a1");}

setTimeout(()=>{
    console.log("a2");
},0);

setImmediate(()=>{
    console.log("a3");
})

process.nextTick(()=>{
    console.log("a4");
})

a1()
