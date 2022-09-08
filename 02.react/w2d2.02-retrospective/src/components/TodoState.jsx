// cSpell: words todos uuidv

import { useEffect, useState } from "react";
import axios from 'axios';
import { Outlet, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const TodoState = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos?_start=0&_end=10')
      .then(res => {
        const myTodos = res.data.map(todo => {
          const newTodo = {
            id: uuidv4(),
            task: todo.title,
            isComplete: todo.completed
          }
          return newTodo;
        })
        setTodos(myTodos);
      })
      .catch(err => console.log(err));

  }, []);

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo;
    })
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const addTodo = (task) => {
    const newTodo = {
      id: uuidv4(),
      task: task,
      isComplete: false
    }
    setTodos([...todos, newTodo]);
    navigate('/todos');
  };

  return (
    <fieldset>
      <legend>TodoState</legend>
      <Outlet context={{ todos, toggleComplete, deleteTodo, addTodo }} />
    </fieldset>
  )
}

export default TodoState;