const INPUT_CHANGE = 'INPUT_CHANGE';

const initialLoginForm = {
  email: '',
  password: '',
};

const initialRegisterForm = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const formReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [payload.name]: payload.value,
      };
    default:
      throw new Error('Unexpected action type.');
  }
};

export { INPUT_CHANGE, initialLoginForm, initialRegisterForm, formReducer };
