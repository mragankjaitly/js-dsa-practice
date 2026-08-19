var isHappy = function(n){

    function getNext(n){

        let sum = 0;

        while(n>0){
            let digit = n%10;
            sum += digit*digit;
            n = Math.trunc(n/10);
        }
        return sum;
    }

    let seen = new Set();

    while(n !== 1){

        if(seen.has(n)){
            return false;
        }

        seen.add(n);
        n = getNext(n);
    }

    return true;
}