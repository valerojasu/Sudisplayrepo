import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Quienes.css';

function Quienes() {
  return (
    <div className="infor">
      <Container>
        <Row className="align-items-center">
          {/* Columna izquierda - Texto */}
          <Col lg={6} md={5} className="colt">
            <h1 className="titu1">¿Quiénes somos?</h1>
            <p className="parra">
              SuDisplay 2.0 es su socio comercial, cumplimos nuestros valores con
              excelencia y conocimiento del mercado, entendiendo sus necesidades y
              tendencias actuales. Nuestra relación comercial se basa en los más altos
              estándares de confidencialidad. Complementamos con una estrategia alineada
              con socio comercial. Nuestra mezcla de experiencia del equipo humano con
              más de 25 años en consumo masivo y las ideas de nuevas generaciones nos dan
              una ventaja competitiva! Iniciamos nuestras operaciones en el 2022.
            </p>
          </Col>

          {/* Columna central - Títulos y descripción */}
          <Col lg={3} md={3} className="colf">
            <div className="persona">
              <p className="titu2">David Vargas</p>
              <p className="titu3">Gerente Financiero</p>
              <img
                src={require('../Imagenes/David.jpeg')}
                alt="David Vargas"
                className="fotoq"
              />
            </div>
          </Col>
          <Col lg={3} md={3} className="colf">
          <div className="persona">
              <p className="titu2">Carlos Gutiérrez</p>
              <p className="titu3">Gerente Comercial</p>
              <img
                src={require('../Imagenes/Cali.jpeg')}
                alt="Carlos Gutiérrez"
                className="fotoq"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Quienes;
