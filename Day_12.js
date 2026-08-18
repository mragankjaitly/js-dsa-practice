var divide = function(dividend, divisor){
    if( dividend === -(2**31) && divisor === -1){
        return 2**31 - 1;
    }

    let negative = (dividend<0) !== (divisor<0);

    let a = Math.abs(dividend);
    let b = Math.abs(divisor);

    let result = 0;

    while(a >= b){
        let temp = b;
        let multiple = 1;

        while(a >= temp + temp){
            temp += temp;
            multiple += multiple;
        }

        a -= temp;
        result += multiple;
    }

    return negative ? -result : result;
}