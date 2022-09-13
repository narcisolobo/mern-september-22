import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewRecord = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/records', {
        title,
        artist,
        description,
      })
      .then(() => navigate('/albums'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
      <h5 className="card-header">Add Record</h5>
      <div className="card-body">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control form-control-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="artist" className="form-label">
              Artist:
            </label>
            <input
              type="text"
              name="artist"
              id="artist"
              className="form-control form-control-sm"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              className='form-control'
              name="description"
              id="description"
              value={description}
              onChange={(e) => e.target.value}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button className='btn btn-primary btn-sm'>Add Record</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewRecord;
