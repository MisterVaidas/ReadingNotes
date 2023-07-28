# Readings: In memory storage

## Understanding the JavaScript Call Stack

### What is a ‘call’?

A "call" in JavaScript is when a function is invoked. This can happen explicitly, when you call a function by name, or implicitly, when a function is called from within another function.

### How many ‘calls’ can happen at once?

In JavaScript, only one "call" can happen at a time.

### What does LIFO mean?

LIFO stands for Last In, First Out. It is a data structure that follows the principle of processing the most recently added element first.

### Draw an example of a call stack and the functions that would need to be invoked to generate that call stack.

Here is an example of a call stack and the functions that would need to be invoked to generate that call stack:

```
1. main()
2. factorial()
3. factorialHelper()
```

To generate this call stack, the following functions would need to be invoked:

* `main()`
* `factorial()`
* `factorialHelper()`

### What causes a Stack Overflow?

A stack overflow is a type of error that occurs when a program tries to use more memory than is available on the stack.

***

## JavaScript error messages

### What is a ‘reference error’?

A reference error is a type of error that occurs in JavaScript when a variable is referenced that does not exist.

Here is an example of a JavaScript code that will cause a reference error:

```
let myVariable;

console.log(myVariable); // This will cause a ReferenceError because myVariable has not been defined yet.
```

### What is a ‘syntax error’?

A syntax error is a type of error that occurs in JavaScript when the code does not follow the correct syntax. This can happen for a number of reasons, such as:

* Missing or incorrect punctuation.
* Incorrect keywords or operators.
* Typos.

### What is a ‘range error’?

A range error is a type of error that occurs in JavaScript when a value is not within the allowed range of values for a particular operation. This can happen for a number of reasons, such as:

* The value is too small or too large.
* The value is not of the correct type.
* The value is not within the allowed range for a particular function.

### What is a ‘type error’?

In JavaScript, a type error is an error that occurs when a value is not of the expected type. This can happen for a number of reasons, such as:

* A variable is assigned a value of the wrong type.
* A function is called with arguments of the wrong type.
* An operator is used with operands of the wrong type.

### What is a breakpoint?

A breakpoint is a point in the code where the debugger will stop execution. This allows to inspect the values of variables, step through the code line by line and see how code is working.

### What does the word ‘debugger’ do in your code?

The word `debugger` is a special comment that tells the debugger to stop execution at that point. This allows to inspect the values of variables, step through the code line by line, and see how code is working.

In JavaScript, the debugger keyword can be used to set a breakpoint in the source code. To set a breakpoint in the source code, we can use a special comment, such as debugger;. For example:

```
let myVariable = 10;

debugger; // This will set a breakpoint at this line

console.log(myVariable);
```

***

Created by Vaidas Simkus.  
Please visit my [GitHub](https://github.com/MisterVaidas) profile.  
Reasources and tools used: Google, GoogleAI.