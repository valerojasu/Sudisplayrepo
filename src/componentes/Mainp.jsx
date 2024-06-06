import React from 'react'
import Portada from './Portada';
import '../css/Portada.css'
import '../css/Contacto.css'
import Quienes from './Quienes';
import Indicadores from './Indicadores';
import Frases from './Frases';
import Marcas from './Marcas';
import Contacto from './Contacto';
import Numeros from './Numeros';
import Footer from './Footer';
import Display1 from './Display1';
import QuoteSlideshow from '../QuoteSlideshow';
import { Container, Row, Col } from 'react-bootstrap';


function Mainp(){
 
    return(
<div>
  <div>

    <Portada/>
  </div>

  <div>
  <Quienes/>
  </div>
    <div>
      <Display1
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
    />
  </div>
<div>
<Marcas/>
</div>
<section>
      <QuoteSlideshow />
</section>



<section className="contactos">
<Container>
  <Row>
    <Col>
    <Contacto/>
    </Col>
    <Col>
    <Numeros/>
    </Col>
  </Row>
</Container>


</section>
<Footer/>

</div>

 
    );
}

export default Mainp