import React from 'react'
import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Dashboard from './Components/Modules/Dashboard';
import Notfound from './Components/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Partists from './Components/Pages/Partists';
import Palbums from './Components/Pages/Palbums';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<Notfound />} />
          <Route path='/partists' element={<Partists />} />
          <Route path='/palbums' element={<Palbums />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
