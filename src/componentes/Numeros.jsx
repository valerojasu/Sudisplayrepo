import React from "react";
import '../css/Numeros.css';
import { Container, Row, Col } from 'react-bootstrap';




function Marcas(){
    return(
        <div className="number">
     <Container>
      <Row>
        <Col xs={1}>
        </Col>

        <Col>
        <p class="titulo">Contáctenos a nuestro WhatsApp</p>    
        <a class="encima" href="https://api.whatsapp.com/send?phone=50670161730&text= Hola!%20Quiero%20contratar%20sus%20servicios!"> 7016-1730</a>
        </Col>
        </Row>
        <br></br>
        <Row>
        <Col xs={1}>
        </Col>
        <Col>     
        <p class="titulo">Correo electrónico:</p>    
                    <a href="mailto:sudisplay@gmail.com" class="encima">sudisplay&#64;gmail.com</a>
       </Col>

        </Row>
        
      
      
    </Container>
               
                    
  
        </div>
    );
}

export default Marcas