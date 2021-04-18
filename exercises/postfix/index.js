function evaluate(expression) {
    const list = expression.split(' ');

    const stack = [];
    
    for (let item of list) {
        if ('+-*/'.includes(item)) {
            let secondNum = stack.pop();
            let firstNum = stack.pop();

            switch (item) {
                case '+':
                    stack.push(firstNum + secondNum);
                    break;
                case '-':
                    stack.push(firstNum - secondNum);
                    break;
                case '*':
                    stack.push(firstNum * secondNum);
                    break;
                case '/':
                    stack.push(firstNum / secondNum);
            }
        } else { // number
            stack.push(parseInt(item))
        }
    }

    if (stack.length === 1)
        return stack.pop();
    throw new Exception('Something went wrong');
}

module.exports = { evaluate }