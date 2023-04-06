import logo from './logo.svg';
import './App.css';
import AllUser from './components/AllUser'
import CodeforInterview from './components/CodeforInterview'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
     <Route path='/'    element={<CodeforInterview/>}/>
     <Route path='/all'     element={<AllUser/>}/>
    </Routes>
     
    </BrowserRouter>     
  );
}

export default App;
