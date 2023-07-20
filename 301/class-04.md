# Readings: React and Forms

## React Docs - Forms

### What is a ‘Controlled Component’?

A controlled component is a React component that has its state and behavior controlled by the parent component. 
These components rely on props passed down from the parent component to update their state and behavior.

### Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.

We should update the state with the user's responses as soon as they enter them. This gives us the following benefits:

* We can validate the form data as the user enters it, which helps to prevent errors.
* We can provide feedback to the user as they enter the data, such as showing error messages or highlighting invalid fields.
* We can dynamically change the form based on the user's input, such as adding or removing fields.
* We can submit the form data to a server as soon as the user is finished entering it, which can improve performance.

### How do we target what the user is entering if we have an event handler on an input field?

We can target what the user is entering if we have an event handler on an input field by using the `event.target.value` property. The `event.target.value` property represents the current value of the input field.

***

## The Conditional (Ternary) Operator Explained

A ternary operator is a conditional operator that can be used to evaluate a condition and return one of two possible values depending on the outcome of the evaluation. The ternary operator is often used to make code more concise and readable.

The syntax of a ternary operator is as follows:

```
condition ? value_if_true : value_if_false
```

### Rewrite the following statement using a ternary statement:

```
if(x===y){
  console.log(true);
} else {
  console.log(false);
}

```

Here is the solution:

```
const result = x === y ? true : false;
console.log(result);

```

***

Created by Vaidas Simkus  
Please visit my [GitHub](https://github.com/MisterVaidas) profile.  
Resources used: Google, GoogleAI