var lengthOfLongestSubString = function(s){

    let set = new Set();

    let left = 0;
    let maxLength = 0;

    for(let right = 0; right<s.length; right++){

        while(set.has(s[right])){
            set.delete(s[left]);
            left ++;
        }

        set.add(s[right]);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

var reverse = function(x){

    let result = 0;

    while(x !== 0){

        let digit = x%10;

        result = result*10 + digit;

        x = Math.trunc(x/10);
    }

    if(result < -(2**31) || result > (2**31 - 1)){
        return 0;
    }

    return result;
};