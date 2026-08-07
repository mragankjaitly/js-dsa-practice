// again two sum hash map

var twoSum = function(nums, target){
    let mp = new Map();
    for (let i = 0; i<nums.length; i++){
        let rem = target - nums[i];

        if(mp.has(rem)){
            return [mp.get(rem),i];
        }
        else{
            mp.set(nums[i],i);
        }
    }
}

//brute force two sum

var twoSum1 = function(nums, target){
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
}

// best time to buy a stock

let minprice = prices[0];
let maxprofit = 0;

for(let i = 1; i<prices.length; i++){
    if(prices[i]<minprice){
        minprice = prices[i];
    }
    else{
        maxprofit = Math.max(maxprofit, prices[i]-minprice);
    }
}
return maxprofit;

// contains Duplicate

var containsDuplicate = function(nums){
    let mp = new Map();
    for(let i = 0; i<nums.length; i++){
        if(mp.has(nums[i])){
            return true;
        }
        else{
            mp.set(nums[i],i);
        }
    }
    return false;
}