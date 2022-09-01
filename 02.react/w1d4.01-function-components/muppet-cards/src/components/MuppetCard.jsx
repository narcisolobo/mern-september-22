import React, { useState } from 'react'

const MuppetCard = (props) => {
  const { name, job, location, age } = props;
  const [ageState, setAgeState] = useState(age);

  const birthday = () => {
    setAgeState(ageState + 1);
  }

  return (
    <div className="card mt-3">
      <h5 className="card-header">MUPPET CARD</h5>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="row">
          <div className="col">Job: {job}</div>
          <div className="col">Location: {location}</div>
          <div className="col">Age: {ageState}</div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <button
              className="btn btn-primary w-100"
              onClick={() => setAgeState(ageState + 1)}
            >
              Birthday
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MuppetCard