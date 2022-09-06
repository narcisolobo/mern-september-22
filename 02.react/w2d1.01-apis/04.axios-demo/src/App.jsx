// cSpell: words morty
import { useEffect, useState } from "react";
import axios from "axios";

import "./Flatly.css";

import Nav from "./components/Nav";
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";

const App = () => {
  const baseUrl = "https://rickandmortyapi.com/api/character";
  const [url, setUrl] = useState(baseUrl);
  const [characters, setCharacters] = useState(null);
  const [character, setCharacter] = useState(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setCharacters(res.data))
      .catch((err) => console.log(err));
  }, [url]);
  
  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => setCharacter(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {characters && (
              <CharacterList
                characters={characters}
                setUrl={setUrl}
                setId={setId}
              />
            )}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            {character && <Character character={character} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
