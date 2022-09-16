import React from "react";
import RecordForm from "../components/RecordForm";
import axios from "axios";
import { useOutletContext, useNavigate } from "react-router-dom";

const NewRecord = () => {
  const { baseUrl } = useOutletContext();
  const navigate = useNavigate();

  const insertRecord = (e, record) => {
    e.preventDefault();
    axios
      .post(baseUrl, record)
      .then((res) => {
        console.log(res);
        navigate("/records");
      })
      .catch((err) => console.log(err));
  };

  const emptyRecord = {
    title: "",
    artist: "",
    description: "",
    isOwned: false,
    genre1: "",
    genre2: "",
    genre3: "",
  };

  return (
    <fieldset>
      <legend>New Record</legend>
      <RecordForm submitHandler={insertRecord} initialRecord={emptyRecord} />
    </fieldset>
  );
};

export default NewRecord;
