import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/records/hello')
      .then((message) => setMessage(message.data))
      .catch((err) => console.log(err));
  }, [message]);

  return <div>{message && <h1>{message.message}</h1>}</div>;
};

export default App;
