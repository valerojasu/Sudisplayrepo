import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './componentes/About';
import Mainp from './componentes/Mainp.jsx';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
      <Route path='/' element= {<Mainp/>}/>
      <Route path='/mainp' element= {<Mainp/>}/>
      <Route path='/about' element= {<About/>}/>
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
