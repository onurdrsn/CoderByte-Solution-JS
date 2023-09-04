/*
function Factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * Factorial(num - 1);
    }
}

function BracketCombinations(num) {
    return Factorial(2 * num) / (Factorial(num + 1) * Factorial(num));
}
*/
function BracketCombinations(num) {
    if (num === 0) {
        return 1;
    }

    const dp = new Array(num + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= num; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - j - 1];
        }
    }

    return dp[num];
}

// keep this function call here 
console.log(BracketCombinations(readline()));
