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
    axios.post('http://localhost:8000/api/records', {
      title,
      artist,
      description
    })
      .then(() => navigate('/albums'))
      .catch(err => console.log(err));
  }

  return (
    <fieldset>
      <legend>New Record</legend>
      <form onSubmit={submitHandler}>
        <p>
          title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          artist:
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </p>
        <p>
          description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </p>
        <button>Add Record</button>
      </form>
    </fieldset>
  );
};

export default NewRecord;
