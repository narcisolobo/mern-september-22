import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Records = () => {
  const baseUrl = 'http://localhost:8000/api/records';
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios.get(baseUrl)
      .then(res => setRecords(res.data))
      .catch(err => console.log(err));
  });

  return (
    <fieldset>
      <legend>Records</legend>
      <Outlet context={{ records, setRecords }} />
    </fieldset>
  )
}

export default Records;