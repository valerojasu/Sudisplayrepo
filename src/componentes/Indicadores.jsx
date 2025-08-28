import React from "react";
import "../css/Indicadores.css";
import { Container, Row, Col } from "react-bootstrap";

function Indicadores() {
  const indicadores = [
    { id: 1, title: "Mercaderistas 2.0" },
    { id: 2, title: "APP" },
    { id: 3, title: "Impulsadoras y modelos" },
    {
      id: 4,
      title:
        "Mediciones de la ejecución según lo negociado en el punto de venta",
    },
    { id: 5, title: "Censos de precio de competencia" },
    { id: 6, title: "Estandarización de procesos" },
    { id: 7, title: "Activación BTL del PDV" },
    { id: 8, title: "Comandos de ejecución" },
    { id: 9, title: "E2E" },
  ];

  return (
    <Container className="infor">
      <Row className="justify-content-center">
        {indicadores.map((indicador) => (
          <Col key={indicador.id} className="indi">
            <h3 className="indif">{indicador.title}</h3>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Indicadores;
