let romanToIntiger = function(s){
    
    let value = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };

    let result = 0;

    for(let i = 0; i<s.length; i++){
        if(value[s[i]] < value[s[i+1]]){
            result -= value[s[i]];
        } else{
            result += value[s[i]];
        }
    }
    
    return result;
}

let intigetToRoman = function(num){

let values = [
            [1000,"M"],
            [900,"CM"],
            [500,"D"],
            [400,"CD"],
            [100,"C"],
            [90,"XC"],
            [50,"L"],
            [40,"XL"],
            [10,"X"],
            [9,"IX"],
            [5,"V"],
            [4,"IV"],
            [1,"I"]
    ];

    let result = ""

    for(let [value, symbol] of values){
        while(num >= value){
            result += symbol;
            num -= value;
        }
    }

    return result;
}