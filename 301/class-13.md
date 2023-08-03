# Readings: More CRUD

## CRUD Basics

### Which HTTP method would you use to update a record through an API?

The HTTP method i should use to update a record through an API is `PUT`. The `PUT` method is used to update an existing resource. The request body of a `PUT` request typically contains the updated representation of the resource.

Here is an example of a PUT request to update a record:

```
PUT https://example.com/api/v1/users/12345
Content-Type: application/json

{
    "name": "John Doe",
    "email": "johndoe@example.com",
}
```

### Which REST methods require an ID parameter?

The REST methods that require an ID parameter are:

* **PUT** - The `PUT` method is used to update an existing resource. The ID parameter is used to identify the resource that we want to update.

* **PATCH** - The `PATCH` method is used to partially update a resource. The ID parameter is used to identify the resource that we want to update.

* **DELETE** - The `DELETE` method is used to delete a resource. The ID parameter is used to identify the resource that we want to delete.

***

## Speed Coding: Building a CRUD API

### What’s the relationship between `REST` and `CRUD`?

`REST` and `CRUD` are two different concepts, but they are often used together. `REST` is an architectural style for designing web services, while `CRUD` is a set of four basic operations that can be performed on data.

### If you had to describe the process of creating a RESTful API in 5 steps, what would they be?

Here are the 5 steps on how to create a RESTful API:

1. Plan and design my API. This includes defining the resources that my API will expose.

2. Choose a programming language and framework.

3. Implement my API. This involves writing the code that will implement the HTTP methods and data formats that i defined in step 1.

4. Test my API. Once i have implemented my API, i need to test it to make sure that it's working correctly.

5. Deploy my API. Once i have tested my API, i need to deploy it so that it can be accessed by other users.

***

Created by Vaidas Simkus.  
Please visit my [GitHub](https://github.com/MisterVaidas).  
Resources used: Google, GoogleAI