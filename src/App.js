import './App.css';
import Marcas from './componentes/Marcas.jsx';
import Portada from './componentes/Portada.jsx';
import Quienes from './componentes/Quienes.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Frases from './componentes/Frases.jsx';
import Indicadores from './componentes/Indicadores.jsx';

function App() {
  return (
    <div className="App">
      <Portada/>
      <Quienes/>
      <Frases
      pregunta='¿Que ofrecemos al mercado?'
      descripcion='Con disciplina comercial, ofrecemos estos y más indicadores para garantizar la continuidad de la operación.'
      />
      <Indicadores/>
      
      <Marcas/>
    
    </div>
  );
}

export default App;
