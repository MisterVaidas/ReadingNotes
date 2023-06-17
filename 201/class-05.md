# Readings: Images, Color, Text

## HTML Media

### What is a real world use case for the `alt` attribute being used in a website?

The `alt` attribute in HTML is commonly used with the `<img>` element to provide alternative text for images. 
It serves as a textual description of the image content, particularly for situations when the image cannot 
be displayed or when its content needs to be conveyed to users who cannot see the image.

### How can you improve accessibility of images in an HTML document?


Here are some tips on how to improve the accessibility of images in an HTML document:

* **Use the alt attribute:** The alt attribute is used to provide a text description of an image. This text description 
  is read by screen readers, so it is important to make sure that the alt attribute is descriptive and accurate.
* **Use long descriptions for complex images:** For complex images, need to use a long description instead of the 
  alt attribute. Long descriptions are text descriptions that are displayed in a separate section of the page. This allows 
  users to get more information about the image, if they need it.
* **Avoid using images for text:** If the image is only used to display text, we should avoid using the image altogether. 
  Instead, we should use the text itself. This will make the page more accessible to users who are using screen readers.
* **Use appropriate image formats:** Some image formats, such as PNG and GIF, are more accessible than others. PNG and GIF 
  images are lossless, which means that they retain all of the original image data. This makes them easier for screen 
  readers to read.
* **Optimize images for speed:** Images can slow down the loading of a web page. To improve the accessibility of the pages, 
  we should optimize our images for speed. This means using smaller file sizes and compressing the images.

### Provide an example of when the `figure` element would be useful in an HTML document.

The `<figure>` element in HTML is particularly useful when we want to associate an image or visual content with a caption 
or description. It helps provide a semantic structure to group an image and its related content together.
Let's asume that we have an image of mountain and we want to dispay a caption for this image on our website. Here 
is an example how to do this:

```
<figure>
  <img src="example-image.jpg" alt="A scenic view of mountains">
  <figcaption>Scenic view of mountains</figcaption>
</figure>
```

`<figcaption>` element serves as a caption or description of an image.

### Describe the difference between a `gif` image and an `svg` image, pretend you are explaining to an elder in your community.

GIF and SVG are two different types of image formats. GIF stands for Graphics Interchange Format, while SVG stands for 
Scalable Vector Graphics.  
GIF images are made up of a series of raster images, which means that they are made up of a grid of pixels. This means that 
GIF images can only be displayed at a certain size, and they will look blurry if they are scaled up or down.  
SVG images, on the other hand, are made up of vector images, which means that they are made up of mathematical equations. 
This means that SVG images can be scaled to any size without losing quality.

### What image type would you use to display a screenshot on your website and why?

I would use the PNG image type to display a screenshot on my website. PNG images are lossless, which means that they retain 
all of the original image data. This makes them ideal for screenshots, which often contain text and other details that can 
be lost in a lossy format like JPEG.  
PNG images are relatively small in file size, which is important for websites as it helps to keep loading times fast. This is 
especially important for screenshots, which are often used on pages that are loaded quickly, such as news articles or blog posts.
PNG images are supported by all major web browsers, so you can be sure that your screenshots will be displayed correctly on 
any device.

***

## Learn CSS

### Describe the difference between foreground and background colors of an HTML element, pretend you are talking to someone 
### with no technical knowledge.

Foreground and background colors are two different colors that can be used to style an HTML element. The foreground color is 
the color of the text, while the background color is the color of the space behind the text.

### Your friend asks you to give his colorless blog website a touch up. How would you use color to give his blog some 
### character?

Here are some tips on how to use color to give my friend's blog some character:

1. **Consider the overall tone of the blog.** What kind of mood do you want to create? Are you going for a professional, corporate 
   look? A fun and playful look? A relaxing and calming look? Once you know the overall tone, you can start to choose colors that 
   will help to create that mood.
2. **Choose a color palette.** A color palette is a set of colors that work well together. There are many different color palettes that 
   you can choose from, but a good place to start is by using the color wheel. The color wheel is a helpful tool for understanding 
   how colors relate to each other.
3. **Use color to create contrast.** Contrast is what helps to make a design visually interesting. You can create contrast by using 
   different colors, different shades of the same color, or different textures.
4. **Use color to highlight important elements.** Use color to draw attention to important elements on your blog, such as the title, the 
   featured image, or the call to action button.
5. **Use color sparingly.** Too much color can be overwhelming and distracting. A good rule of thumb is to use no more than three main 
   colors in your blog design.

### What should you consider when choosing fonts for an HTML document?

When choosing fonts for an HTML document, there are several important considerations to keep in mind. Here are some key factors to 
consider:

1. Readability;
2. Compatibility;
3. Context and Tone;
4. Font Pairing;
5. Performance;
6. Accessibility;
7. Consistency.

### What do `font-size`, `font-weight`, and `font-style` do to HTML text elements?

The `font-size`, `font-weight`, and `font-style` properties in CSS are used to control the appearance of text elements in HTML documents.

* **Font-size** controls the size of the text. The value can be specified in pixels, ems, or other units.
* **Font-weight** controls the boldness of the text. The value can be specified as a keyword, such as bold or normal, or as a number between 
  100 and 900.
* **Font-style** controls whether the text is italicized or not. The value can be specified as a keyword, such as italic or normal, or as the 
  value oblique.

Here is a table of the different values that can be used for the font-size, font-weight, and font-style properties:

| Property     | Values                                                |
|--------------|-------------------------------------------------------|
| font-size    | Pixels, ems, rems, percentages, and other units        |
| font-weight  | Keywords: normal, bold, lighter, bolder, or numbers between 100 and 900 |
| font-style   | Keywords: normal, italic, oblique                     |

### Describe two ways you could add spacing around the characters displayed in an `h1` element.

Here are two ways we could add spacing around the characters displayed in an `h1` element:

1. **Using the `letter-spacing` property**

The `letter-spacing` property in CSS controls the space between characters. You can use this property to add extra space between the characters 
in an h1 element. For example, the following CSS code would add 10px of space between the characters in all h1 elements:

```
h1 {
  letter-spacing: 10px;
}
```

2. **Using the `padding` property**

The `padding` property in CSS controls the space around an element. You can use this property to add space around the characters in an h1 element. 
For example, the following CSS code would add 10px of padding around all h1 elements:

```
h1 {
  padding: 10px;
}
```

The `letter-spacing` property only affects the space between characters, while the `padding` property affects the space around the entire element. 
This means that the `padding` property will also add space around the edges of the element, such as the top, bottom, left, and right sides.

***

Created by Vaidas Simkus  
Please visit my [GitHub](https://github.com/MisterVaidas) profile.