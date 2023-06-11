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

### A Question: How do you create a String vs a Number in JavaScript?

Here is a table explaining:

| Method                      | Example                            | Description                                             |
|-----------------------------|------------------------------------|---------------------------------------------------------|
| Using single or double quotes | `const str1 = "This is a string";`  | Creates a string                                        |
| Using the `String()` function | `const str2 = String("This is a string");` | Creates a string from a variable that contains a string |
| Using the `Number()` function | `const num1 = Number("10");`       | Creates a number from a variable that contains a number |


