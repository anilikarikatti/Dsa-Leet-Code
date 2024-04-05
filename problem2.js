
// function Possibilities(num){

//     let values = [3,5,10];

//         let poss = []

//     for(let i=0;i<values.length;i++){
//         for(let j=0;j<values.length;j++){
//             if(values[i] + values[j] == num){
//                 poss.push([values[i],values[j]]);
//             }
//         }
//     }

//     return poss;


// }

// console.log(Possibilities(8));


// atm draw amount

let amount  = 8;
// i = 100
// j == 200
// k = 500

let Possibilities = [];
for(let i=0;i <= Math.ceil(amount/3);i++){
    for(let j=0;j <= Math.ceil(amount/5);j++){
        for(let k=0;k <= Math.ceil(amount/10);k++){
            if(i * 3 + j * 5 + k * 10 == amount){
                Possibilities.push(`${i} * 3 + ${j} * 5  + ${k} * 10 `)
            }
}
}
}

console.log(Possibilities.length);