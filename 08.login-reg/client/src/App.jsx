import './sketchy.css';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Users from './components/Users';
import Records from './components/Records';
import AllRecords from './pages/AllRecords';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/users/login'} />} />
      <Route path="/users" element={<Users />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/records" element={<Records />}>
        <Route index element={<AllRecords />} />
      </Route>
    </Routes>
  );
};

export default App;
