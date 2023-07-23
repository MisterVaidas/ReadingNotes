# Readings: REST

## How I explained `REST` to my brother

### Who is Roy Fielding?

Roy Fielding is an American computer scientist, one of the principal authors of the `HTTP` specification and the originator of the Representational State Transfer (REST) architectural style. He is an authority on computer network architecture and co-founded the Apache `HTTP` Server project.

### Why don’t the techniques that we use in this class work well when we need to be able to talk to all of the machines in the world?

The techniques that we use to communicate with machines today are not designed to work well when we need to be able to talk to all of the machines in the world. These techniques are typically designed for a specific purpose or use case, and they are not scalable to a global network of machines.

### What is the `HTTP` protocol that Fielding and his friends created?

Roy Fielding and his friends created the HTTP protocol, which stands for Hypertext Transfer Protocol. HTTP is a set of rules for how computers communicate with each other over the internet. It is the protocol that is used to transfer hypertext documents, such as web pages, between web servers and web browsers.

### What does a `GET` do?

A GET request is an HTTP method that is used to retrieve a resource from a server. The GET request is the most common HTTP method, and it is used to retrieve web pages, images, and other resources.

The GET request has the following syntax:

```
GET /resource_path HTTP/1.1

```

### What does a `POST` do?

A `POST` request is an `HTTP` method that is used to create a new resource on a server or to modify an existing resource. The `POST` request is used for a variety of purposes, such as creating a new user account, submitting a form, or uploading a file.

The `POST` request has the following syntax:

```
POST /resource_path HTTP/1.1

```

Here are some examples of how the `POST` request is used:

* **Creating a new user account:** When we create a new user account on a website, we are typically submitting a form that contains our username, password, and other personal information. This form is submitted using a `POST` request.

* **Submitting a form:** When we submit a form on a website, we are typically sending data to the server. This data can be anything from our name and address to our credit card information. This data is sent using a `POST` request.

* **Uploading a file:** When we upload a file to a website, we are typically submitting a form that contains the file that we want to upload. This form is submitted using a `POST` request.

### What does `PUT` do?

The `PUT` request is an `HTTP` method that is used to update a resource on a server. The `PUT` request is used to replace the entire resource with the data that is provided in the request body.

The `PUT` request has the following syntax:

```
PUT /resource_path HTTP/1.1

```

Here are some examples of how the `PUT` request is used:

* **Updating a user's profile information:** When we update a profile information on a website, we are typically submitting a form that contains the information that we want to update. This form is submitted using a `PUT` request.

* **Updating a product listing:** When we update a product listing on an e-commerce website, we are typically submitting a form that contains the information that we want to update. This form is submitted using a `PUT` request.

### What does `PATCH` do?

The `PATCH` request is an `HTTP` method that is used to update a resource on a server. The `PATCH` request is used to make partial modifications to the resource.

The `PATCH` request has the following syntax:

```
PATCH /resource_path HTTP/1.1

```

The `PATCH` request is a relatively new `HTTP` method, and it is not yet widely supported by all web servers. However, it is becoming increasingly popular as a way to update resources without having to send the entire resource over the network.

***

Created by Vaidas Simkus.  
Please visit my [GitHub](https://github.com/MisterVaidas) profile.  
Resources used: Google, GoogleAI.