import React from "react";
import '../css/Frases.css';
import { Container, Row, Col } from 'react-bootstrap';


function Display1(props) {
return(
        <div className="frase">
            <Container>
      <Row>
      
        <Col>
        <h1 className="titulo" >{props.pregunta}</h1>
        
        
                    </Col>
                    <Col>
        <h1 className="desc"> {props.descripcion}</h1>
                    </Col>
      </Row>
      
      
    </Container>

    </div>
)
    
}
export default Display1