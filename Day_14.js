let resultArray = function(nums){

    let arr1 = [nums[0]];
    let arr2 = [nums[1]];

    for(let i = 2; i<nums.length; i++){

        if(arr1[arr1.length - 1] > arr2[arr2.length - 1]){
            arr1.push(nums[i]);
        } else{
            arr2.push(nums[i]);
        }
    }

    return arr1.concat(arr2);
}

// approach 1

var isPowerOfTwo = function(n){
    
    if( n<= 0) return false;

    while( n%2 === 0){
        n = n/2;
    }

    return n === 1;
}

//approach 2

var ispowerOfTwo = function(n){

    return n > 0 && (n & (n - 1)) === 0;
}