# Local Storage and How To Use It On Websites

### Why would a developer use local storage for a web application?

There are a few reasons why a developer might use local storage for a web application.

* **To store data that needs to be persistent between visits.** For example, a web application that allows users to save their 
  progress in a game could use local storage to store the user's current score and level. This data would then be available 
  the next time the user visits the application, even if they close their browser or switch to a different website.

* **To store data that is too large to be sent over the network every time the page loads.** For example, a web application that 
  allows users to upload images could use local storage to store the images locally. This would save bandwidth and improve the 
  performance of the application.

* **To store data that is not sensitive and does not need to be protected.** Local storage is not as secure as other methods of 
  storing data, such as a database or a server-side session. However, it is a good option for storing data that is not sensitive, 
  such as user preferences or a shopping cart.

### What information should not be stored in local storage?

Local storage should not be used to store any sensitive information, such as:

* Passwords.
* Personal identification information.
* Financial information.
* API keys.

### Local storage can store what type of data? How would you convert it to that type before storing?

Local storage can store strings, numbers, booleans, and arrays.

* **Strings:** we can convert any data type to a string by using the `toString()` method.
* **Numbers:** we can convert strings to numbers using the `parseInt()` or `parseFloat()` methods.
* **Booleans:** we can convert strings to booleans using the `Boolean()` method.
* **Arrays:** we can convert objects to arrays using the `Object.keys()` method.

***

Created by Vaidas Simkus  
Please visit my [GitHub](https://github.com/MisterVaidas) profile.