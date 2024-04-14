var coinChange = function(coins, amount) {

    let coinsCount = 0 ;

    while(amount > 0){
        let filteredCoins = coins.filter(elem=>elem <= amount);

        if(filteredCoins.length <= 0){
            return -1
        }

        let coin = getCoin(filteredCoins);
        

        

        amount = amount - coin;
        coinsCount +=1;

        console.log(amount , coinsCount)

    }

    console.log(coinsCount , "count");

    return coinsCount
    
};



const getCoin = (arr)=>{
    return Math.max(...arr);
}

let output = coinChange([186,419,83,408]  , 6249)

console.log(output)