# 201 Class 02 Assignment

### Why is it important to use semantic elements in our HTML?

* Accessibility: Sematic elements provide meaning and structure to the content, making it
  easier for assistive technologies like screen readers to interpret and convey the information
  to users with disabilities.
* Search engine optimization (SEO): Search engines rely on the structure and semantics of
  the `HTML` to understand the content of a web page. Using semantic elements can help search 
  engines better index and rank content.
* Future-proofing: Semantic elements makes code more resilent to changes in design and presentation.

### How many levels of headings are there in HTML?

`HTML` provides six levels of headings, which are represented by the `<h1>` to `<h6>` elements.

### What are some uses for the `<sup>` and `<sub>` elements?

The `<sup>` and `<sub>` elements are used to display superscript and subscript text, respectively.

* `<sup>` is used to denote superscript text, which is typically smaller and positioned above the 
  baseline. It is commonly used for mathematical exponents, footnotes, or to indicate a reference point.
* `<sub>` is used to denote subscript text, which is typically smaller and positioned below the 
  baseline. It is commonly used for chemical formulas, mathematical subscripts, or to indicate a footnote.

### When using the `<abbr>` element, what attribute must be added to provide the full expansion of the term?

When using the `<abbr>` element to define an abbreviation or acronym, we must add the `title` attribute 
to provide the full expansion of the term. The `title` attribute contains the full text that will be 
displayed as a tooltip when users hover over the abbreviation.

***

## Learning CSS

### What are ways we can apply CSS to our HTML?

There are several ways to apply CSS to HTML:

* Inline styles.
* Internal stylesheets.
* External stylesheets.

### Why should we avoid using inline styles?

* **Separation of concerns:** it makes code harder to read and maintain, especially as the project grows larger.
* **Code reusability:** inline styles cannot be easily reused across multiple elements or pages.
* **Specificity and maintainability:** Inline styles have higher specificity, meaning they override external or 
  internal stylesheets.
* **Collaboration:** inline styles make it harder for developers and designers to collaborate effectively.

### Review the block of code below and answer the following questions:

1. What is representing the selector?
2. Which components are the CSS declarations?
3. Which components are considered properties?

  ``` 
  h2 {
     color: black;
     padding: 5px;
   }
   ```
* The selector is represented by `h2`. It targets all `<h2>` elements in the HTML document.
* The CSS declarations are `color: black;` and `padding: 5px;`. They specify the styles to be applied to the 
  selected `<h2>` elements.
* Within each declaration, `color` and `padding` are considered properties.

***

## Learn JS

### What data type is a sequence of text enclosed in single quote marks?

In JavaScript, a sequence of text enclosed in single quote marks `(' ')` or double quote marks `(" ")` is considered a string. 
JavaScript allows the use of both single quotes and double quotes to define strings.

### List 4 types of JavaScript operators.

Here are four types of JavaScript operators:

* Arithmetic Operators
* Comparison Operators
* Logical Operators
* Assignment Operators

### Describe a real world Problem you could solve with a Function.

A real-world problem that can be solved using a function is calculating the total cost of items in a shopping cart. 
Let's consider an e-commerce website where users can add multiple items to their shopping carts. Each item has a 
price associated with it. To calculate the total cost, we can define a function that takes an array of items and 
returns the sum of their prices.

## Making decisions in our code

### An if statement checks a __ and if it evaluates to ___, then the code block will execute.

An if statement checks a `condition` and if it evaluates to `true`, then the code block will execute.

### What is the use of an `else if`?

The "else if" statement is used in programming to provide an alternative condition to check if the initial "if" 
condition evaluates to false. It allows for multiple conditions to be evaluated sequentially, providing different 
code blocks to be executed based on the condition that evaluates to true.

### List 3 different types of comparison operators.

Here is three different types of comparison operators:

* Equality Operator (==)
* Greater Than Operator (>)
* Not Equal Operator (!=)

### What is the difference between the logical operator && and ||?

The `&&` operator returns `true` if both of its operands are `true`. If either operand is `false`, the `&&` 
operator returns `false`.
The `||` operator returns `true` if either of its operands is `true`. If both operands are `false`, the `||` 
operator returns `false`.

***

Vaidas Simkus. Please visit my [GitHub](https://github.com/MisterVaidas) profile. 
