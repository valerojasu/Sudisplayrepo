import React from "react";
import '../css/Indicadores.css';
import { Container, Row, Col } from 'react-bootstrap';

function Indicadores() {
  const indicadores = [
    { id: 1, title: "Mercaderistas 2.0" },
    { id: 2, title: "APP" },
    { id: 3, title: "Impulsadoras y modelos" },
    { id: 4, title: "Mediciones de la ejecución según lo negociado en el punto de venta" },
    { id: 5, title: "Censos de precio de competencia" },
    { id: 6, title: "Estandarización de procesos" },
    { id: 7, title: "Activación BTL del PDV" },
    { id: 8, title: "Comandos de ejecución" },
  ];

  return (
    <div className="infor">
      <Container>
        <Row>
          {indicadores.slice(0, 3).map(indicador => (
            <Col key={indicador.id} className="indi" xs={12} md={4}>
              <h3 className="indif">{indicador.title}</h3>
            </Col>
          ))}
        </Row>
        <Row>
          {indicadores.slice(3, 6).map(indicador => (
            <Col key={indicador.id} className="indi" xs={12} md={4}>
              <h3 className="indif">{indicador.title}</h3>
            </Col>
          ))}
        </Row>
        <Row>
          {indicadores.slice(6).map(indicador => (
            <Col key={indicador.id} className="indi" xs={12} md={6}>
              <h3 className="indif">{indicador.title}</h3>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Indicadores;
