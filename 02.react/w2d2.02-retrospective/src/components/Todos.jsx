// cSpell: words todos

import { Link, useOutletContext } from "react-router-dom";
import TodoItem from "./TodoItem";

const Todos = () => {
  const { todos, toggleComplete, deleteTodo } = useOutletContext();

  return (
    <fieldset>
      <legend>Todos</legend>
      <ul>
        {todos &&
          todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            );
          })}
      </ul>
    </fieldset>
  );
};

export default Todos;
