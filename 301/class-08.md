# Readings: APIs

## API Design Best Practices

### What does REST stand for?

REST stands for **Representational State Transfer**.

### REST APIs are designed around a ____.

REST APIs are designed around a **resource-oriented** architecture.

### What is an identifier of a resource? Give an example.

An identifier of a resource is a unique string that identifies a specific resource in a RESTful API. It is typically a URI (Uniform Resource Identifier), but it can also be a UUID (Universally Unique Identifier).

For example, the identifier of a user resource in a RESTful API might be a URI like `/users/1234567890`. The identifier of a product resource might be a UUID like `123e4567-e89b-12d3-a456-426655440000`.

### What are the most common HTTP verbs?

Here is a table for most commom HTTP verbs:

| HTTP Verb | Use                                                        |
|---------- | ---------------------------------------------------------- |
| GET       | Retrieve a resource.                                       |
| POST      | Create a new resource.                                    |
| PUT       | Update an existing resource.                              |
| DELETE    | Delete a resource.                                        |
| PATCH     | Modify a part of an existing resource.                   |
| HEAD      | Retrieve the headers for a resource without the body.    |
| OPTIONS   | Retrieve the supported methods for a resource.           |


### What should the URIs be based on?

URIs should be based on the resources that they represent. This means that the URI should be a unique identifier for the resource, and it should be easy to understand and remember.

### Give an example of a good URI.

Here is an example of good URL:

```
/products/1234567890
```

### What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?

In the context of web APIs, a chatty API is one that makes multiple requests to the server to get the data that it needs. This can be a problem because it can increase the latency of the API and put a strain on the server.

### What status code does a successful `GET` request return?

A successful GET request returns a status code of `200 OK`. This means that the request was successful and the resource was retrieved. The response body will contain the requested resource.

### What status code does an unsuccessful `GET` request return?

There are a number of status codes that can be returned by an unsuccessful GET request. Some of the most common status codes include:

* 400 Bad Request
* 401 Unauthorized
* 403 Forbidden
* 404 Not Found
* 500 Internal Server Error
* 503 Service Unavailable

### What status code does a successful `POST` request return?

The most common code of successful `POST` request returned is **201 Created**.

### What status code does a successful `DELETE` request return?

The status code that a successful `DELETE` request returns depends on the specific server implementation. The most common status codes that are returned are `200 OK` and `204 No Content`.

***

Created by Vaidas Simkus.  
Please visit my [GitHub](https://github.com/MisterVaidas) profile.  
Reasources and tools used: Google, GoogleAI.