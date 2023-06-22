# Readings: CSS Layout

## Learn CSS - Flexbox

### Flexbox is designed for one-dimensional content. Explain what this means.

Flexbox is a layout model in CSS that allows you to control the layout of items in a container. It is designed 
for one-dimensional content, which means that it can only be used to layout items in a single direction, such 
as rows or columns.

### Explain the difference between the main axis and cross axis.

Here is a table that summarizes the difference between the main axis and cross axis:

| Property         | Description                                                  |
|------------------|--------------------------------------------------------------|
| Main axis        | The axis that the items are laid out along.                  |
| Cross axis       | The axis that is perpendicular to the main axis.              |
| flex-direction  | The property that defines the main axis.                      |
| justify-content | The property that controls how the items are aligned along the main axis. |
| align-items      | The property that controls how the items are aligned along the cross axis. |


### How can using certain properties of flexbox negatively impact accessibility?

Here are some of the ways that using certain properties of flexbox can negatively impact accessibility:

* **Changing the tab order.** The order property can be used to change the order in which items are tabbed through. However, 
  if this property is used to change the tab order in a way that is not consistent with the DOM order, it can make it 
  difficult for users of assistive technologies to navigate the page.
* **Breaking the logical flow of content.** The flex-direction property can be used to change the direction of the main axis. 
  However, if this property is used to change the direction of the main axis in a way that breaks the logical flow of the 
  content, it can make it difficult for users of assistive technologies to understand the content.
* **Hiding content from assistive technologies.** The flex-wrap property can be used to wrap flex items that overflow the 
  container. However, if this property is used to wrap content that should be visible to assistive technologies, it can 
  make the content invisible to these users.

***

## CSS Layout - Flexbox

### What are some advantages of using flexbox over float?

Here is a table that summarizes the advantages of using flexbox over float:

| Property       | Flexbox                         | Float                         |
|----------------|---------------------------------|-------------------------------|
| Efficiency     | More efficient                  | Less efficient                |
| Flexibility    | More flexible                   | Less flexible                 |
| Responsiveness | More responsive                 | Less responsive               |
| Accessibility  | More accessible                 | Less accessible               |


### How does this topic connect with your long term goals?

Flexbox is a valuable skill for web developers, as it can be used to create responsive and accessible layouts. By learning 
flexbox, i will be able to create more user-friendly and accessible websites.

***

Created by Vaidas Simkus  
Please visit my [GitHub](https://github.com/MisterVaidas) profile
