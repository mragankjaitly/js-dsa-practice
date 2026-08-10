 let permute = function(nums){
    let result = [];
    let current = [];

    let used = new Array(nums.length).fill(false);

    function backtrack(){
        if(current.length === nums.length){
            result.push([...current]);
            return;
        }
    

    for(let i =0; i<nums.length; i++){
        if(used[i]) continue;

        current.push(nums[i]);

        used[i] = true;

        backtrack();

        current.pop()
        used[i] = false;
    }
    }

    backtrack();

    return result;

 };