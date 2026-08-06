// two sum

var twoSum = function(nums, target) {
    let mp = new Map();

    for(let i =0; i<nums.length; i++){
        let rem = target - nums[i];
        if(mp.has(rem)){
            return[mp.get(rem),i]
        }
        else{
            mp.set(nums[i],i);
        }
    }
};

// best time to buy a stock

var maxProfit = function(prices) {
    let minnum = prices[0];
    let maxprofit = 0;

    for(let i = 1; i<prices.length; i++){
        if(prices[i]<minnum){
            minnum = prices[i];
        }
        else{
            maxprofit = Math.max(maxprofit, prices[i]-minnum);
        }
    }
    return maxprofit;
};