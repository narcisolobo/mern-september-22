import { useNavigate } from 'react-router-dom';
import Redirect from './Redirect';

const AllRecords = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  
  if (user.userId == null) {
    return <Redirect />
  } else {
    return (
      <div>
        <h1>
          NAME: {user.username} ID: {user.userId}
        </h1>
      </div>
    );
  }

};

export default AllRecords;
