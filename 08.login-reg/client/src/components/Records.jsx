import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const Records = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Records;
