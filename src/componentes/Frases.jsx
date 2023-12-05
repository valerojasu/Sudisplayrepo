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
        <h1 className="desc"> {props.descripcion}</h1>
                    </Col>
      </Row>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      
      <Row>
        <Col>
        <img src={require('../Imagenes/Disp11.png')} className="fotodispl" alt="Display1"/>
        </Col>
        <Col>
        <img src={require('../Imagenes/Disp22.png')} className="fotodispl" alt="Display2"/>

        </Col>
        <Col>
        <img src={require('../Imagenes/Disp3.png')} className="fotodispl" alt="Display3"/>

        </Col>
      </Row>
      
    </Container>

    </div>
)
    
}
export default Frases