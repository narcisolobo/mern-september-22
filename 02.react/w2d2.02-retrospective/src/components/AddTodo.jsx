import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const pStyle = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1rem",
};

const AddTodo = () => {
  const [task, setTask] = useState('');
  const { addTodo } = useOutletContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
  };

  return (
    <fieldset>
      <legend>AddTodo</legend>
      <form onSubmit={handleSubmit}>
        <p style={pStyle}>
          <label>Add Todo:</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button>Add Todo</button>
        </p>
      </form>
    </fieldset>
  );
};

export default AddTodo;
