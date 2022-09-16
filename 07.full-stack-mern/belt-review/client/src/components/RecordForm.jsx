import { useState } from "react";


const RecordForm = (props) => {
  const { submitHandler, initialRecord } = props;
  const [recordForm, setRecordForm] = useState(initialRecord)

  const changeHandler = e => {
    setRecordForm({
      ...recordForm,
      [e.target.name]: e.target.value
    })
  };

  const checkBoxHandler = () => {
    setRecordForm({
      ...recordForm,
      isOwned: !recordForm.isOwned
    })
  };

  return (
    <fieldset>
      <legend>Record Form</legend>
      <form onSubmit={(e) => submitHandler(e, recordForm)}>
        <p>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" value={recordForm.title} onChange={changeHandler} />
        </p>
        <p>
          <label htmlFor="artist">Artist:</label>
          <input type="text" name="artist" id="artist" value={recordForm.artist} onChange={changeHandler} />
        </p>
        <p>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={recordForm.description}
            onChange={changeHandler}
          ></textarea>
        </p>
        <p>
          <input type="checkbox" name="isOwned" id="isOwned" value={recordForm.isOwned} onChange={checkBoxHandler} />
          <label htmlFor="isOwned">Owned?</label>
        </p>
        <fieldset>
          <legend>Genres (Optional):</legend>
          <p>
            <label htmlFor="genre1">Genre 1:</label>
            <input type="text" name="genre1" id="genre1" value={recordForm.genre1} onChange={changeHandler} />
          </p>
          <p>
            <label htmlFor="genre2">Genre 2:</label>
            <input type="text" name="genre2" id="genre2" value={recordForm.genre2} onChange={changeHandler} />
          </p>
          <p>
            <label htmlFor="genre3">Genre 3:</label>
            <input type="text" name="genre3" id="genre3" value={recordForm.genre3} onChange={changeHandler} />
          </p>
          <button>Submit</button>
        </fieldset>
      </form>
    </fieldset>
  );
};

export default RecordForm;
