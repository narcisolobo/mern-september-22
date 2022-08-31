# Callback Functions

A callback function is a function that is passed as an argument to another function—just like any other value—to be "called back" at a later time.

Functions that accept other functions as arguments are called *higher order functions*. Here's a generic example.

```js
function myFunction(callback) {
  callback();
}
```

Here we  declared a higher order function, `myFunction` that has another function `callback` as a parameter. Inside, we then invoke the callback.

Let's see this in action. First we'll declare the higher order function.

```js
function greet(firstName, callback) {
    callback(firstName);
}
```

Now let's declare the callback function:

```js
function greetByName(firstName) {
    console.log(`Hello, ${firstName}!`)
}
```

Finally, we can invoke `greet`, passing in a first name and our `greetByName` callback.

```js
greet('Bobothy', greetByName);
// Hello, Bobothy!
```

## Why Use Callbacks?

Most of the time we are creating programs and applications that operate in a synchronous manner. In other words, our operations are started only after the preceding ones have completed.

Often, when we're creating web applications, we must request data from other sources, such as an external API. In this cases, we don’t always know when our data will be served back.

In these instances we want to wait for the response, but we don’t always want our entire application grinding to a halt while our data is being fetched. These situations are where callback functions come in handy.

## Asynchronous JavaScript
Let's take a look at the `setTimeout()` higher order function.

```js
setTimeout(() => {
  console.log('Hello');
}, 3000);
```

The `setTimeout()` method is part of the Web API. This API contains asynchronous methods, like `setTimeout()`. These are also called non-blocking operations, since they do not block any operations that follow them.

It can take two arguments, a callback function, and a delay in milliseconds. After the delay expires, the callback function is invoked.

Here, our callback is an anonymous arrow function that just logs "Hello". Our delay is 3000 milliseconds, or 3 seconds. When we run the code, we see "Goodbye" logged to the console. After three seconds, `setTimeout()` invokes the callback, which logs "Hello".

We will see callbacks quite a bit in this stack.