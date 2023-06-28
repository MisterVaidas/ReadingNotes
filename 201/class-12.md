# Readings: Chart.js, Canvas

## JavaScript Canvas

### What does the `<canvas>` allow a developer to acheive?

Here are some of the things that a developer can achieve with the `<canvas>` element:

* Create custom graphics, such as charts, graphs, and diagrams.
* Implement games and other interactive experiences.
* Draw animations.
* Visualize data.
* Create custom user interfaces.
* Integrate with other web APIs.

### What is the importance of the closing `</canvas>` tag?

The closing `</canvas>` tag is important because it tells the browser that the `<canvas>` element is complete. Without the 
closing tag, the browser will not know where the `<canvas>` element ends and other elements on the page will start. This 
can cause errors and unexpected behavior.

### Explain what the getContext() method does.

The `getContext()` method is used to retrieve a drawing context for a `<canvas>` element. A drawing context is an object that 
provides methods for drawing on the canvas. The type of drawing context that is returned depends on the value of the 
`contextType` parameter.

***

## Chart.js Documentation

### What is Chart.js and how it can be brought into your project?


**Chart.js** is a free, open-source JavaScript library for creating interactive charts. It is a popular choice for creating charts 
because it is easy to use, has a wide variety of chart types, and is customizable.

To bring **Chart.js** into our project, we can either download the library from the Chart.js website or install it using a package 
manager like `npm` or `yarn`. Once we have the library, we can include it in our project by adding a script tag to HTML file.

Here is an example of how to include Chart.js in to the project:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js"></script>
```

### List 3 different Chart types you can create using Chart.js.

Here are 3 different chart types you can create using Chart.js:

1. **Line chart:** A line chart is a type of chart that shows the relationship between two variables over time.

   <img src="lineChart.jpg" alt="This is a line chart" style="width:300px; height:250px;">

2. **Bar chart:** A bar chart is a type of chart that shows the comparison of different values. 

    <img src="barChart.png" alt="This is a bar chart" style="width:300px; height:250px;">

3. **Pie chart:** A pie chart is a type of chart that shows the distribution of a value.

    <img src="pieChart.jpg" alt="This is a pie chart" style="width:300px; height:250px;">

***

## Easily Create Stunning Animated Charts with Chart.js

### What are some advantages to displaying data via a chart over a table?

There are several advantages to displaying data via a chart over a table. Charts can:

* Show trends and patterns.
* Compare different values.
* Highlight outliers.
* Communicate data more effectively.

### How could Chart.js aid your previously created applications visually?

* I could use Chart.js to create a line chart that shows the growth of my application's user base over time. This chart 
  could be used to track the success of my application and to identify trends in user growth.

* I could use Chart.js to create a bar chart that compares the performance of my application with its competitors. 
  This chart could be used to highlight my application's strengths and weaknesses and to help me to make improvements.

* I could use Chart.js to create a pie chart that shows the distribution of my application's users by country. This chart 
  could be used to identify which countries are my application's most popular markets and to help me to target my marketing 
  efforts.

***

Created by Vaidas Simkus  
Please visit my [GitHub](https://github.com/MisterVaidas) profile.