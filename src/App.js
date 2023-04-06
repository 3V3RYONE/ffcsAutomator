import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser'
import AllUser from './components/AllUser'
import ViewCourse from './components/ViewCourse'

import CodeforInterview from './components/CodeforInterview'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import EditUser from './components/EditUser';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
     <Route path='/'    element={<CodeforInterview/>}/>
     <Route path='/add' element={<AddUser/>}/>
     <Route path='/all'     element={<AllUser/>}/>
     <Route path='/edit/:id'     element={<EditUser/>}/>
     <Route path='/view'     element={<ViewCourse/>}/>

    </Routes>
     
    </BrowserRouter>     
  );
}

export default App;
