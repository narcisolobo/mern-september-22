import styles from "../styles/Menu.module.css";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const { flex, list } = styles;
  const navigate = useNavigate();

  const redirectToHeroes = () => {
    navigate('/heroes')
  };

  return (
    <fieldset>
      <legend>Menu</legend>
      <nav className={flex}>
        <ul className={`${flex} ${list}`}>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/heroes"}>Superheroes</Link>
          </li>
        </ul>
        <button onClick={ redirectToHeroes }>Refresh</button>
      </nav>
    </fieldset>
  );
};

export default Menu;
