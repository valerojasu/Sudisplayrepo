import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './componentes/About';
import Mainp from './componentes/Mainp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainp />} />
        <Route path='/mainp' element={<Mainp />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

