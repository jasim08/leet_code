var maxProfit = function(prices) {
    let buy = prices[0];
    let profit = 0;
    
        for(let j=1; j < prices.length; j++){
            if(buy > prices[j]){
                buy = prices[j]
                
            }else{
                if( (prices[j] - buy)  > profit ){
                    profit = prices[j] - buy
                }
                
            }
        }
   
    return profit;
    
};

console.log(maxProfit([7,6,4,3,1]))