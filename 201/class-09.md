# Readings: Forms and JS Events

## HTML Forms

### Why are forms so important in web development?

Forms are important in web development because they allow web developers to collect data from users.  

This data can be used for:

* Contacting users.
* Gathering feedback.
* Registering users.
* Making purchases.

### When designing a form, what are some key things to keep in mind when it comes to user experience?

When designing a form, there are a few key things to keep in mind when it comes to user experience:

1. **Keep it simple.** The fewer fields the form have, the easier it will be for user to complete.
2. **Use clear and concise labels.** The labels for the form fields should be clear and concise, so that users 
   know what information they need to put.
3. **Use appropriate input types.** The input type used for each form field should be appropriate for the type 
   of data to be collected.
4. **Validate form input.** This will help to ensure that the data entered by users is valid.
5. **Provide clear and concise error messages.** If a user enters invalid data, clear and concise error messages 
   that explain what went wrong, should be provided.
6. **Use progressive disclosure.** This means only showing the form fields that are relevant to the user at a 
   given time.
7. **Use a consistent design.** The design of the form should be consistent with the rest of the website or web 
   application. This will help to create a more seamless user experience.

### List 5 form elements and explain their importance.

Here are five common form elements in HTML and their importance:

1. **Input (text):** The `<input type="text">` element is used to accept single-line text input from the user. It's one 
   of the most fundamental form elements. It allows users to enter data such as names, email addresses, or any other 
   textual information.
2. **Textarea:** The `<textarea>` element allows users to enter multi-line text input. Unlike the single-line text input, 
   the textarea element is suitable for capturing larger amounts of text, such as comments, messages, or descriptions.
3. **Select:** The `<select>` element creates a drop-down menu of options from which users can choose. It's typically 
   paired with `<option>` elements to define the available choices. Select elements are useful when you want users to 
   select one option from a list of predefined choices, such as selecting a country, a category, or a preference.
4. **Radio buttons:** Radio buttons are created using the `<input type="radio">` element. They allow users to select 
   one option from a set of mutually exclusive choices.
5. **Checkbox:** The `<input type="checkbox">` element represents a checkbox that users can check or uncheck. Unlike radio 
   buttons, checkboxes are used for independent options where users can select multiple choices simultaneously. Checkboxes 
   are commonly used when you want users to select multiple items from a list, like selecting multiple interests, features, 
   or preferences.

***

## Learn JS

### How would you describe events to a non-technical friend?

In JavaScript, an event is something that happens in the browser. For example, when a user clicks a button, that is an 
event. Events can also be triggered by other things, such as the user moving the mouse over an element, typing in a text 
field, or resizing the window.  

JavaScript events are used to make web pages more interactive. For example, you can use events to make a button change 
color when the user hovers over it, or to show a message when the user clicks on a link.  

To understand events better, let's think about a real-world analogy. Imagine that you are at a party and you want to get 
someone's attention. You might wave your hand, or shout their name. These are both events that you can use to get 
someone's attention.  

In JavaScript, events are used in a similar way. You can use events to get the browser's attention and tell it to do 
something. For example, you might use an event to tell the browser to show a message, or to change the color of an 
element.

### When using the `addEventListener()` method, what 2 arguments will you need to provide?

The `addEventListener()` method takes two arguments: the event name and a function that will be called when the event is 
triggered.  

The event name is a string that identifies the type of event that you want to listen for. For example, the event name for 
a click event is `click`.  

The function that you pass to `addEventListener()` is called the event handler. The event handler will be called when the 
event is triggered, and it will receive an object as an argument. This object contains information about the event, such 
as the element that was clicked, the mouse position, and the key that was pressed.  

Here is a table of the arguments that are required by the `addEventListener()` method:

| Argument | Type     | Description                                                |
| -------- | -------- | ---------------------------------------------------------- |
| event    | String   | The name of the event that you want to listen for.         |
| handler  | Function | The function that will be called when the event is triggered. |


### Describe the event object. Why is the target within the event object useful?

The event object in JavaScript is automatically passed as an argument to the event handler function when an event occurs. 
It contains information and properties related to the event that was triggered. The event object provides valuable data 
that can be used to understand and interact with the event in a more meaningful way.

### What is the difference between event bubbling and event capturing?

The main difference between event bubbling and event capturing is the order in which elements receive the event. With event 
bubbling, the event is first received by the target element and then bubbles up to the parent elements. With event capturing, 
the event is first received by the document element and then captures down to the child elements.

***

Created by Vaidas Simkus  
Please visit my [GitHub](https://github.com/MisterVaidas) profile.