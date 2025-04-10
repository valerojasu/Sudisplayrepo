import React from "react";
import '../css/Contacto.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Contacto() {
  return (
    <div className="project">
      <h1 className="letrat">Contacto</h1>
      <form action="mailto:sudisplay@gmail.com">
        <Container>
          <Row>
            <Col>
              <InputGroup>
                <h1 className="letraf">Nombre</h1>
                <Form.Control
                  type="text"
                  aria-label="Nombre"
                  aria-describedby="basic-addon1"
                  required
                />
              </InputGroup>
            </Col>
            <Col>
              <InputGroup>
                <h1 className="letraf">Apellido</h1>
                <Form.Control
                  type="text"
                  aria-label="Apellido"
                  aria-describedby="basic-addon2"
                  required
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <InputGroup>
                <h1 className="letraf">Correo Electrónico</h1>
                <InputGroup.Text id="basic-addon1" className="arroba">@</InputGroup.Text>
                <Form.Control
                  type="email"
                  aria-label="Correo Electrónico"
                  aria-describedby="basic-addon1"
                  required
                />
              </InputGroup>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="letraf">Cuéntanos de tu proyecto</Form.Label>
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button className="button" type="submit">
                Enviar
              </Button>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
}

export default Contacto;
