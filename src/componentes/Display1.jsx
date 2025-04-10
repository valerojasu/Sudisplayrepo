import React from "react";
import '../css/Frase.css';
import { Container, Row, Col } from 'react-bootstrap';


function Display1(props) {
return(
        <div className="frasebody">
            <Container>
      <Row>
      
        <Col Col xs={12} md={6}>
        <h1 className="titulofrase" >{props.pregunta}</h1>
        
        
                    </Col>
                    <Col Col xs={12} md={6}>
        <h1 className="descfras"> {props.descripcion}</h1>
                    </Col>
      </Row>
      
      
    </Container>

    </div>
)
    
}
export default Display1