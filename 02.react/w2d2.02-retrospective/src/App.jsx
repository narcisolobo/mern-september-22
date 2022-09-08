// cSpell: words todos

import { Navigate, Routes, Route } from  'react-router-dom';
import AddTodo from './components/AddTodo';
import Nav from './components/Nav';
import ShowTodo from './components/ShowTodo';
import Todos from './components/Todos';
import TodoState from './components/TodoState';

const App = () => {
  return (
    <fieldset>
      <legend>App</legend>
      <Nav />
      <Routes>
        <Route path='/' element={ <Navigate to={'/todos'} /> } />
        <Route path='/todos' element={ <TodoState /> }>
          <Route index element={ <Todos /> } />
          <Route path=':id' element={ <ShowTodo /> } />
          <Route path='new' element={ <AddTodo /> } />
        </Route>
      </Routes>
    </fieldset>
  )
}

export default App;