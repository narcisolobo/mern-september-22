import { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext, useParams } from "react-router-dom";

const ShowRecord = () => {
  const [record, setRecord] = useState(null);
  const { baseUrl } = useOutletContext();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => setRecord(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <fieldset>
      <legend>Show Record</legend>
      {record && (
        <div>
          <h1>Title: {record.title}</h1>
          <p>Artist: {record.artist}</p>
          <p>Description: {record.description}</p>
          <p>Owned? {record.isOwned ? 'Yes' : 'No'}</p>
          <p>Genre 1: {record.genre1}</p>
          <p>Genre 2: {record.genre2}</p>
          <p>Genre 3: {record.genre3}</p>
        </div>
      )}
    </fieldset>
  );
};

export default ShowRecord;
