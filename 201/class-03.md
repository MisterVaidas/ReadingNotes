# HTML Lists, Control Flow with JS, and the CSS Box Model

### When should you use an `unordered list` in your HTML document?

Unordered lists should be used when the order of the items doesn't matter, and 
we want to present them as a collection without any particular sequence.

### How do you change the `bullet style` of unordered list items?

You can change the bullet style of unordered list items using `CSS`. The `list-style-type` 
property specifies the type of bullet that will be used for list items.

### When should you use an `ordered list` vs an `unorder list` in your HTML document?

**Ordered lists** are typically used for lists of items that need to be followed in a specific 
order, such as steps in a recipe or instructions for assembling a piece of furniture. The 
items in an ordered list are typically numbered, with each item starting with a number 
and a period.

**Unordered lists** are typically used for lists of items that do not need to be followed in a 
specific order, such as a list of ingredients or a list of features of a product. The items 
in an unordered list are typically preceded by a bullet point.

Here is a table that summarizes the key differences between ordered lists and unordered lists:

| Feature            | Ordered List | Unordered List |
|--------------------|--------------|----------------|
| Order of items     | Important    | Not important  |
| Markup             | `<ol>`       | `<ul>`         |
| Delimiter          | Numbers      | Bullet points  |

### Describe two ways you can change the numbers on `list items` provided by an `ordered list`?

* **Using CSS.** We can use CSS to change the numbers on list items by using the `list-style-type` 
  property. The `list-style-type` property can be used to specify the type of marker that will be 
  used for list items.
* **Using the `start` atribute.** We can use the `start` attribute to change the starting number for 
  the list items. The start attribute can be used to specify the number that will be used for the 
  first list item.

***

## Learn CSS

### Describe the CSS properties of `margin` and `padding` as characters in a story. What is their 
### role in a story titled: “The Box Model”?

Okay, here is the story created by AI. Hope you like it! 

#### The box model

Once upon a time in the land of Webville, there existed a small village called Layoutville, where 
all the elements of the web resided. The village was a harmonious place, with each element playing 
its unique role in the grand design of the web.

In the heart of Layoutville, there stood a majestic castle known as "The Box Model." The Box Model 
was the ruler of all elements, dictating their positioning and appearance. It had a regal presence, 
adorned with various properties that defined its form.

At the entrance of The Box Model's castle, two loyal characters named Margin and Padding stood guard. 
Margin was a poised and elegant character, dressed in a fine attire of empty space. It was responsible 
for creating a buffer zone around The Box Model, ensuring it had a respectable distance from other 
elements. Margin had a remarkable ability to create an aura of separation, maintaining order and 
preventing unwanted collisions among neighboring elements.

On the other hand, Padding, a warm and friendly character, had a different role. Clad in a soft and 
cushiony outfit, Padding took care of The Box Model's internal comfort. Its duty was to create a cozy 
space within the castle, protecting the content from the rigid walls. Padding embraced the content, 
providing a safe and nurturing environment, allowing it to breathe and expand without any constraints.
Together, Margin and Padding formed a powerful duo, working in harmony to create the perfect balance 
for The Box Model. They understood that too much space or too little padding could disrupt the 
harmony, leading to a messy and disorganized layout. Their roles were vital in ensuring that 
The Box Model's castle was both aesthetically pleasing and functional.

One day, a mischievous element named Overflow attempted to invade The Box Model's castle. Overflow 
was known for its unruly behavior, often disregarding the rules of the layout. But Margin and Padding 
were prepared. Margin, with its strategic positioning, acted as a shield, warding off the intruder 
and preventing it from trespassing into The Box Model's space. Meanwhile, Padding acted as a barrier, 
containing Overflow's reckless behavior within the castle walls, protecting the rest of Layoutville 
from its chaos.

The villagers of Layoutville admired Margin and Padding for their unwavering dedication to order and 
structure. They recognized the significance of these characters in maintaining a peaceful and 
organized web layout. Whenever elements needed assistance with their positioning or content alignment, 
Margin and Padding were there, ready to lend their expertise.

And so, the story of The Box Model and its loyal companions, Margin and Padding, continued in 
Layoutville, where harmony and structure prevailed. With their guidance, the elements of the web 
lived happily ever after, creating beautiful and well-organized experiences for all who visited their 
kingdom.

### List and describe the four parts of an HTML elements box as referred to by the `box model`.

The four parts of an HTML element's box as referred to by the `box model` are:

1. **Content box:** This is the area where the element's content is displayed.
2. **Padding:** This is the area around the content box. It is transparent, so the background color of the 
   element is visible.
3. **Border:** This is the area around the padding. It can be of any color and thickness.
4. **Margin:** This is the area around the border. It is transparent, so the background color of the parent 
   element is visible.

***

## Learn JS

### What `data types` can you store inside of an `Array`?

In JavaScript, an array is a data structure that can store multiple values. We can store various data types 
inside an array, including:

1. Numbers.
2. Strings.
3. Booleans.
4. Objects.
5. Arrays.
6. Functions.
7. Undefined.
8. Null.
9. Symbols.

### Is the people array a valid JavaScript array? If so, how can I access the values stored? If not, why?

```
 const people = [['pete', 32, 'librarian', null], ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'], ['bill', null, 'artist', null]];

 ```

 Yes, the `people` array provided is a valid JavaScript array. To access the values stored in this array, 
 we can use array indexing.

 For example, if we want to access the name from the third inner array, we write following comand:

```
const thirdName = people[2][0];
console.log(thirdName); // The outcome in console will be: bill

```