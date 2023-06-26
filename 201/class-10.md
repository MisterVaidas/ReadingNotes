# Readings: Debugging

## What Went Wrong? Troubleshooting JavaScript.

### Name some key differences between a Syntax Error and a Logic Error.

Here are some key differences between a syntax error and a logic error in JavaScript:

* **Syntax errors** are caused by mistakes in the structure of the code. For example, a syntax error might occur 
  if we forget a semicolon or if we use the wrong operator. The JavaScript compiler will detect syntax errors 
  and will not allow the code to run.

* **Logic errors** are caused by mistakes in the logic of the code. For example, a logic error might occur if we forget 
  to add a condition to an if statement or if we use the wrong variable in an expression. Logic errors will not be 
  detected by the JavaScript compiler, so the code will run, but it will not produce the desired output.

Here is a table that summarizes the key differences between syntax errors and logic errors:

| Feature        | Syntax Error                      | Logic Error                                       |
|----------------|----------------------------------|---------------------------------------------------|
| Cause          | Mistakes in the structure of the code | Mistakes in the logic of the code             |
| Detection      | Detected by the JavaScript compiler | Not detected by the JavaScript compiler       |
| Behavior       | The code will not run              | The code will run, but it will not produce the desired output |
| Debugging      | Easy to debug, because the error message will point to the line of code that contains the error | Difficult to debug, because the error message will not be helpful |


### List a few types of errors that you have encountered in past lab assignments and explain how you were able to correct them.

In the past lab assignment i made few syntax errors which was easy to fix, because of console shows where exactly is an error.  
And also i made few logic errors, which was much harder to detect. Then i have to go through the code, and find it.  

### How will this topic continue to influence your long term goals?

The topic of debugging will continue to influence my long-term goals in a few ways:

* **It will help me to become a better programmer.** By learning how to debug effectively, I will be able to write more reliable and 
  efficient code. This will make me a more valuable asset to any team.
* **It will help me to solve problems more effectively.** The skills that I learn in debugging can be applied to other areas of problem-solving. 
  For example, I can use debugging techniques to troubleshoot hardware problems or to debug business processes.
* **It will help me to become a more resilient learner.** Debugging can be frustrating at times, but it is also a valuable learning experience. 
  By learning how to debug effectively, I will become more resilient in the face of challenges.  

In the long run, I hope to use my skills in debugging to help me to achieve my goal of becoming a successful software engineer.

***

## The JavaScript Debugger.

### How would you describe the JavaScript Debugger tool and how it works to someone just starting out in software development?

The JavaScript Debugger tool is a powerful tool that can help to identify and fix bugs in JavaScript code. It allows us to step through 
code line by line, to see the values of variables, and to set breakpoints. This can be very helpful for debugging logic errors, which are 
errors that occur when the code runs but are not detected by the JavaScript compiler.  
The JavaScript Debugger tool is a powerful tool that can help to identify and fix bugs in JavaScript code. It is a valuable tool for any 
software developer, but it is especially helpful for beginners.

### Define what a breakpoint is.

A breakpoint is an intentional stopping or pausing place in a program.  
More generally, a breakpoint is a means of acquiring knowledge about a program during its execution. Breakpoints are a valuable tool for debugging 
programs. They can be used to track down logic errors, to understand how the program is working, and to test the behavior of the program under 
different conditions.

### What is the call stack?

The call stack is used to keep track of the current execution context of a program. When a function is called, its stack frame is pushed onto the 
call stack. This stack frame contains information about the function, such as its name, its parameters, and its local variables. When the function 
returns, its stack frame is popped off the call stack.  
The call stack can be used to debug programs. For example, if a program crashes, the call stack can be used to track down the line of code where the 
crash occurred. The call stack can also be used to understand how a program is working. For example, if we are trying to understand how a function 
works, we can look at its stack frame to see what parameters it was called with and what local variables it has.

***

Created by Vaidas Simkus  
Please visit my [GitHub](https://github.com/MisterVaidas) profile.