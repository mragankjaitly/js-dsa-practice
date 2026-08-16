let letterCombinations = function(digits){

    let map = {
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz"
    };

    let result = [];

    function backtrack(index, current){

        if(index === digits.length){
            result.push(current);
            return;
        }

        let letters = map[digits[index]];

        for(let letter of letters){
            backtrack(index+1, current+letter);
        }
    }

    backtrack(0,"");

    return result;
}

let generateParenthesis = function(n){

    let result = [];

    function backtrack(open, close, current){

        if(current.length === n*2){
            result.push(current);
            return;
        }

        if(open<n){
            backtrack(open+1, close, current + "(");
        }

        if(close<open){
            backtrack(open, close+1, current + ")");
        }
    }

    backtrack(0,0,"");

    return result;
}