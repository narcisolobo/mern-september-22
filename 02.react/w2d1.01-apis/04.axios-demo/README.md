# The useEffect Hook

In React 16.8, hooks were introduced into the React library. What was previously only possible in class components could now be done in function components. We could now have state with the `useState` hook in function components. We could also hook into a component's lifecycle methods with the `useEffect` hook.

The useEffect hook takes in a callback. By default, React invokes that callback when the component renders, when it updates, and when it is about to unmount.

Here is the skeleton of a `useEffect` call:

```js
  useEffect(() => {
    // body of callback
  
    return () => {
      // optional cleanup callback
    }
  })
```

Let's see a more practical example. Say we were calling an API in this component. We could use the response to set a piece of state.

```jsx
// imports removed for brevity
const CatFact = () => {
    const [catFact, setCatFact] = useState('');
    useEffect(() => {
        axios.get('https://catfact.ninja/fact')
            .then(res => setCatFact(res.data))
            .catch(err => console.log(err))
    })
};
```

The way we have written our `useEffect` will execute the callback (the axios call) when the component first mounts, after it updates, and right before it unmounts.

If you would like to change that behavior, we need to add an optional second argument to our `useEffect` call—the dependency array.

```jsx
// imports removed for brevity
const CatFact = () => {
    const [catFact, setCatFact] = useState('');
    useEffect(() => {
        axios.get('https://catfact.ninja/fact')
            .then(res => setCatFact(res.data))
            .catch(err => console.log(err))
    }, []) // <-- this empty array is new
};
```
The dependency array contains a list of watched variables. If any of those variables changes, the `useEffect` will invoke. If you leave it empty, like we have here, the `useEffect` runs once and only once—after the component first mounts.