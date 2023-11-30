import React from "react";
import  '../css/Contacto.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Row, Col, Button } from 'react-bootstrap';


function Contacto() {
  return (
    <div className="project">
        <h1 className="letrat"> Contacto</h1>
        <form action="mailto:sudisplay@gmail.com">
        <Container >
      <Row>
        <Col>
       
        <InputGroup>
        <h1 className="letraf">Nombre</h1>
        <Form.Control
          placeholder="John"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup> </Col>
      <Col>
      <InputGroup>
      <h1 className="letraf">Apellido</h1>
        <Form.Control
          placeholder="Doe"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      </Col>
      </Row>
      <Row>
        <Col>
        
        <InputGroup >
        <h1 className="letraf">Correo Electrónico</h1>
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="ejemplo@hotmail.com"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup> 
      </Col>
     
      </Row>
      <br></br>
      <Row>
      <Col>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Cuentenos de su proyecto</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Ingrese su mensaje"
/>
      </Form.Group>
      </Col>
      </Row>
      <Col>
      <Button className="button" type="submit">
        Enviar
      </Button>
      </Col>
      </Container>
          </form>
        

      

   
    </div>
      
  );
}

export default Contacto;