import { useState } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate } from 'react-router-dom';
import RecordForm from '../components/RecordForm';

const NewRecord = () => {
  const navigate = useNavigate();
  const {baseUrl} = useOutletContext();
  const initialRecord = {
    title: '',
    artist: '',
    description: ''
  }

  const insertRecord = (e, record) => {
    e.preventDefault();
    axios
      .post(baseUrl, record)
      .then(() => navigate('/records'))
      .catch((err) => console.log(err));
  };

  return (
    <RecordForm formText={'Add Record'} submitHandler={insertRecord} initialRecord={initialRecord} />
  );
};

export default NewRecord;
