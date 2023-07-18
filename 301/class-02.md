# Reading: State and Props

## React lifecycle

### Based off the diagram, what happens first, the `render` or the `componentDidMount`?

Based on the diagram, `render()` happens first, followed by `componentDidMount()`.

### What is the very first thing to happen in the lifecycle of React?

The very first thing to happen in the lifecycle of React is the `constructor()` method. This method is called when 
the component is first created, and it is a good place to initialize state or set up any other initial configuration.

### Put the following things in the order that they happen: `componentDidMount`, `render`, `constructor`, 
### `componentWillUnmount`, `ReactUpdates`.

The order of the things that happen is as follows:

1. Constructor
2. Render
3. React Updates
4. componentDidMount
5. componentWillUnmount

### What does `componentDidMount` do?

The `componentDidMount()` lifecycle method is called after the component has been rendered and inserted into the DOM. 
It is a good place to perform any actions that need to be done after the component is visible, such as making API 
requests or subscribing to events.

***

## React State Vs Props

### What types of things can you pass in the props?

We can pass any JavaScript value as a prop, including strings, numbers, booleans, objects, arrays, and functions.

### What is the big difference between props and state?

Props and state are two important concepts in React. They are both used to pass data to components, but they are used 
in different ways.

Here is a table that summarizes the differences between props and state:

| Feature   | Props                                  | State                                   |
|-----------|----------------------------------------|-----------------------------------------|
| Origin    | External to the component              | Internal to the component               |
| Mutability| Immutable                              | Mutable                                 |
| Management| Managed by the parent component        | Managed by the component itself         |
| Passing   | Passed to child components             | Not passed to child components          |


### When do we re-render our application?

A React application re-renders when the following things happen:

* **State changes:** When the state of a component changes, the component will re-render.
* **Props change:** When the props of a component change, the component will re-render.
* **Parent component re-renders:** When the parent component of a component re-renders, the child component will 
    also re-render.
* **User interaction:** When the user interacts with the application, the component may re-render.

### What are some examples of things that we could store in state?

Here are some examples of things that we could store in state:

* User input.
* Application state.
* Data from an API.
* Configuration data.

***

Created by Vaidas Simkus  
Please visit my [GitHub](https://github.com/MisterVaidas) profile.