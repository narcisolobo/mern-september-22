import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [location, setLocation] = useState('')

  return (
    <div className="card mt-3">
      <h5 className="card-header">Make a Muppet</h5>
      <div className="card-body">
        <form className='mt-3'>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={name}
              onChange={ (e) => { setName(e.target.value) } }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="job" className="form-label">Job:</label>
            <input
              type="text"
              name="job"
              id="job"
              className="form-control"
              value={job}
              onChange={ event => setJob(event.target.value) }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location:</label>
            <input
              type="text"
              name="location"
              id="location"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form