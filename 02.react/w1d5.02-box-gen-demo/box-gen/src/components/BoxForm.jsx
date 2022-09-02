import React, { useState } from "react";

const BoxForm = ({ boxes, setBoxes }) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setBoxes([
      ...boxes,
      color
    ])
  }

  return (
    <div className="card">
      <h5 className="card-header">GENERATE A BOX</h5>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="color" className="form-label">
              Color:
            </label>
            <input
              className="form-control"
              type="color"
              name="color"
              id="color"
              value={color}
              onChange={((e) => setColor(e.target.value))}
            />
          </div>
          <button className="btn btn-primary w-100">CREATE BOX</button>
        </form>
      </div>
    </div>
  );
};

export default BoxForm;
