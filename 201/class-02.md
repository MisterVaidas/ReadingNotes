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

