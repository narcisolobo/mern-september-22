// cSpell: words todos
import { Link } from "react-router-dom";

const listStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '.5rem'
}

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li style={listStyle}>
      <div className="item-left">
        <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={() => toggleComplete(todo.id)}
          style={{ marginRight: '.5rem' }}
        />
        <Link
          to={`/todos/${todo.id}`}
          style={{
            textDecoration: `${todo.isComplete ? "line-through" : "none"}`,
          }}
        >
          {todo.task}
        </Link>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
    </li>
  );
};

export default TodoItem;
