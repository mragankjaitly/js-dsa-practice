//Longest Common Prefix

let longestCommonPrefix = function(strs){
    strs.sort();
    let start = strs[0];
    let end = strs[strs.length - 1];
    let ans = "";

    if(strs[0] === ""){
        return "";
    }

    for(let i = 0; i<start.length; i++){
        if(start[i] === end[i]){
            and += start[i];
        }
        else break;
    }

    return ans;
}