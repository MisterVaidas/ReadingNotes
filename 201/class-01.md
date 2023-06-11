# Read: Class 01 Assignment

A lot of articles i read in this lecture, so i will try to discuss here
what i learned. Lets begin!

### Task 1: Compose a short poem describing how `HTTP` sends data between computers.

I have been asked to compose the poem, but i am not good compositor, as chatGPT,
so i will describe in other form, how it works. 

Here are the steps involved in how `HTTP` sends data between computers:

1. The user requests a resource from a web server.
2. The web server sends a response to the user's request.
3. The user's web browser interprets the response and displays the resource to the user.

There is more complex process, and more steps are involved, but these three steps
explains how generaly `HTTP` sends data between computers. 

### Task 2: Describe how `HTML`, `CSS`, and `JS` files are “parsed” in the browser.

Thanks God it's not poem this time. Here is the explanation:

When a web browser requests a web page, it first downloads the `HTML`, `CSS`, and `JavaScript` 
files that make up the page. The `HTML` file is parsed first, which means that the browser 
breaks it down into its constituent parts, such as elements, attributes, and text. The 
`CSS` files are then parsed, which means that the browser extracts the styles that are 
defined in the `CSS` and applies them to the elements in the HTML document. Finally, the 
`JavaScript` files are parsed, which means that the browser executes the `JavaScript` code.  

The browser parses the `HTML`, `CSS`, and `JavaScript` files in a top-down, left-to-right order. 
This means that the browser starts at the top of the HTML file and parses each line of 
code in order. If the browser encounters a tag that it doesn't recognize, it will ignore it.


### A Question: How can you find images to add to a Website?

There are many ways to find images to add to a website. Here are a few popular options:

* Free stock photo websites: These websites offer a wide variety of high-quality images that 
  can be used for free, both for commercial and non-commercial purposes. Some popular free stock 
  photo websites include Unsplash, Pexels, and Pixabay.
* Creative Commons websites: These websites offer images that are shared under Creative Commons 
  licenses. Creative Commons licenses allow for a variety of uses of the images, including 
  commercial use, as long as the appropriate attribution is given. Some popular Creative Commons 
  websites include Flickr and Wikimedia Commons.
* Your own photos: If you have your own photos that you would like to use on your website, you 
  can upload them to your website or use a photo hosting service like Flickr or Photobucket.

### A Question: How do you create a `String` vs a `Number` in JavaScript?

Here is a table explaining:

| Method                      | Example                            | Description                                             |
|-----------------------------|------------------------------------|---------------------------------------------------------|
| Using single or double quotes | `const str1 = "This is a string";`  | Creates a string                                        |
| Using the `String()` function | `const str2 = String("This is a string");` | Creates a string from a variable that contains a string |
| Using the `Number()` function | `const num1 = Number("10");`       | Creates a number from a variable that contains a number |

### A Question: What is a `Variable` and why are they important in JavaScript?

A variable is a named location in memory that can store a value. Variables are important in JavaScript 
because they allow us to store data and reuse it throughout the program. Without variables, we 
would have to write the same code over and over again, which would make code more difficult to 
read and maintain.

##### Lets move on to **Introduction to HTML**

### A Question: What is an `HTML` attribute?

An `HTML` attribute is a characteristic or property that is used to define the behavior or appearance of 
an `HTML` element. Attributes are added to `HTML` tags to provide additional information or instructions 
about the element. They are typically written as name-value pairs, where the name specifies the attribute, 
and the value provides the information associated with that attribute.

### Task 3: Describe the Anatomy of an `HTMl` element.

An `HTML` element is made up of three parts:

* Opening tag: The opening tag tells the web browser that we are starting a new element and to add it to 
  the document tree.
* Content: The content is the text or other elements that are contained within the element.
* Closing tag: The closing tag tells the web browser that the element is ending.

### A Question: What is the Difference between `<article>` and `<section>` element tags?

The `<article>` and `<section>` element tags are both used to define sections of content in HTML. However, 
there are some key differences between the two tags.
The key difference between `<article>` and `<section>` is that `<article>` is used for self-contained, 
standalone content that can be distributed independently, while `<section>` is used to group related 
content together within a document.

| Feature     | `<article>`                                      | `<section>`                                                               |
|-------------|------------------------------------------------|-------------------------------------------------------------------------|
| Purpose     | Defines self-contained content                 | Defines larger sections of content                                      |
| Reusability | Can be reused independently                    | Not necessarily reusable independently                                 |
| Example     | Blog post, news article, forum post            | Main content area of a web page, sidebar, footer                        |


### A Question: What Elements does a “typical” website include?





