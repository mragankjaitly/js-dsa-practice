// day 1: Array refresher + Medium Problems

// 1: reverse an array

function reverseArray(arr){
    let newArr = []

    for(let i = arr.length-1; i>=0; i--){
        newArr.push(arr[i]);
    }

    return newArr;
}

let arr = [1,2,3,4,5];

console.log(reverseArray(arr));

// 2: Roatte the array by k steps

function rotateRight(arr,k){
    let newArr = [];
    let p = arr.length - k
    
    for(let i = p; i<arr.length; i++){
        newArr.push(arr[i]);
    }

    for(let i = 0; i<p; i++){
        newArr.push(arr[i]);
    }

    return newArr;
}

let arr1 = [1,2,3,4,5];

let k = 2;

console.log(rotateRight(arr1,k));

// 3: Find maximum and minimum in an array

function findMinMAx(arr){
    let min = 0;
    let max = 0;

    arr.sort((a,b) => a-b);

    min = arr[0];
    max = arr[arr.length-1];
    return{min, max}
}

let arr2 = [3, 9, 1, 44, 6];

console.log(findMinMAx(arr2));

// 4: Find all pairs with a given sum.

function sumPairs(arr, target){
    let newArr = [];

    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]+arr[j] == target){
                newArr.push([arr[i],arr[j]]);
            }
        }
    }

    return newArr;
}

let arr3 = [1,2,3,4,5];

let target = 6;

console.log(sumPairs(arr3,target));