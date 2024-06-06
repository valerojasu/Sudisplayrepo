import React from "react";
import '../css/Footer.css';
import { Container, Row, Col } from 'react-bootstrap';


function Footer(){
    return(
        <div className="footerm">
            <Container >
      <Row>
        <Col sm={6}>
        <h4 className="titulosf">Copyright @ 2023 - Created by Valeria Rojas</h4>
        </Col>

        <Col sm={6}>
        <h4 className="titulosf">Contáctenos al:  
            <a href="mailto:sudisplay@gmail.com" className="subf" > sudisplay&#64;gmail.com</a></h4>       
            </Col>
      </Row>
      
    </Container>
               
                    
  
        </div>
    );
}

export default Footer