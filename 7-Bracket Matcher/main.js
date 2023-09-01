function BracketMatcher(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(str[i]);
        } else if (str[i] === ')') {
            if (stack.length > 0)
                stack.pop();
            else
                return 0;
        }
    }
    return stack.length === 0 ? 1 : 0;
}

// keep this function call here 
console.log(BracketMatcher(readline()));
