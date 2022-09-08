// cSpell: words todos

import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const ShowTodo = () => {
  const { id } = useParams();
  const { todos } = useOutletContext();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    setTodo(todos.find((t) => t.id === id));
  }, [id]);

  return (
    <fieldset>
      <legend>ShowTodo</legend>

      {todo && (
        <div>
          <h2>Todo #{todo.id}</h2>
          <p
            style={{
              textDecoration: `${todo.isComplete ? "line-through" : "none"}`,
            }}
          >
            Title: {todo.task}
          </p>
          <p>Complete: {todo.isComplete ? "true" : "false"}</p>
        </div>
      )}
    </fieldset>
  );
};

export default ShowTodo;
