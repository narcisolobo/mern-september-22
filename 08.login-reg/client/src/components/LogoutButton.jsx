import UserContext from '../context/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logoutUser } = useContext(UserContext);
  const logout = () => {
    axios
      .get('http://localhost:8000/api/users/logout')
      .then(() => {
        logoutUser();
        navigate('/users/login');
      })
      .catch(err => console.log(err));
  };

  return (
    <button className="btn btn-link" onClick={logout}>
      LOGOUT
    </button>
  );
};

export default LogoutButton;
