// Day 2

// Problem 1: Remove duplicates from a sorted array

let arr = [1,1,2,2,3,3,4];

let newArr = [];

for(let i = 0; i<arr.length; i++){
    if(arr[i] !== arr[i+1]){
            newArr.push(arr[i]);
        }
    
}

console.log(newArr);

// Problem 2: You are given an array. Move all 0s to the end while keeping the order of non-zero elements the same.

let arr1 = [0,1,0,3,12];

let newArr1 = [];

let count = 0;

for(let i = 0; i<arr1.length; i++){
    if(arr1[i] == 0){
        count += 1;
    }else{
        newArr1.push(arr1[i]);
    }
}

for(let j = 0; j<count; j++){
    newArr1.push(0);
}

console.log(newArr1);

// Problem 3: Maximum Subarray Sum (Kadane’s Algorithm).

function maxSubArray(arr) {
    let maxSum = arr[0];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum;
}

let arr3 = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(arr3));

// Problem 4: Two-Sum (Hashmap method).

function twoSumBruteForce(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return []; 
}

console.log(twoSumBruteForce([2,7,11,15], 9));  
console.log(twoSumBruteForce([3,2,4], 6));      
console.log(twoSumBruteForce([1,3,5,7], 10));   

// You are given an array of size n-1 containing distinct numbers from 1 to n.
// 👉 Find the missing number.

let arr4 = [1,2,4,5]

let actualLength = arr4.length+1;

let actualSum = actualLength*(actualLength+1)/2;

const sum = arr4.reduce((a, b) => a + b, 0);

console.log(actualSum - sum);