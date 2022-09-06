# The Fetch API

JavaScript offers a built-in method to consume APIs. It is an API itself. It's called the Fetch API.

The global `fetch()` method returns a Promise. We can chain `.then`, `.catch`, and/or `.finally` onto a `fetch()` call as necessary.

A typical Fetch call looks like this:

```js
fetch('http://example.com/api/things')
    .then(res => res.json())
    .then(res => console.log(res.results))
    .catch(err => console.log(err));
```

Let's take a look at what's happening here.

First, we make a Fetch request to some non-existent api to fetch an array of  "thing" objects.

Fetch returns a "thenable" Promise, so we can chain a `.then` call onto the back of it. You'll usually see these calls on separate lines like this. JavaScript doesn't care about white space.

In our first `.then` call, we have an arrow function. We name the parameter `res`, which is short for response, then return the result of calling the `.json()` method on it.

This method takes a response stream and parses it from raw JSON into a JavaScript object. It also returns a Promise, so we can chain another `.then` call onto it.

In the second `.then` call, we have another arrow function. We name this parameter `res` as well, but it is the JavaScript object version returned by the `.json()` call. We then then simply log `res.results` to the console, but we can do anything we like here, like setting some piece of state in a React app.

Finally, we catch any errors in a call to `.catch` and log the error object (which we call `err`) to the console.

## What is `res.results`?

When we make a Fetch call, we need to know what the response object looks like. It could look like anything—these are JSON responses. Before we use the response, we should at least log it, or even better, see what the response looks like in our browser (with [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en-US)) or in [Postman](https://www.postman.com/downloads/).

This example assumes that the "things" requested in the URL are in an array whose key is `results`. This is typical for list requests.