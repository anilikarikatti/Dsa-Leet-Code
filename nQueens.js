
// function printTables(n, data){

//     let queens = Object.keys(data);

//     console.log(queens);

//     for(let i =0 ; i < n ; i++ ){
//         let str = "| ";
//         for(let j =0 ; j < n ; j++ ){
//             let printed = false;
//            for(let queen of queens){
//             // console.log(queen);
//             if(data[queen].row == i && data[queen].column == j ){
//                 printed= true
//                 str+= `${queen}|`
//             }
//            }
//         if(!printed){
//             str+= "  |"

//         }

//         }
//         console.log(str)
//     }
    
    
// }

// let data = {'Q1':{row:1,column:1},'Q2':{row:2,column:2},'Q3':{row:3,column:3},'Q4':{row:0,column:0}}
// printTables(4,data)
// // printTables(4,1,2)



// function attacks(){

//     for(let i =0 ; i < n ; i++ ){
//         for(let j =0 ; j < n ; j++ ){
           
//         }
//         console.log(str)
//     }
// }


 function printTables(n,queen,row , column){

    

    for(let i =0 ; i < n ; i++ ){
        let str = "| ";
        for(let j =0 ; j < n ; j++ ){
            if(row == i && column == j ){
            str+=`Q| `

            }else{
            str+=" | "

            }
        }
        console.log(str)
    }
    
    
}

let attacks = []
let Queens = []

let row = 1, column = 1 , n = 8;
let valueStart = 0



// printTables(n,"Q",row,column)
// queenAttacks(row,column,n);


// for Two queens

AllowcateQueens(n,valueStart)

function AllowcateQueens(n,valueStart){

    // console.log(valueStart, "valueStart");

    for(let i= 0 ; i<n;i++){
        let val = i == 0 ? valueStart : 0;

        for(let j= val ; j<n;j++){

            
            
           let arr =  attacks?.filter(elem=> elem.row == i && elem.column == j )
           if(arr.length == 0){
            // console.log(i,j);


            Queens.push({"row":i , "column" : j})
            queenAttacks(i,j,n);

           }

        }



    }
    // console.log(Queens,"Queens");

    if(Queens.length  == n ){
        console.log(Queens,"Queens");
    }
    if( valueStart < n   ){
        valueStart += 1;
        // console.log(n , valueStart);
        attacks = []
        Queens = []
        AllowcateQueens(n,valueStart)
       

    }
}


function queenAttacks(queenRow,queenColumn,n){
    let row = queenRow;
    let column = queenColumn;


    for(let i = row ; i < n ; i++){
        attacks.push({"row":i,column})
        // console.log(i  , column);
    }

    // console.log("row reverse");

    for(let i = row ; i >= 0 ; i--){
        attacks.push({"row":i,column})

        // console.log(i , column);
    }

    // console.log("column");

    for(let j = column ; j < n ; j++){
        attacks.push({row,"column":j})

        // console.log(row , j);
    } 
    

    // console.log("column reverse");

    for(let j = column ; j >= 0  ; j--){
        attacks.push({"row":j,column})

            // console.log(column , j);
        } 

    // console.log("cross attack Y--");
    crossAttacks(row,column,n)

    // console.log("cross attack X++ , Y-- ");

    crossAttacks_X(row,column,n)

    // console.log("cross attack X-- , Y++ ");


    crossAttacks_Y(row,column,n)

    // console.log("cross attack X-- , Y-- ");

    crossAttacksY(row,column,n)
    
    
}

function crossAttacks(row,column,n){
   
    if(row + 1 > n || column + 1> n){
        return 
    }
    attacks.push({row,column})
    // console.log(row ,column , "row");
    crossAttacks(row+1,column+1,n)
}


function crossAttacks_X(row,column,n){
    
    if(row + 1 > n ||   column   < 0){
        return 
    }
    attacks.push({row,column})

    // console.log(row ,column , "row");
    crossAttacks_X(row+1,column-1,n)

}


function crossAttacks_Y(row,column,n){
    
    if(column + 1 > n ||   row   < 0){
        return 
    }
    attacks.push({row,column})

    // console.log(row ,column );
    crossAttacks_Y(row-1,column+1,n)

}


function crossAttacksY(row,column,n){
    
    if(column < 0 ||   row   < 0){
        return 
    }
    attacks.push({row,column})

    // console.log(row ,column );
    crossAttacksY(row-1,column-1,n)

}

// console.log(attacks , "attacks");


// console.log(Queens,"Queens");