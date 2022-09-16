import { useEffect, useState } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import axios from "axios";

const AllRecords = () => {
  const { baseUrl } = useOutletContext();
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => setRecords(res.data))
      .catch((err) => console.log(err));
  }, [records]);

  const deleteRecord = (id) => {
    axios.delete(`${baseUrl}/${id}`)
      .then(() =>  navigate('/records'))
      .catch(err => console.log(err))
  }

  return (
    <fieldset>
      <legend>All Records</legend>
      <ul>
        {records &&
          records.map((record) => {
            return (
              <li key={record._id}>
                <Link to={`/records/${record._id}`}>{record.title}</Link>
                <button onClick={() => deleteRecord(record._id)}>Delete</button>
              </li>
            );
          })}
      </ul>
    </fieldset>
  );
};

export default AllRecords;
