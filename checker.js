let matchingParenthesis = function (str) {
    let stack = [];
    let map = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }

    for (let i = 0; i < str.length; i++) {

        // If character is an opening brace add it to a stack
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i]);
        }

        // If character is a closing parenthesis, pop from the stack, which reduces the length of the stack each time a closing parenthesis is encountered.
        else {
            let last = stack.pop();

            // If the popped element from the stack, the last opening parenthesis doesn’t match the corresponding closing parenthesis in the map, then return false
            if (str[i] !== map[last]) {return false};
        }
    }

    // By completing  of the for loop after checking all the parenthesis of the str, at the end, if the stack is not empty then break
        if (stack.length !== 0) {return false};

    return true;
}

console.log(matchingParenthesis("(){}")); // returns true
console.log(matchingParenthesis("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")); // returns true
console.log(matchingParenthesis ("({(()))}}"));  // returns false