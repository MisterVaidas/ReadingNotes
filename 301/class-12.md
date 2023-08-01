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

Created by Vaidas Simkus.  
Please visit my [GitHub](https://github.com/MisterVaidas) profile.  
Reasources and tools used: Google, GoogleAI