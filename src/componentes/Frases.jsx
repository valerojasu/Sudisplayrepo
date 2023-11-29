import React from "react";
import '../css/Frases.css';
import { Container, Row, Col } from 'react-bootstrap';


function Frases(props) {
return(
        <div className="frase">
            <Container>
      <Row>
      
        <Col>
        <h1 className="titulo" >{props.pregunta}</h1>
        
        
                    </Col>
                    <Col>
        <h1 class="desc"> {props.descripcion}</h1>
                    </Col>
      </Row>
      
    </Container>

    </div>
)
    
}
export default Frases