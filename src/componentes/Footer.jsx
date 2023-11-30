import React from "react";
import '../css/Footer.css';
import { Container, Row, Col } from 'react-bootstrap';


function Footer(){
    return(
        <div className="footerm">
            <Container >
      <Row>
        <Col><h4 className="titulosf">Copyright &#64;2023 - Created by Valeria Rojas</h4>
        </Col>

        <Col>
        <h4 className="titulosf">Terms & Condition</h4> 
        </Col>
        <Col>
        <h4 className="titulosf">Privacy Policy</h4>
        </Col>
        <Col>
        <h4 className="titulosf">Contáctenos</h4> 
            <a href="mailto:sudisplay@gmail.com" className="subf" >sudisplay&#64;gmail.com</a>        </Col>
      </Row>
      
    </Container>
               
                    
  
        </div>
    );
}

export default Footer