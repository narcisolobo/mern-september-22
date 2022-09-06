const Character = ({ character }) => {
  return (
    <div className="card position-sticky top-0 my-3">
      <h5 className="card-header">Character</h5>
      <img className="card-img-top" src={ character.image } alt={ character.name } />
      <div className="card-body">
        <p className="card-text">
          <strong>Name: </strong>
          { character.name }
        </p>
        <p className="card-text">
          <strong>Species: </strong>
          { character.species }
        </p>
        <p className="card-text">
          <strong>Gender: </strong>
          { character.gender }
        </p>
      </div>
    </div>
  )
}

export default Character;