import './App.css';
import Marcas from './componentes/Marcas.jsx';
import Portada from './componentes/Portada.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Portada/>
      <Marcas/>
    </div>
  );
}

export default App;
