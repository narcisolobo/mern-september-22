import { useReducer } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import axios from 'axios';
import {
  INPUT_CHANGE,
  initialLoginForm,
  formReducer,
} from '../reducers/formReducers';

const Login = () => {
  const baseUrl = useOutletContext();
  const navigate = useNavigate();
  const [formState, dispatch] = useReducer(formReducer, initialLoginForm);
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/login`, formState)
      .then(() => navigate('/records'))
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="card">
            <h5 className="card-header">LOGIN</h5>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    value={formState.email}
                    onChange={e =>
                      dispatch({
                        type: INPUT_CHANGE,
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    value={formState.password}
                    onChange={e =>
                      dispatch({
                        type: INPUT_CHANGE,
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <input
                    type="submit"
                    value="SUBMIT"
                    className="btn btn-success"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="alert alert-light text-center">
            Need an account?{' '}
            <Link to={'/users/register'}>Click here to register.</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
