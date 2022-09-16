import { Navigate, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import RecordContext from "./components/RecordContext";
import AllRecords from "./pages/AllRecords";
import NewRecord from "./pages/NewRecord";
import EditRecord from "./pages/EditRecord";
import ShowRecord from "./pages/ShowRecord";

const App = () => {
  return (
    <fieldset>
      <legend>App</legend>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to={"/records"} />} />
        <Route path="/records" element={<RecordContext />}>
          <Route index element={<AllRecords />} />
          <Route path="new" element={<NewRecord />} />
          <Route path=":id" element={<ShowRecord />} />
          <Route path=":id/edit" element={<EditRecord />} />
        </Route>
      </Routes>
    </fieldset>
  );
};

export default App;
