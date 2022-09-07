import { Link } from "react-router-dom";

const HeroList = (props) => {
  const {heroes} = props;

  return (
    <fieldset>
      <legend>HeroList</legend>
      <h2>HeroList</h2>
      <ul>
        {heroes &&
          heroes.map((hero) => {
            return <li key={hero.id}><Link to={`/heroes/${hero.id}`}>{hero.alterEgo}</Link></li>;
          })}
      </ul>
    </fieldset>
  );
};

export default HeroList;
