# Readings: MongoDB and Mongoose

## `nosql` vs `sql`

### Fill in the chart below with five differences between SQL and NoSQL databases:

| Feature        | SQL                                                | NoSQL                                               |
|--------------- | -------------------------------------------------- | --------------------------------------------------- |
| Data model     | Relational                                         | Non-relational                                      |
| Schema         | Predefined                                         | Dynamic                                             |
| Scalability    | Vertical                                           | Horizontal                                          |
| Query language | SQL                                                | NoSQL-specific languages                            |
| Data types     | Structured                                         | Structured, semi-structured, unstructured           |
| Use cases      | Applications that require complex queries and     | Applications that require high performance and     |
|                | transaction management, such as financial systems | scalability, such as social media platforms and    |
|                | and e-commerce websites                            | web applications                                    |


### What kind of data is a good fit for an `SQL` database?

SQL databases are a good fit for data that is:

* **Structured**: SQL databases store data in tables, which are made up of rows and columns. Each row represents a single record, and each column represents a single attribute of that record. This makes it easy to query and manipulate structured data.

* **Relational**: SQL databases use a relational data model, which means that data is stored in tables that are related to each other. This makes it easy to join tables together and to perform complex queries.

* **Transactional**: SQL databases are designed to support transactions, which are a unit of work that must be completed all at once or not at all. This makes SQL databases a good choice for applications that require data integrity.

### Give a real world example.

E-commerce websites: E-commerce websites store data such as product information, customer orders, and shipping information. This data is typically stored in an SQL database, as it is structured and relational.

### What kind of data is a good fit a NoSQL database?

NoSQL databases are a good fit for data that is:

* **Unstructured**: Unstructured data does not have a predefined schema, which makes it difficult to store and query in an SQL database. NoSQL databases are designed to store and query unstructured data.

* **High-volume**: NoSQL databases are designed to scale to handle large volume of data.

* **Real-time**: NoSQL databases are well-suited for real-time applications, where data needs to be processed and responded to quickly.

### Give a real world example.

**Social media platforms**: Social media platforms such as Twitter, Facebook, and Instagram store a massive amount of unstructured data, such as user posts, comments, and likes. This data is typically stored in a NoSQL database, as it is not possible to define a predefined schema for this type of data. NoSQL databases allow social media platforms to store and query this data quickly and efficiently.

### Which type of database is best for hierarchical data storage?

There are two main types of databases that are well-suited for hierarchical data storage:

* **Document databases**: Document databases store data in documents, which can be nested to represent a hierarchical structure.

* **Graph databases**: Graph databases store data in graphs, which are a type of mathematical structure that can represent hierarchical relationships.

### Which type of database is best for scalability?

There are two main types of databases that are well-suited for scalability:

* **NoSQL databases**: NoSQL databases are designed to be scalable, and they can be horizontally scaled by adding more nodes to the database cluster.

* **NewSQL databases**: NewSQL databases are a hybrid of relational and NoSQL databases, and they offer the scalability of NoSQL databases with the ACID guarantees of relational databases.

***

## sql vs nosql 

### What does SQL stand for?

SQL stands for Structured Query Language.

### What is a relational database?

A relational database is a database that stores data in tables. Tables are made up of rows and columns, and each row represents a single record. A relational database uses a relational data model, which means that data is stored in tables that are related to each other.

### What type of structure does a relational database work with?

A relational database works with a relational data model. A relational data model is a way of organizing data into tables. Tables are made up of rows and columns, and each row represents a single record.

### What is a ‘schema’?

Schema is a blueprint or a model that describes the structure of a relational database. It is a set of rules that define the data types, constraints, and relationships between the tables in a database.

### What is a `NoSQL` database?

A `NoSQL` database is a non-relational database that does not use the relational model. `NoSQL` databases are designed to store and manage large amounts of data that is often unstructured or semi-structured.

### How does it work?

`NoSQL` databases work by storing data in a different way than relational databases. Relational databases store data in tables, which are made up of rows and columns. Each row represents a single record, and each column represents a single attribute of that record. `NoSQL` databases, on the other hand, store data in a variety of ways, depending on the type of `NoSQL` database.

### What is inside of a MongoDB database?

A MongoDB database is a collection of collections, which are in turn collections of documents.

Here is an example of a MongoDB document:

```
{
  "_id": 1,
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com",
  "address": {
    "street": "123 Main Street",
    "city": "Anytown",
    "state": "CA",
    "zip": 12345
  }
}
```

### Which is more flexible - SQL or MongoDB? and why.

`MongoDB` is generally considered to be more flexible than `SQL`. This is because MongoDB is a schema-less database, which means that the structure of the data can change over time. This makes MongoDB well-suited for storing data that is not well-structured.

`SQL` databases are schema-based databases. This means that the structure of the data must be defined in advance. This can make `SQL` databases less flexible, as it can be difficult to change the structure of the data after it has been created.

Here is a table that summarizes the flexibility of SQL and MongoDB:

| Feature                         | SQL        | MongoDB    |
|-------------------------------- | ---------- | ---------- |
| Schema                          | Required   | Not required |
| Data structure                  | Fixed      | Flexible   |
| Changes to data structure       | Difficult  | Easy       |


### What is the disadvantage of a `NoSQL` database?

Here is some disadvantages of `NoSQL` database: 

* **Data consistency**: `NoSQL` databases do not always guarantee data consistency. This means that it is possible for different nodes in the database cluster to have different versions of the same data. This can be a problem for applications that require strong data consistency guarantees.

* **Query complexity**: `NoSQL` databases can be more complex to query than traditional relational databases. This is because `NoSQL` databases do not use a traditional schema, which makes it more difficult to write queries that can be used to extract specific data from the database.

* **Not suitable for all data**: `NoSQL` databases are not suitable for storing all types of data. For example, they are not suitable for storing data that needs to be queried frequently.

***

Created by Vaidas Simkus.  
Please visit my [GitHub](https://github.com/MisterVaidas) profile.  
Resources and tools used: Google, GoogleAI.