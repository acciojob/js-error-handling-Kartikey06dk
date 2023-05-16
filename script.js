//your code here

class OutOfRangeError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = "Expression should only consist of integers and +-/* characters and not <arg>";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = "Expression should not have an invalid combination of expression";
  }
}

function evalString(expression) {
  if (expression.match(/[-+*/]{2}/g)) {
    throw new InvalidExprError();
  }

  if (expression.match(/^[+*/]/)) {
    throw new SyntaxError("Expression should not start with an invalid operator");
  }

  if (expression.match(/[-+*/]$/)) {
    throw new SyntaxError("Expression should not end with an invalid operator");
  }

  const numbers = expression.split(/[-+*/]/);
  for (let i = 0; i < numbers.length; i++) {
    if (!/^[-+]?\d+$/.test(numbers[i].trim())) {
      throw new OutOfRangeError();
    }
  }

  const operators = expression.split(/\d+/).filter(Boolean);
  for (let i = 0; i < operators.length; i++) {
    if (!/[-+*/]/.test(operators[i].trim())) {
      throw new OutOfRangeError();
    }
  }

  // Evaluate the expression
  const result = eval(expression);
  return result;
}

