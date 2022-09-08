// Common JS import
const express = require("express");
// console.log(express);
const app = express();

// middleware
app.use(express.json());

const todos = [];

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({ "msg": "Edited this response." });
});

app.post('/api/todos', (req, res) => {
  console.log(req.body);
  todos.push(req.body);
  res.json({
    "todos": todos
  });
});

const server = app.listen(8000, () =>
  console.log(`Listening on port ${server.address().port}!`)
);
