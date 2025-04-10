import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Portada from './Portada';
import Quienes from './Quienes';
import Indicadores from './Indicadores';
import Frases from './Frases';
import Marcas from './Marcas';
import Contacto from './Contacto';
import Numeros from './Numeros';
import Footer from './Footer';
import Display1 from './Display1';
import QuoteSlideshow from '../QuoteSlideshow';

import '../css/Portada.css';
import '../css/Contacto.css';

function Mainp() {
  return (
    <div>
      <Portada />
      <Quienes />

      <Display1
        pregunta="¿Qué ofrecemos al mercado?"
        descripcion="Con disciplina comercial, ofrecemos estos y más indicadores para garantizar la continuidad de la operación."
      />

      <Indicadores />

      <Frases
        pregunta="¿Qué nos caracteriza de las otras empresas?"
        descripcion="Nuestra app nos permite dar soluciones a la medida y brindar una información rápida y oportuna para la toma de decisiones."
      />

      <Marcas />

      <section>
        <QuoteSlideshow />
      </section>

      <section className="contactos">
        <Container>
          <Row>
            <Col sx={12}>
              <Contacto />
            </Col>
            <Col sx={12}>
              <Numeros />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default Mainp;
