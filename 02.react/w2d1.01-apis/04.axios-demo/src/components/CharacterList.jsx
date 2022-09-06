import React from "react";

const CharacterList = (props) => {
  const { characters, setUrl, setId } = props;

  return (
    <div className="card my-3">
      <div className="card-header d-flex justify-content-between">
        <button
          className={`btn btn-link ${characters.info.prev ? "" : "disabled"}`}
          onClick={() => setUrl(characters.info.prev)}
        >
          Prev
        </button>
        <button
          className={`btn btn-link ${characters.info.next ? "" : "disabled"}`}
          onClick={() => setUrl(characters.info.next)}
        >
          Next
        </button>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {characters.results.map((char) => {
            return (
              <li key={char.id} className="list-group-item">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setId(char.id)}
                >
                  {char.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button
          className={`btn btn-link ${characters.info.prev ? "" : "disabled"}`}
          onClick={() => setUrl(characters.info.prev)}
        >
          Prev
        </button>
        <button
          className={`btn btn-link ${characters.info.next ? "" : "disabled"}`}
          onClick={() => setUrl(characters.info.next)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
