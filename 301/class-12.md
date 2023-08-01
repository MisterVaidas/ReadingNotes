# Readings: CRUD

## Status Codes Based On REST Methods

### In your own words, describe what each group of status code represents:

* 100’s: Informational. These status codes indicate that the request was received and is being processed.

* 200's: Successful. These status codes indicate that the request was successfully processed and the response contains the requested resource.

* 300's: Redirection. These status codes indicate that the client should take some further action in order to complete the request.

* 400's: Client Error. These status codes indicate that the request was malformed or invalid.

500's: Server Error. These status codes indicate that an error occurred on the server while processing the request.

### What is a status code 202?

A status code 202 is an HTTP status code that stands for "Accepted". When a client sends a request to a server, the server may not immediately process the request but rather accept it for processing at a later time. 

### What is a status code 308?

The HTTP status code 308 Permanent Redirect indicates that the resource has been permanently moved to a new location that is specified within the HTTP response.

Here is an example of a 308 status code response:

```
HTTP/1.1 308 Permanent Redirect
Location: https://www.example.com/new-location
```

### What code would you use if an update didn’t return data to a client?

If an update didn't return data to a client, I would use the `204 No Content` status code. The `204 No Content` status code indicates that the request was successful, but the server did not return any content.

### What code would you use if a resource used to exist but no longer does?

If a resource used to exist but no longer does, I would use the `410 Gone` status code. The `410 Gone` status code indicates that the resource is no longer available and will not be available again. This is often used for resources that have been deleted or permanently moved.

### What is the ‘Forbidden’ status code?

The HTTP status code `403 Forbidden` indicates that the server understood the request but refuses to authorize it.

***

## Build A REST API With Node.js, Express, & MongoDB - Quick

### Why do we need to pull our MongoDB database string out of our server and put it into our `.env`?

There are a few reasons why we need to pull our MongoDB database string out of our server and put it into our .env file.

* **Security**: Storing the database string in the server code makes it visible to anyone who has access to the code.

* **Portability**: If we want to deploy our app to a different environment, we will need to update the database string in the server code.

* **Ease of use**: Storing the database string in the `.env` file makes it easy to change the database configuration.

### What is middleware?

Middleware is software that sits between the operating system and applications running on it. It provides services to applications beyond those available from the operating system.

### What does `app.use(express.json())` do?

The `app.use(express.json())` middleware in Express parses incoming requests with JSON payloads and puts the parsed data in `req.body`. This middleware is used to handle requests that contain JSON data.

### What does the /:id mean in a route?

The `/:id` in a route is a placeholder for a dynamic parameter. The `id` parameter will be replaced with the value that is passed in the request URL.

### What is the difference between `PUT` and `PATCH`?

`PUT` and `PATCH` are both HTTP methods that are used to update resources.

Here is a table that summarizes the key differences between `PUT` and `PATCH`:

| Feature                           | PUT   | PATCH |
|---------------------------------- | ----- | ----- |
| Updates the entire resource       | Yes   | No    |
| Updates only the specified fields | No    | Yes   |
| Idempotent                        | Yes   | No    |


### How do you make a default value in a schema?

To make a default value in a schema, we can use the default keyword. The default keyword takes a value that will be used if the field is not explicitly set.

Here is an example:

```
const schema = {
  name: {
    type: String,
    default: "John Doe"
  }
};
```

### What does a `500` error status code mean?

A `500` error is a generic error code that means something went wrong on the server. It's a catch-all error code for any unexpected errors that occur on the server side.

### What is the difference between a status 200 and a status 201?

Here is a table that summarizes the key differences between status code 200 and status code 201:

| Feature                                     | Status Code 200 | Status Code 201 |
|-------------------------------------------- | --------------- | --------------- |
| Indicates that the request was successful   | Yes             | Yes             |
| Indicates that the resource was retrieved   | Yes             | No              |
| Indicates that a new resource was created   | No              | Yes             |


***

Created by Vaidas Simkus.  
Please visit my [GitHub](https://github.com/MisterVaidas) profile.  
Reasources and tools used: Google, GoogleAI