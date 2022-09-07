import { useParams } from "react-router-dom";

const ShowHero = ({heroes}) => {
  const { id } = useParams();
  const hero = heroes.find(h => h.id === id)

  return (
    <fieldset>
      <legend>ShowHero</legend>
      <h2>Show Hero</h2>
      <h3>You are viewing Hero ID: {id}</h3>
      {hero &&
        <div>
          <h4>{hero.alterEgo}</h4>
          <p>{hero.realName}</p>
          <p>{hero.company}</p>
        </div>
      }
    </fieldset>
  )
}

export default ShowHero;