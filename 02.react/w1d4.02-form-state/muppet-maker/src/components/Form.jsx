import React, { useState } from 'react'

const Form = () => {
  const [formState, setFormState] = useState({
    name: '',
    job: '',
    location: ''
  })
  const [nameError, setNameError] = useState(null);
  const [jobError, setJobError] = useState(null);
  const [locationError, setLocationError] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const validateName = () => {
    if (formState.name.length < 3) {
      setNameError('Name must be longer than 3 characters.')
    } else {
      setNameError(null);
    }
  }

  const validateJob = () => {
    if (formState.job.length < 3) {
      setJobError('Job must be longer than 3 characters.')
    } else {
      setJobError(null);
    }
  }

  const validateLocation = () => {
    if (formState.location.length < 3) {
      setLocationError('Location must be longer than 3 characters.')
    } else {
      setLocationError(null);
    }
  }

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
              value={formState.name}
              onChange={ (e) => { handleChange(e) } }
              onBlur={validateName}
            />
            {
              nameError &&
              <span className="form-text text-danger">{ nameError }</span>
            }
          </div>
          <div className="mb-3">
            <label htmlFor="job" className="form-label">Job:</label>
            <input
              type="text"
              name="job"
              id="job"
              className="form-control"
              value={formState.job}
              onChange={ e => handleChange(e) }
              onBlur={validateJob}
            />
            {
              jobError &&
              <span className="form-text text-danger">{ jobError }</span>
            }
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location:</label>
            <input
              type="text"
              name="location"
              id="location"
              className="form-control"
              value={formState.location}
              onChange={(e) => handleChange(e)}
              onBlur={validateLocation}
            />
            {
              locationError &&
              <span className="form-text text-danger">{ locationError }</span>
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form