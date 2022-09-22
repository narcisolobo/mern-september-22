import { Link } from 'react-router-dom';

const Redirect = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                You are not authorized to view this page.{' '}
                <Link to={'/users/login'}>Please log in.</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
