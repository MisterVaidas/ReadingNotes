# Readings: Object-Oriented Programming, HTML Tables

## Domain Modeling

### Explain why we need domain modeling.

Here is some reasons, why we need a domain modeling:

1. **Understanding the problem:** A well-constructed domain model allows developers and stakeholders to understand 
   the business problem they're trying to solve.
2. **Communication:** Domain models are used as a common language between technical and non-technical stakeholders.
3. **Structuring the software design:** A good domain model can guide software design.
4. **Decreasing complexity:** Large systems can be incredibly complex. Domain models break down this complexity into 
   manageable parts, making it easier to understand and work with the system.

***
## HTML Table Basics

### Why should tables not be used for page layouts?

Tables are not recommended for page layouts for a few reasons:

* **Accessibility:** Tables are not accessible to screen readers, which means that people who are blind or have low vision 
  will not be able to understand the content of the page.
* **SEO:** Tables can make it difficult for search engines to index the content of a page, which can hurt the page's search 
  engine ranking.
* **Flexibility:** Tables are not very flexible, which means that it can be difficult to change the layout of a page if you 
  need to.
* **Printing:** Tables can be difficult to print, especially if they are complex.

### List and describe 3 different semantic HTML elements used in an HTML `<table>`.

Here are 3 different semantic HTML elements used in an HTML `<table>`:

1. `<th>` tag: This tag defines a table header cell. Header cells are typically used to display the names of the columns in 
   a table.
2. `<td>` tag: This tag defines a table data cell. Data cells are typically used to display the content of a table.
3. `<caption>` tag: This tag defines a caption for a table. A caption is typically displayed above a table and provides a 
   brief summary of the table's content.

***
## Introducing Constructors

### What is a constructor and what are some advantages to using it?

A constructor in JavaScript is a special function that is used to create and initialize an object instance of a class. 
The constructor is called automatically when an object is created using the new keyword.  

Advantages of using constructors in JavaScript:

1. They allow you to initialize the properties of an object when it is created.
2. They can be used to encapsulate the logic for creating an object.
3. They can be used to create subclasses that inherit the properties and methods of their parent class.

### How does the term `this` differ when used in an object literal versus when used in a constructor?

The term `this` in JavaScript refers to the current object. When used in an object literal, `this` refers to the object 
itself. When used in a constructor, `this` refers to the new object that is being created.

***

## Object Prototypes Using A Constructor

### Explain prototypes and inheritance via an analogy from your previous work experience.

Analogy: Van Driver

I worked for a delivery company that operates a fleet of vans for transporting packages. In this analogy:  

1. Prototypes: Each type of van in the fleet represents a prototype. It defines the common features, specifications, and 
   functionality shared by all vans of that type.
2. Inheritance. As a driver, i inherit the characteristics and behaviors of the specific van prototype assigned to me. 
   When i assigned a van, i am become an instance of that van prototype. I gain access to its shared features, such as engine 
   specifications, braking systems, and driving controls.

This analogy can help me to understand prototypes and inheritance in JavaScript. It is a powerful tool that can help us to 
create more efficient and reusable code.

***

Created by Vaidas Simkus  
Please visit my [GitHub](https://github.com/MisterVaidas) profile