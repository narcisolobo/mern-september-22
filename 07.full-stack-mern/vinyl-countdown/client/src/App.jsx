import Nav from './components/Nav';
import { Navigate, Routes, Route } from 'react-router-dom'
import Records from './components/Records';
import AllRecords from './pages/AllRecords';
import ShowRecord from './pages/ShowRecord';
import NewRecord from './pages/NewRecord';
import EditRecord from './pages/EditRecord';

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={'/'} element={<Navigate to="/albums" />} />
        <Route path={'/albums'} element={ <Records /> }>
          <Route index element={ <AllRecords /> } />
          <Route path=':id' element={ <ShowRecord /> } />
          <Route path='new' element={ <NewRecord /> } />
          <Route path=':id/edit' element={ <EditRecord /> } />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
