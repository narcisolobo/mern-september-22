# Class Components
---

## Intro to Class Components
As we've seen, react components are independent and reusable bits of code. With components, we can think about each lego piece of our app in isolation.

There are two types of components, class components and function components. Conceptually, both types of components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

We will be using class components for today, then switching over to function components permanently starting tomorrow. Prior to React 16.8, class components were the only way to track state and lifecyle in a React component.

With the addition of hooks, function components are now almost equivalent to class components. Some of the React code you will see online are written using class components, so you should be able to understand a basic class component.

```jsx
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is the App Component.</h1>
      </div>
    )
  }
}

export default App
```

Notice this simple class component consists of one function, the `render()` function. This function returns some JSX, which gets transpiled by Babel (included in every create-react-app app) into JavaScript.

Here is a look at the above after Babel transpilation.

```js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return
    React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "This is the App Component."
        )
    );
  }

}

export default App;
```

## Props and Class Components

Let's say we want to render a number of cards in our app. We could create another component to describe what one of those cards should look like. Let's call this card, `HeroCard.jsx`.

```jsx
import React, { Component } from 'react'
import HeroCard from './components/HeroCard';

class App extends Component {

  render() {
    return (
      <div>
        <h1>This is the App Component</h1>
        <HeroCard
          heroName='Spider-man'
          alias='Peter Parker'
        />
        <HeroCard
          heroName='Ms. Marvel'
          alias='Kamala Khan'
        />
        <HeroCard
          heroName='Shang Chi'
          alias='Shawn'
        />
      </div>
    )
  }
}

export default App
```

Our app component is now displaying three HeroCards. Notice that each HeroCard "tag" has two "attributes" - "heroName" and "alias". This is called "passing down props".

Our HeroCard component could look something like this:

```js
import React, { Component } from "react";

export class HeroCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <fieldset>
        <legend>HeroCard</legend>
        <h1>{ this.props.heroName }</h1>
        <h2>{ this.props.alias }</h2>
      </fieldset>
    );
  }
}

export default HeroCard;
```

## Props are Read-Only
Whether you declare a component as a function or a class, it must never modify its own props.

React is pretty flexible but it has a single strict rule:

All React components must act like pure functions with respect to their props.

Of course, application UIs are dynamic and change over time. Next, we will introduce a new concept of “state”. State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.