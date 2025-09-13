// Day 4

// Problem 5:Longest Consecutive Sequence

function consecutiveElements(arr) {
    arr.sort((a, b) => a - b);

    let longest = 1;
    let currentStreak = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            continue; // skip duplicates
        }
        if (arr[i] === arr[i - 1] + 1) {
            currentStreak++; // consecutive
        } else {
            longest = Math.max(longest, currentStreak);
            currentStreak = 1; // reset streak
        }
    }

    return Math.max(longest, currentStreak);
}

console.log(consecutiveElements([100,4,200,1,3,2]));
console.log(consecutiveElements([0,3,7,2,5,8,4,6,0,1]));