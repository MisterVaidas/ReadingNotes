# Readings: Passing Functions as Props

## React Docs - lists and keys

### What does `.map()` return?

The `.map()` method returns a new array containing the results of calling a provided function on each element 
in the calling array. The callback function is called once for each element in the array, and the results of 
the callback function are stored in the new array.

### If I want to loop through an array and display each value in JSX, how do I do that in React?

In React, we can use the JavaScript map function to loop through an array and display each value in JSX. 
By using `{myArray.map(...)}` within the JSX code, React will execute the map function, loop through each value 
in the array, and return a new array of JSX elements.

### Each list item needs a unique ____.

Each list item needs a unique `key`.

### What is the purpose of a key?

The purpose of a key is to give each list item a unique identifier. React uses the key to track which list items 
have changed when the state of the component changes.

***

## The Spread Operator

### What is the spread operator?

The spread operator is a JavaScript syntax that allows you to expand an iterable object, such as an array or an object, 
into its elements. The spread operator is represented by three dots `(...)`.

### List 4 things that the spread operator can do.

Here are 4 things that the spread operator can do:

1. **Expand arrays:** The spread operator can be used to expand an array into its elements. This can be used to create a 
new array that contains the elements of the original array, or to add elements to an existing array.

```
const arr = [1, 2, 3];

const newArr = [...arr, 4, 5, 6];

console.log(newArr); // [1, 2, 3, 4, 5, 6]

```

2. **Expand objects:** The spread operator can be used to expand an object into its properties. This can be used to create a 
new object that contains the properties of the original object, or to add properties to an existing object.

```
const obj = {
  name: 'John Doe',
  age: 30,
};

const newObj = {
  ...obj,
  address: '123 Main Street',
};

console.log(newObj); // { name: 'John Doe', age: 30, address: '123 Main Street' }

```

3. **Pass props to React components:** The spread operator can be used to pass an array or object of props to a React component.

```
const MyComponent = ({ name, age, address }) => {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>You are {age} years old.</p>
      <p>Your address is {address}.</p>
    </div>
  );
};

const props = {
  name: 'John Doe',
  age: 30,
  address: '123 Main Street',
};

const element = <MyComponent {...props} />;

document.body.appendChild(element);

```

4. **Use as a rest parameter:** The spread operator can be used as a rest parameter in a function. 

```
function myFunction(...args) {
  console.log(args); // [1, 2, 3, 4, 5]
}

myFunction(1, 2, 3, 4, 5);

```

### Give an example of using the spread operator to combine two arrays.

Here is an example of using the spread operator to combine two arrays:

```
const fruits1 = ['apple', 'banana', 'orange'];
const fruits2 = ['grape', 'melon', 'mango'];

const combinedFruits = [...fruits1, ...fruits2];

console.log(combinedFruits); // ['apple', 'banana', 'orange', 'grape', 'melon', 'mango']

```

### Give an example of using the spread operator to add a new item to an array.

Here is an example of using the spread operator to add a new item to an array:

```
const fruits = ['apple', 'banana', 'orange'];

const newFruits = [...fruits, 'grape'];

console.log(newFruits); // ['apple', 'banana', 'orange', 'grape']

```

### Give an example of using the spread operator to combine two objects into one.

Here is an example of using the spread operator to combine two objects into one:

```
const obj1 = {
  name: 'John Doe',
  age: 30,
};

const obj2 = {
  address: '123 Main Street',
  phone: '123-456-7890',
};

const combinedObj = { ...obj1, ...obj2 };

console.log(combinedObj); // { name: 'John Doe', age: 30, address: '123 Main Street', phone: '123-456-7890' }

```

***

## How to Pass Functions Between Components

### In the video, what is the first step that the developer does to pass functions between components?

The first step he do, is defining the function in the parent component.

### In your own words, what does the `increment` function do?

The `increment` function can be used to increment any number, including integers, floats, and even strings.

### How can you pass a method from a parent component into a child component?

To pass a method from a parent component to a child component in React, we can pass the method as a prop to 
the child component.

### How does the child component invoke a method that was passed to it from a parent component?

When a method is passed from a parent component to a child component in React, the child component can use it 
like a regular function. The parent component defines the method and passes it to the child component as a prop. 
The child component can then call the method by using `props.methodName()`. This way, the child component can 
trigger the code inside the method that was defined in the parent component.

***

Created by Vaidas Simkus  
Please visit my [GitHub](https://github.com/MisterVaidas) profile.  
Resources used: Google, GoogleAI