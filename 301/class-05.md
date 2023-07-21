# Readings: Putting it all together

## React Docs - Thinking in React

### What is the `single responsibility principle` and how does it apply to components?

The Single Responsibility Principle (SRP) is a software design principle that states that every module, class, or function should have only one reason to change. This means that a component should only be responsible for one thing, and if it needs to change, it should only need to change for one reason.  
The SRP can be applied to components in React by ensuring that each component has a single, well-defined responsibility. For example, a component might be responsible for displaying a specific section of the UI, processing user input, or performing API calls to retrieve data.

### What does it mean to build a ‘static’ version of your application?

A static version of application is a version that is compiled into static files that can be served directly to the user's browser. This means that there is no server-side processing required to render the application.

### Once you have a static application, what do you need to add?

Once we have a static application, there are a few things we need to add to make it work:

* **A server:** A static application needs to be hosted on a server so that it can be served to users.

* **A domain name:** A domain name is the address of your application on the internet. You can purchase a domain name from a domain registrar.

* **SSL certificate:** An SSL certificate is a security certificate that encrypts the traffic between your application and the user's browser.

### What are the three questions you can ask to determine if something is state?

Here are three questions we can ask to determine if something is state:

1. Can it be observed?

State is something that can be observed. This means that it can be measured or counted. For example, the number of items in a shopping cart is a state. It can be observed by counting the number of items in the cart.

2. Can it change?

State can change over time. This means that it can be modified or updated. For example, the number of items in a shopping cart can change if items are added or removed from the cart.

3. Is it relevant to the system?

State is relevant to the system if it affects the behavior of the system. For example, the number of items in a shopping cart is relevant to the system because it affects the total price of the items in the cart.

### How can you identify where state needs to live?

Here is how we can identify where state needs to live:

* **Identify the components that need to access the state.** The first step is to identify the components that need to access the state. These are the components that will need to use the state to render their UI or to perform actions.

* **Identify the components that need to mutate the state.** The next step is to identify the components that need to mutate the state. These are the components that will need to change the state, such as when a user clicks a button or enters text into a form.

* **Determine whether the state is local or global.** Once we have identified the components that need to access or mutate the state, we need to determine whether the state is local or global.

    - **Local state:** Local state is state that is only relevant to a single component. This type of state is typically stored in the component's state property.

    - **Global state:** Global state is state that is relevant to the entire application. This type of state is typically stored in a global state management library, such as Redux or MobX.

* **Decide where the state should live.** Once we have determined whether the state is local or global, we need to decide where the state should live.

    - **Store local state in the component.** If the state is local, then you should store it in the component's state property.

    - **Store global state in a state management library.** If the state is global, then you should store it in a state management library.

***

## Higher-Order Functions

### What is a “higher-order function”?

A higher-order function is a function that takes another function as an argument or returns a function as a result. Higher-order functions are a powerful tool that can be used to improve the readability, flexibility, and reusability of the code.

### Explore the `greaterThan` function as defined in the reading. In your own words, what is line 2 of this function doing?

This is the function in the reading:

```
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true

```

The line `return m => m > n;` is creating a new function. This new function takes one argument, `m`, and returns `true` if `m` is greater than `n`. The new function is then assigned to the variable `greaterThan10`.

### Explain how either `map` or `reduce` operates, with regards to higher-order functions.

Here is how i can explain this:

```
const numbers = [1, 2, 3, 4, 5];

const strings = numbers.map(number => number.toString());

console.log(strings); // ["1", "2", "3", "4", "5"]

```

This code uses the `map()` function to transform an array of numbers into an array of strings.

Here is an example with `reduce()`:

```
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);

console.log(sum); // 15

```

This code uses the `reduce()` function to calculate the sum of the numbers in an array.

***

Created by Vaidas Simkus  
Please visit my [GitHub](https://github.com/MisterVaidas) profile.  
Resources used: Google, GoogleAI.