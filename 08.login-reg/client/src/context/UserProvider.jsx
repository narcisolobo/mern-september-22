import { useReducer } from 'react';
import UserContext from './UserContext';
import {
  LOGIN,
  LOGOUT,
  initialUser,
  userReducer,
} from '../reducers/userReducer';

const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, initialUser);

  const loginUser = user => {
    dispatch({
      type: LOGIN,
      payload: {
        userId: user.userId,
        username: user.username,
      },
    });
  };

  const logoutUser = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <UserContext.Provider value={{ userState, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
