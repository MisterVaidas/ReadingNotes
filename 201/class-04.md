# Readings: HTML Links, JS Functions, and Intro to CSS Layout

## HTML

### To create a basic link, we wrap text or other content inside what element?

To create a basic link in HTML, we use the `<a>` element (anchor element). We wrap the text or other content 
that we want to turn into a link inside this element. Here's an example:

```
<a href="https://www.example.com">Click here</a>

```

### The `href` attribute contains what information?

The `href` attribute contains the URL of the page the link goes to. It specifies the target of the link. 

### What are some ways we can ensure links on our pages are accessible to all readers?

Here are some ways to ensure links on your pages are accessible to all readers:

* **Use descriptive link text.**
* **Use a consistent style for links.**
* **Make sure links are visible.**
* **Use alt text for images that are links.**
* **Testing links.**
* **Use semantic markup.**

***

## CSS Layout

### What is meant by “normal flow”?

In CSS, "normal flow" refers to the default positioning and layout behavior of elements on a web page. When 
elements are in the normal flow, they are rendered one after another in the order they appear in the HTML 
markup, without any explicit positioning or manipulation.

### What are a few differences between block-level and inline elements?

Here is a table that summarizes the differences between block-level and inline elements:

| Property                     | Block-level Elements | Inline Elements |
|------------------------------|----------------------|-----------------|
| Start on new line            | Yes                  | No              |
| Have margins and padding     | Yes                  | No              |
| Can have width and height set| Yes                  | No              |
| Affected by float property   | Yes                  | No              |

### `___` positioning is the default for every html element.

`Static` positioning is the default for every HTML element.

### Name a few advantages to using absolute positioning on an element.

Here are a few advantages to using absolute positioning on an element:

* Absolute positioning allows us to position an element anywhere on the page.
* Absolute positioning is not affected by the width or height of the parent element.
* Absolute positioning is relatively easy to implement.

### What is a key difference between fixed positioning and absolute positioning?

Here is a table that summarizes the key differences between fixed positioning and absolute positioning:

| Property                 | Fixed Positioning      | Absolute Positioning  |
|--------------------------|------------------------|-----------------------|
| Position                 | `position: fixed;`     | `position: absolute;` |
| Relative to              | Viewport               | Nearest positioned ancestor |
| Scrolls with page        | No                     | Yes                   |
| Common uses              | Navigation bars, footers, pop-up windows | Pop-up windows, modal dialogs, floating elements |

***

## Learn JS

### Describe the difference between a function declaration and a function invocation.

**Function declaration** is a statement that defines a function. It has the following syntax:

```
function functionName(parameters) {
  // function body
}
```
The function name is the name of the function, and the parameters are the names of the arguments that the function can take. 
The function body is the code that the function executes when it is called.

Function invocation is the act of calling a function. It has the following syntax:

```
functionName(arguments);
```
The function name is the name of the function that you want to call, and the arguments are the values that you want to 
pass to the function.

The main difference between a function declaration and a function invocation is that a function declaration defines a function, 
while a function invocation calls a function.

### What is the difference between a parameter and an argument?

**Parameter** is a variable defined in the function declaration. It is the placeholder for the value that will be passed to the 
function when it is called.
**Argument** is the value that is passed to the function when it is called. It is the value that is assigned to the parameter.

Here is a table that summarizes the difference between parameters and arguments in JavaScript:

| Property          | Parameter                      | Argument                      |
|-------------------|--------------------------------|-------------------------------|
| Defined in        | Function declaration           | Function call                 |
| Placeholder for   | Value passed to function       | Value assigned to parameter   |
| Type              | Variable                       | Value                         |

***

## Pair programing

### Pick 2 benefits to pair programming and reflect on how these benefits could help you on your coding journey.

Here are two benefits of pair programming and how they could help me on my coding journey:

1. **Improved communication skills:** Pair programming requires me to communicate effectively with my partner. This can help 
   me to improve my communication skills, which are essential for any software developer.
2. **Increased learning:** Pair programming is a great way to learn new things. I can learn from my partner's experience, and 
   i can also learn by teaching my partner what i know.

   ***

   Created by Vaidas Simkus  
   Please visit my [GitHub](https://github.com/MisterVaidas) profile