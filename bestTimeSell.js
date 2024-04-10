// var maxProfit = function(prices) {

//     let buy = ""
//     let sell = 0
//     let count = 0;
//     if(prices.length == 1) return 0
//     for(let elem = 0 ; elem < prices.length ; elem++){

//         if((buy == "" || prices[elem] < buy  ) && sell == 0){
//             console.log("buy" , buy)
//             if(elem == prices.length -1 && sell >= buy ){
//                 sell = prices[elem]
//                 count += sell - buy;
//                 sell = 0 ; buy = prices[elem]
//             }else{
//                 buy = prices[elem];

//             }
//         }else if (prices[elem] > sell){
//             console.log("sell")
//             sell = prices[elem]
//             if(elem == prices.length -1 ){
//             console.log(prices[elem] , elem , "elem " , sell ,  buy , sell - buy) 

//                 count += sell - buy;
//                 sell = 0 ; buy = 0
//             }
//         }else{
//             console.log(prices[elem] , elem , "elem " , sell - buy)
//             count += sell - buy;
//             sell = 0 ; buy = prices[elem]
//         }

        
//     }

//     console.log(buy , sell )
//    return count

    
// };
var maxProfit = function(prices) {
    let maxProfit = 0;
    let buy = Infinity;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        } else {
            maxProfit += prices[i] - buy;
            buy = prices[i];
        }
    }

    return maxProfit;
};
