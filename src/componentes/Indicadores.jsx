import React from "react";
import '../css/Indicadores.css';
import { Container, Row, Col } from 'react-bootstrap';


function Indicadores() {
return(
        <div className="infor">
            <Container>
      <Row>
      <Col className="indi" >
      <h3 className="indif"> Mercaderistas 2.0</h3>
        </Col>
        <Col className="indi" >
      <h3 className="indif"> APP</h3>
        </Col>
        <Col className="indi" >
      <h3 className="indif"> Impulsadoras y modelos</h3>
        </Col>
        
      </Row>
      <Row>
      <Col className="indi" >
      <h3 className="indif"> Mediciones de la ejecución según lo negociado en el punto de venta</h3>
        </Col>
        <Col className="indi" >
      <h3 className="indif"> Censos de precio de competencia</h3>
        </Col>
        <Col className="indi" >
      <h3 className="indif">Estandarización de procesos</h3>
        </Col>
      </Row>
      <Row>
      <Col className="indi" >
      <h3 className="indif"> Activación BTL del PDV </h3>
        </Col>
        <Col className="indi" >
      <h3 className="indif"> Comandos de ejecución</h3>
        </Col>
       
        
      </Row>
      
      
    </Container>

    </div>
)
    
}
export default Indicadores