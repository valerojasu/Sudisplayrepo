import React from "react";
import '../css/Frases.css';
import Slideshow from "../Slideshow";


import { Container, Row, Col } from 'react-bootstrap';

function Frases(props) {
return(
        <div className="frase">
            <Container>
      <Row>
      
        <Col xs={5} className="colt">
        <h1 className="titulo2" >{props.pregunta}</h1>
        <br>
        </br>
                 
        <h1 className="desc"> {props.descripcion}</h1>
                    </Col>
      
       
       
      <Col xs={6}className="colt" >
      
      <Slideshow />       
</Col> 
      </Row>
      
    </Container>

    </div>
)
    
}
export default Frases