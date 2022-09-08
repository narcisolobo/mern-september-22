// cSpell: words todos

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <fieldset>
      <legend>Nav</legend>
      <Link to={"/todos"} style={{ marginRight: "1em" }}>
        All Todos
      </Link>
      <Link to={"/todos/new"}>Add Todo</Link>
    </fieldset>
  );
};

export default Nav;
