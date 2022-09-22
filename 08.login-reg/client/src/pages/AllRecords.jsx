import { useContext } from 'react';
import UserContext from '../context/UserContext';

const AllRecords = () => {
  const { userState } = useContext(UserContext);
  return (
    <div>
      <h1>{userState.username} {userState.userId}</h1>
    </div>
  );
};

export default AllRecords;
