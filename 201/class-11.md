# Readings: Audio, Video, Images

## Video and Audio Content

### Explain how the ability to use video and audio on the web has evolved since the early 2000s.

The ability to use video and audio on the web has evolved significantly since the early 2000s. In the early days, video 
and audio on the web was often choppy and of poor quality. This was due to a number of factors, including limited bandwidth, 
slow processing speeds, and outdated compression algorithms.  

However, as technology has improved, so too has the quality of video and audio on the web. Today, it is possible to stream 
high-definition video and audio without any buffering or lag. This is thanks to advances in bandwidth, processing speeds, and 
compression algorithms.  

In addition to the improvement in quality, there has also been a revolution in the way that video and audio is used on the web. 
In the early days, video and audio was primarily used for streaming media, such as music and movies. However, today, video and 
audio is used for a wide variety of purposes, including:

* Video conferencing.
* Live streaming.
* Social Media.

### Describe the use of the `src` and `controls` attributes in the `<video>` element.

The `<video>` element is an HTML tag used to embed videos into a webpage. It provides several attributes to control the behavior 
and appearance of the video. Two important attributes are the `src` and `controls` attributes.

The `src` attribute specifies the URL or file path of the video source. It indicates the location of the video file that should be 
played. The value of the `src` attribute can be a relative or absolute URL, or a path to a local video file. For example:

```
<video src="video.mp4"></video>
```

The controls attribute is a boolean attribute that, when present, displays standard video playback controls to the user. These 
controls typically include a play/pause button, volume control, and progress bar. By default, if the controls attribute is not 
specified, the video will be displayed without any controls.

```
<video src="video.mp4" controls></video>
```

By combining the `src` and `controls` attributes, we can embed a video in our webpage and provide the user with the ability to 
play, pause, and control the video playback.

### Why is it important to have **fallback content** inside the `<video>` element?

It is important to have **fallback content** inside the `<video>` element because not all browsers support HTML5 video. If a user is 
using a browser that does not support HTML5 video, they will not be able to see the video. By providing fallback content, we 
can ensure that users can still access content, even if they are using an older browser.  

The **fallback content** can be anything, such as an image, a text description, or a link to the video file. The most important thing is 
that the **fallback content** provides users with enough information to understand what the video is about.

### Write a very short story where `<audio>` and `<video>` are characters.

Once upon a time, there were two friends named `<audio>` and `<video>`. They were both very popular on the web, and they loved to be used 
to create all sorts of amazing content.  

One day, `<audio>` and `<video>` were having a conversation. `<audio>` said, "I love being used to create music. It's so much fun to make 
people's ears happy."  

`<video>` said, "I love being used to create movies. It's so much fun to tell stories and transport people to different worlds."  

The two friends talked for a long time about all the different things they could do. They were both very excited about the future, and 
they knew that they would continue to be used to create amazing content for many years to come.

***

## A Complete Guide To Grid

### How does Grid layout differ from Flex?

Here is a table that summarizes the key differences between grid layout and flexbox:

| Feature      | Grid layout        | Flexbox          |
|--------------|--------------------|------------------|
| Dimensions   | Two-dimensional    | One-dimensional  |
| Flexibility  | Flexible           | Efficient        |
| Responsiveness | Less responsive   | More responsive  |
| Complexity   | More complex       | Less complex     |
| Suitability  | Complex layouts    | Responsive layouts |


### Grid container, grid item, and grid line are a few important terms to understand when using Grid. 
### Please describe these terms in a few sentences.

When using CSS Grid, it's essential to understand the following terms:

1. **Grid Container:** A grid container is an element that serves as a parent or container for a set of grid items. 
   The grid container defines the context in which the grid layout operates.

2. **Grid Item:** Grid items are the direct children of a grid container. They are the individual elements that are placed 
   and arranged within the grid layout. Each grid item occupies one or more grid cells within the grid container, forming 
   the building blocks of the grid structure.

3. **Grid Line:** Grid lines are the horizontal and vertical lines that make up the grid structure. They create the boundaries 
   for grid cells and help define the placement of grid items. Grid lines can be referred to as row lines or column lines, 
   depending on their orientation.

***

## Responsive Images

### Besides making a site visually appealing across different screen sizes, why should developers make images responsive?

Making images responsive is not just about visual appeal across different screen sizes; it offers several other important 
benefits for web development. Here are a few reasons why developers should make images responsive:

* Improved User Experience.
* Faster Page Load Times.
* Mobile-Friendly Design.
* Bandwidth Optimization.
* Future-Proofing.

### Define the following `<img>` attributes `srcset` and `sizes`. Write an example of how they are used.

Here is an example of how the `srcset` and `sizes` attributes can be used:

```
<img src="image.jpg" srcset="
  image-small.jpg 100vw,
  image-medium.jpg 500vw,
  image-large.jpg 1000vw
" sizes="(max-width: 768px) 100vw, (min-width: 769px) 500vw, 1000vw" />
```

In this example, the browser will use the `image-small.jpg` image if the device's screen is less than 768 pixels wide. If the 
screen is between 768 and 1024 pixels wide, the browser will use the `image-medium.jpg` image. And if the screen is 1024 pixels 
or wider, the browser will use the `image-large.jpg` image.

### How is srcset more helpful for responsive images than CSS or JavaScript?

`Srcset` is more helpful for responsive images than CSS or JavaScript because it is a native HTML attribute that is supported by 
all modern browsers.

When we use `srcset`, the browser will automatically choose the best image for the device's screen size. This is because the 
browser can read the `srcse`t attribute and see the list of different images that are available. The browser will then choose the 
image that has the most appropriate width and height for the device's screen.

***

Created by Vaidas Simkus  
Please visit my [GitHub](https://github.com/MisterVaidas) profile.