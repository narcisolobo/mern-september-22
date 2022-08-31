# Functional Programming

JavaScript is a multi-paradigm language. It supports both OOP, functional programming, or a combination of both.

We'll be using classes for the first day of React, but we'll transition to functional programming the next day.

The platform has a list of guidelines to follow when using functional programming. One of those guidelines is that our functions should be pure.

Pure functions are functions which:

1. the function's return values are identical for identical arguments
2. the function's application has no side effects.

This means we will be making copies of arrays or objects passed in rather than working "in-place".