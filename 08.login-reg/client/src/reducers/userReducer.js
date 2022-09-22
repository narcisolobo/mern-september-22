const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const user = JSON.parse(localStorage.getItem('user'));

const initialUser = {
  userId: user.userId,
  username: user.username
};

const userReducer = (userState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      userState.userId = payload.userId;
      userState.username = payload.username;
      localStorage.setItem('user', JSON.stringify(userState))
      return userState;
    case LOGOUT:
      userState.userId = null;
      userState.username = null;
      localStorage.setItem('user', JSON.stringify(userState))
      return userState;
    default:
      throw new Error('Unexpected action type.');
  }
};

export { LOGIN, LOGOUT, initialUser, userReducer };
