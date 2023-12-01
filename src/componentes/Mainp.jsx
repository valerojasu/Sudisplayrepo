import React from 'react'
import Portada from './Portada';
import Quienes from './Quienes';
import Indicadores from './Indicadores';
import Frases from './Frases';
import Marcas from './Marcas';
import Contacto from './Contacto';
import Numeros from './Numeros';
import Footer from './Footer';


function Mainp(){
    return(
<div className="App">
  <div>
    <Portada/>
  </div>

  <div>
  <Quienes/>
  </div>
    <div>
      <Frases
      pregunta='¿Que ofrecemos al mercado?'
      descripcion='Con disciplina comercial, ofrecemos estos y más indicadores para garantizar la continuidad de la operación.'
      />
    </div>

  <div>
  <Indicadores/>
  </div>

  <div>
    <Frases
    pregunta='¿Que nos caracteriza de las otras empresas?'
    descripcion='Nuestra app nos permite dar soluciones a la medida y brindar una información rápida y oportuna para la toma de desiciones'
    imagen='Disp1'
    />
  </div>
<div>
<Marcas/>
</div>



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
</div>

 
    );
}

export default Mainp