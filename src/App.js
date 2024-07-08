
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';
import { Signin } from './pages/signin';
import { Signup } from './pages/Signup';
import Dashboard from './pages/Dashboard';



function App() {

  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/starred' element={<Starred />} />
        <Route path='/show/:id' element={<Show />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
