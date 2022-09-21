import { useReducer, useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import axios from 'axios';
import {
  INPUT_CHANGE,
  initialRegisterForm,
  formReducer,
} from '../reducers/reducers';

const Register = () => {
  const baseUrl = useOutletContext();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formState, dispatch] = useReducer(formReducer, initialRegisterForm);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/register`, formState)
      .then(() => navigate('/records'))
      .catch(err => {
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="row justify-content-center mt-3">
      <div className="col-lg-6 col-md-8 col-sm-12">
        <div className="card">
          <h5 className="card-header">REGISTER</h5>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username:
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  value={formState.username}
                  onChange={e =>
                    dispatch({
                      type: INPUT_CHANGE,
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
                {errors.username && (
                  <span className="form-text text-danger">
                    {errors.username.message}
                  </span>
                )}
              </div>
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
                {errors.email && (
                  <span className="form-text text-danger">
                    {errors.email.message}
                  </span>
                )}
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
                {errors.password && (
                  <span className="form-text text-danger">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="form-control"
                  value={formState.confirmPassword}
                  onChange={e =>
                    dispatch({
                      type: INPUT_CHANGE,
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
                {errors.confirmPassword && (
                  <span className="form-text text-danger">
                    {errors.confirmPassword.message}
                  </span>
                )}
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
          Have an account? <Link to={'/users/login'}>Click here to login.</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
