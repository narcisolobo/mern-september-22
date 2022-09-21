import React from 'react';
import { Outlet } from 'react-router-dom';

const Users = () => {
  const baseUrl = 'http://localhost:8000/api/users';
  return <Outlet context={baseUrl} />;
};

export default Users;
