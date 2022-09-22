const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initialUser = {
  userId: '123abc',
  username: 'freddie'
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
      userState.userId = '';
      userState.username = '';
      localStorage.setItem('user', JSON.stringify(userState))
      return userState;
    default:
      throw new Error('Unexpected action type.');
  }
};

export { LOGIN, LOGOUT, initialUser, userReducer };
