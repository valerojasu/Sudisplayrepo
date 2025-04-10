import React from "react";
import '../css/Marcas.css';
import { Container, Row, Col } from 'react-bootstrap';

function Marcas() {
    return (
        <div className="Marcas-box">
            <Container>
                <Row>
                    <Col>
                        <h3 className="marcat">Marcas con las que trabajamos</h3>
                    </Col>
                    <Col>
                        <img
                            className="Logof"
                            src={require('../Imagenes/Logo/fifco.png')}
                            alt='Logo FIFCO'
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Marcas;
