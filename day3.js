// Day 3: Advance Problems

// Problem 1: Check if an array contains duplicates

function checkDuplicate(arr){
    arr.sort((a,b) => a-b);

    for(let i = 0; i<arr.length; i++){
        if(arr[i] == arr[i+1]){
            return(true);
        }
    }

    return(false);
}

console.log(checkDuplicate([1,2,3,4,5]));
console.log(checkDuplicate([1,2,3,4,1]));

// Problem 2: Find the Majority Element

function majorityNumber(arr){
    let count = {};
    let n = arr.length;

    for(let num of arr){
        count[num] = (count[num] || 0) + 1;
        if(count[num]>Math.floor(n/2)){
            return num;
        }
    }
}

console.log(majorityNumber([3,3,4,2,3,3,5]));
console.log(majorityNumber([2,2,1,1,1,2,2]));

// Problem 3: Subarray with a Given Sum.

function subarrayWithSum(arr, target){
    let start = 0;
    let currentSum = 0;

    for(let end = 0; end<arr.length; end++){
        currentSum += arr[end]

        while(currentSum > target && start <= end){
            currentSum -= arr[start];
            start++;
        }

        if(currentSum === target){
            return arr.slice(start, end+1);
        }
    }

    return [];
}

console.log(subarrayWithSum([1,4,20,3,10,5], 33));
console.log(subarrayWithSum([1,2,3,7,5], 12));
console.log(subarrayWithSum([1,2,3,4,5], 11));

// Problem 4: Maximum Product Subarray

function maxProductSubarray(arr) {
    let maxProd = arr[0];
    let minProd = arr[0];
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let num = arr[i];

        // If number is negative, swap max and min
        if (num < 0) {
            [maxProd, minProd] = [minProd, maxProd];
        }

        // Update max and min product for current index
        maxProd = Math.max(num, num * maxProd);
        minProd = Math.min(num, num * minProd);

        // Update result
        result = Math.max(result, maxProd);
    }

    return result;
}
console.log(maxProductSubarray([2,3,-2,4]));
console.log(maxProductSubarray([-2,0,-1]));
console.log(maxProductSubarray([-2,3,-4]));
