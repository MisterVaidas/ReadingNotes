# Readings: Functional Programming

## Functional Programming Concepts

### What is functional programming?

Here is an explanation of functional programming:

* **Functional programming** is a way of writing code that focuses on **functions** and **data**.

* **Functions** are like mathematical functions, they take some input and produce some output.

* **Data** is immutable, meaning that it cannot be changed once it is created.

* This makes functional programming code very clear and easy to understand.

* It is also **very efficient**, because it does not have to worry about updating the state of the program.

### What is a pure function and how do we know if something is a pure function?

A pure function is a function that has the following properties:

* **It does not modify any state outside of its own scope**. This means that the function does not change any global variables, or any variables that are passed to it as arguments.

* **It always returns the same output given the same input**. This means that the function is deterministic, and it is not affected by any external factors.

* **It has no side effects**. This means that the function does not do anything other than return a value. It does not print to the console, it does not make network requests, and it does not modify any files.

### What are the benefits of a pure function?

Pure functions have many benefits, including:

* **They are easier to understand and reason about**. This is because the behavior of a pure function is completeley determined by its input and output.

* **They are more reusable**. This is because pure functions do not depend on any external state, so they can be easily used in different contexts.

* **They are easier to test**. This is because pure functions have no side effects, so you can test them in isolation.

* **They can be easily parallelized**. This is because pure functions do not modify any shared state, so they can be executed independently of each other.

### What is immutability?

Immutability is the property of an object that cannot be changed once it has been created. This means that the object's state cannot be modified, and any attempts to do so will result in a new object being created.

### What is Referential transparency?

Referential transparency is a property of a function that allows it to be replaced by its equivalent output.

***

## Node JS Tutorial for Beginners #6 - `Modules` and `require()`

### What is a module?

Modules are a way to organize code in Node.js. They allow us to break code up into smaller, more manageable pieces, and they make it easier to reuse code.

### What does the word ‘require’ do?

It is used as a keyword that tells the program to load a module. The module can be a JavaScript file, a Node.js module, or a third-party library.

### How do we bring another module into the file the we are working in?

To bring another module into the file we are working in, we can use the `require()` function. The `require()` function takes the name of the module as its argument, and it returns the module object. The module object contains all of the code that is defined in the module file.

### What do we have to do to make a module available?

To make a module available, we need to export it from the module file. We can do this by using the `module.exports` property.

***

Created by Vaidas Simkus.  
Please visit my [Github](https://github.com/MisterVaidas) profile.  
Reasources and tools used: Google, GoogleAI.