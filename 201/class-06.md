# Readings: Problem Domain, Objects, and the DOM

## JavaScript Object Basics

### How would you describe an object to a non-technical friend you grew up with?

* **Objects are like containers.** They can hold different kinds of data, like numbers, strings, arrays, and even 
  other objects.
* **Objects have properties.** Properties are like labels for the data that's stored in an object. For example, a person 
  object might have a property called "name" that stores the person's name.
* **Objects can have methods.** Methods are functions that are associated with an object. For example, a person object might 
  have a method called "greet" that prints a greeting message.

### What are some advantages to creating object literals?

Here are some advantages to creating object literals in JavaScript:

* **They are concise and easy to read.** Object literals can be written in a single line, which makes them easier to read and 
  understand than other ways of creating objects.
* **They are flexible.** Object literals can be used to create objects with any number of properties and methods. This makes them 
  very versatile and can be used to represent a wide variety of data structures.
* **They are efficient.** Object literals are created by the JavaScript engine at runtime, which means that they are not stored as 
  global objects. This makes them more efficient in terms of memory usage.
* **Quick and easy initialization.** With object literals, we can initialize objects with their properties and values right away. 

### How do objects differ from arrays?

Here is a table that summarizes the key differences between objects and arrays:

| Feature      | Objects                   | Arrays                  |
|--------------|---------------------------|-------------------------|
| Order        | Unordered                 | Ordered                 |
| Properties   | Named                     | Numbered                |
| Methods      | Can have                  | Cannot have             |
| Flexibility  | More flexible             | Less flexible           |

### Give an example for when you would need to use bracket notation to access an object’s property instead of dot notation.

There are scenarios where we would need to use bracket notation to access an object's property instead of dot notation. 
Here's an example:  

Let's say we have an object representing a person's information with properties like "name," "age," and "address." In some 
cases, the property names may contain special characters, start with a number, or have spaces. In such situations, dot 
notation would not work, and we would need to use bracket notation.

### Evaluate the code below. What does the term `this` refer to and what is the advantage to using `this`?

```
const dog = {
  name: 'Spot',
  age: 2,
  color: 'white with black spots',
  humanAge: function (){
    console.log(`${this.name} is ${this.age*7} in human years`);
  }
}
```
The term `this` refers to the object itself, in this case, the `dog` object. Inside the `humanAge`method, `this`
is used to access the properties of the `dog` object.  
The advantage of using `this` is that ir allows us to access the properties and methods of an object within its own 
context. It provides a way to refer to the current instance of the object that the code is executing on.

## Introduction To The DOM

### What is the DOM?

DOM stands for Document Object Model. The DOM is powerful tool that allows developers to interact with web pages in 
a programmatic way. Here is some benefits using DOM:

* It allows programs to dynamically access and update the content, structure, and style of a document.
* It is a cross-platform and language-independent interface.
* It is supported by all major web browsers.
* It is powerful tool for developing web applications.

### Briefly describe the relationship between the DOM and JavaScript.

JavaScript uses the DOM to interact with the HTML and CSS of a web page. When a JavaScript program is executed, it 
creates a DOM object for the current web page. The DOM object provides a way for the JavaScript program to access 
and manipulate the HTML and CSS of the web page.  

This JavaScript code uses DOM to change the text content of an HTML element:

```
let element = document.getElementById("myElement");
element.textContent = "This is my new text content";
```
The DOM and JavaScript are two essentil technologies for creating interactive web pages.

***

Created by Vaidas Simkus  
Please visit my [GitHub](https://github.com/MisterVaidas)




