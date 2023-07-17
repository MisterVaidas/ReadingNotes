# Readings: Introduction to React and Components

## Component-Based Architecture

### What is a “component”?

In React, a component is a small, reusable piece of code that can be combined to create complex UIs. Components are the 
building blocks of React applications. They are responsible for rendering the UI, handling user input, and managing state.

Here is an example of component:

```
function Button(props) {
  return (
    <button type="button" onClick={props.onClick}>
      Click me!
    </button>
  );
}

```

### What are the characteristics of a component?

Here are some of the characteristics of a component:

* **Reusable:** Components can be reused in different parts of application, which can save time and avoid code dublication.
* **Isolated:** Components are isolated units of code, which makes them easier to understand and maintain.
* **Encapsulated:** Components ancapsulate their own state and logic, which makes them easier to test and debug.
* **Composable:** Components can be nested, so we can create complex UI by composing smaller, more manageable components.
* **Declarative:** Components are declarative, which means that they describe what the UI should look like, rather than how 
    it should be implemented. 
* **Event-driven:** Components respond to events, such as user input, by updating their state or rendering new UI.


### What are the advantages of using component-based architecture?

Component-based architecture is a software design pattern that breaks down a software application into smaller, reusable 
components. Each component is responsible for a specific task or feature, and they can be combined to create larger, more 
complex applications.

There are many advantages to using component-based architecture, including:

* **Reusability:** Components can be reused in different parts of an application, which can save time and effort.
* **Maintainability:** Components are isolated units of code, which makes them easier to understand and maintain.
* **Extensibility:** Components can be extended to add new functionality, which makes them flexible and adaptable.
* **Testability:** Components can be tested independently, which makes it easier to find and fix bugs.
* **Scalability:** Component-based architecture can be scaled easily to accommodate larger applications.


***

## What is Props and How to Use it in React

### What is “props” short for?


In React, `props` are short for **properties**. They are arbitrary inputs that can be used to customize the output of a 
component.

### How are props used in React?

Props are passed from the parent component to the child component, and they can be accessed in the child component's 
render() method.

Here is an example of how to use `props` in React:

```
function Button(props) {
  return (
    <button type="button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

```

### What is the flow of props?

The flow of props in React is unidirectional. This means that props can only flow from parent components to child components. 
This is a design decision that was made to make React applications easier to understand and maintain.

***

Created by Vaidas Simkus  
Please visit my [GitHub](https://github.com/MisterVaidas) profile.