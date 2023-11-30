import './App.css';
import Marcas from './componentes/Marcas.jsx';
import Portada from './componentes/Portada.jsx';
import Quienes from './componentes/Quienes.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Frases from './componentes/Frases.jsx';
import Indicadores from './componentes/Indicadores.jsx';
import Contacto from './componentes/Contacto.jsx';
import Numeros from './componentes/Numeros.jsx';
import Footer from './componentes/Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Portada/>
      <Routes>
      <Route path='/' element= {Portada}/>
        <Route path='/' element= {Frases}/>
      </Routes>
      
      <Quienes/>
      <Frases
      pregunta='¿Que ofrecemos al mercado?'
      descripcion='Con disciplina comercial, ofrecemos estos y más indicadores para garantizar la continuidad de la operación.'
      />
      <Indicadores/>
      <Frases
      pregunta='¿Que nos caracteriza de las otras empresas?'
      descripcion='Nuestra app nos permite dar soluciones a la medida y brindar una información rápida y oportuna para la toma de desiciones'
      imagen='Disp1'
      />
      
      <Marcas/>
      
      
<section className="contactos">
    <section className="container">
      <aside className="row">
        <section className="col">
          <Contacto/>
        </section>
          <section className="col">
            <Numeros/>
          </section>
      </aside>
    </section>
  </section>

  <Footer/>
  </BrowserRouter>
    </div>
  );
}

export default App;
