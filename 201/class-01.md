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

A typical website will include the following elements:

* A header: The header is the topmost part of a web page and typically contains the website's logo, name, 
  and navigation menu.
* A nav bar: Located in the top or side of a website, the navigation bar provides links to different pages 
  or sections of the website.
* A main content area: This is the main body of the website where the primary content is displayed. It may 
  include text, images, videos, and other media.
* A sidebar: The sidebar is a vertical column that runs alongside the main content area. It can be used 
  for displaying additional information, such as a search bar, social media links, or a contact form.
* A footer: The footer is the bottommost part of a web page and often contains copyright information, 
  contact details, and social media links.

### A Question: How does metadata influence Search Engine Optimization?

Metadata is data that provides information about other data. In the context of websites, metadata is 
information about a web page that is not visible to users. This information can be used by search engines 
to index websites and rank them in search results.
The title tag is the most important piece of metadata for SEO. It is the text that appears in the title 
bar of a web browser and in search results. The title tag should be descriptive and informative, and 
should include the main keywords that you want your website to rank for.

### A Question: How is the `<meta>` HTML tag used when specifying metadata?

The `<meta>` tag is an important tool for providing information about web pages. By using the `<meta>` tag, 
you can help search engines, browsers, and other software to understand your pages and how they should 
be displayed.
The `<meta>` tag has two attributes:

* name: The name attribute specifies the name of the metadata.
* content: The content attribute specifies the value of the metadata.

***

## How to start to design a website?

### A Question: What is the first step to designing a Website?

The first step to designing a website is to define our goals. What do we want our website to achieve? 
Do we want to sell products, provide information, or build a community? Once we know your goals, we 
can start to plan the content and structure of the website.

### A Question: What is the most important question to answer when designing a Website?

When designing a website, there are several important questions to consider. While the significance of 
each question may vary depending on the specific context and goals of the website, one crucial question 
stands out as particularly important:

**What is the primary goal or purpose of the website?**

***

## Semantics

### A Question: Why should you use an `<h1>` element over a `<span>` element to display a top level heading?

`HTML` elements are not just presentational instructions, but they have semantic meanings too. That is, 
each tag indicates the type and importance of the content within. Here are some reasons why you should 
use an `<h1>` element over a `<span>` element for a top level heading:

1. **SEO**: Search engines like Google use HTML tags to understand the structure and relevance of your web 
     page content. The `<h1>` tag is especially important because it is considered as a strong indicator of 
     the page's main topic. Using `<h1>` for your main heading can help search engines understand your 
     content better, potentially improving your SEO rankings.
2. **Accessibility**: Screen readers and other assistive technologies rely on the proper use of HTML 
     elements to provide a good user experience for individuals with disabilities. Using the correct heading 
     structure (including the use of `<h1>` for top-level headings) helps these users navigate your content 
     more easily.
3. **Document Structure**: In the same vein, using the `<h1>` tag for top-level headings helps to define the 
     structure of your page content. HTML5 allows multiple `<h1>` tags per page, each representing the main 
     title of a section in a document. This can be very useful for user navigation and comprehension.
4. **Styling**: While both `<h1>` and `<span>` elements can be styled using CSS, it is often easier to achieve 
     the desired look for a top-level heading using an `<h1>` tag because browsers have built-in styles for 
     heading tags.

The `<span>` tag, on the other hand, is an inline element with no semantic importance. It's typically used 
for styling a part of the text, or to apply JavaScript onto an element. If you used a `<span>` to display 
a top level heading, it would not provide the same benefits in terms of SEO, accessibility, and document 
structure as an `<h1>`.

### A Question: What are the benefits of using semantic tags in our HTML?

Semantic HTML tags provide many benefits for developers and users. Here is few:

1. **Enhanced Accessibility**: Screen readers, used by visually impaired users, rely on semantic tags to 
     interpret the content and structure of the webpage. Proper use of these tags ensures a more accessible 
     and inclusive user experience.
2. **Improved SEO**: Search engines use semantic tags to understand the content and structure of a webpage. 
     Using these tags correctly can help improve the visibility of a webpage in search engine results.
3. **Easier Navigation**: Semantic tags can make it easier for developers to understand and navigate the 
     structure of a webpage. This can make maintaining and updating the page more efficient.
4. **Consistency**: Using semantic tags can help ensure consistency in the design and layout of a webpage. 
     For example, using the `<header>`, `<footer>`, and `<nav>` tags can help maintain consistent page headers, 
     footers, and navigation bars.
5. **Compatibility**: Using semantic HTML helps ensure that a webpage will be compatible with future versions 
     of HTML. This can make maintaining and updating the page easier in the long term.
6. **Styling**: Semantic tags can also make it easier to style a webpage using CSS. For example, you can style 
     all `<article>` elements in the same way, rather than having to select them individually or by class or id.
7. **Machine Reading**: Semantic tags provide a standard and structured way for machines to read and 
     understand web content, which is not only useful for search engines, but also for web services, browser tools, 
     plugins, and other forms of automation. 

***

## What is JavaScript?

### A Quostion: Describe 2 things that require JavaScript in the Browser?

1. **Dynamic Web Content:** JavaScript is primarily used to create dynamic content on websites. Without 
     JavaScript, web pages would be static, meaning that they would display the same content every time they 
     are loaded, without any interaction. With JavaScript, developers can manipulate the DOM (Document Object Model), 
     change styles and content on the fly, and create a more interactive experience for the user. This includes 
     features like image sliders, content that loads only when you scroll down (lazy loading), form validation 
     on the client side, expandable menus, animations, and much more.
2. **Single Page Applications (SPAs):** Modern web frameworks like React, Angular, and Vue.js are based on 
     JavaScript and are used to build Single Page Applications (SPAs). These are web applications that load a 
     single HTML page and dynamically update that page as the user interacts with the app. SPAs work inside a 
     browser and do not require page reloading during use, which significantly improves the user experience. 
     Google Maps is a great example of an SPA; you can pan and zoom around the map, see different layers of 
     information, search for places, get directions, and much more, all without ever leaving the page.

### A Question: How can you add JavaScript to an HTML document?

JavaScript can be added to an HTML document in three primary ways:

1. **Inline JavaScript:** Inline JavaScript is directly embedded into an HTML element using the `onclick`, 
     `onload`, `onmouseover`, etc., event attributes.
2. **Internal JavaScript:** Internal JavaScript is written within `<script>` tags in the HTML document itself. 
     This method is suitable for small amounts of JavaScript code.
3.  **External JavaScript:** In this method, the JavaScript code is placed in a separate file (usually with 
     a .js extension), and this file is linked to the HTML document using the `src` attribute in the `<script>` 
     tag.

***

Thank you for taking your time reading this. Please follow this [link](https://github.com/MisterVaidas) to my GitHub profile.