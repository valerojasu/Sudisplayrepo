import React from "react";
import '../css/Numeros.css';
import { Container, Row, Col } from 'react-bootstrap';

function Numeros() {
    return (
        <div className="number">
            <Container>
                <Row>
                    <Col>
                        <p className="titulo">Contáctenos a nuestro WhatsApp</p>
                        <a
                            className="encima"
                            href="https://api.whatsapp.com/send?phone=50670161730&text=Hola!%20Quiero%20contratar%20sus%20servicios!"
                        >
                            7016-1730
                        </a>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <p className="titulo">Correo electrónico:</p>
                        <a href="mailto:sudisplay@gmail.com" className="encima">
                            sudisplay&#64;gmail.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Numeros;
