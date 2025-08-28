import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "../css/Frases.css";

import Disp1 from "../Imagenes/imag-dis/Disp1.png";
import Disp2 from "../Imagenes/imag-dis/Disp2.png";
import Disp3 from "../Imagenes/imag-dis/Disp3.png";
import Disp4 from "../Imagenes/imag-dis/Disp4.png";
import Disp5 from "../Imagenes/imag-dis/Disp5.png";
import Disp6 from "../Imagenes/imag-dis/Disp6.png";
import Disp7 from "../Imagenes/imag-dis/Disp7.png";
import Disp8 from "../Imagenes/imag-dis/Disp8.png";
import Disp9 from "../Imagenes/imag-dis/Disp9.png";
import Disp10 from "../Imagenes/imag-dis/Disp10.png";

function Frases(props) {
  const images = [
    Disp1,
    Disp2,
    Disp3,
    Disp4,
    Disp5,
    Disp6,
    Disp7,
    Disp8,
    Disp9,
    Disp10,
  ];

  return (
    <div className="frase">
      <Container>
        <Row className="frase-row">
          {/* Columna Texto */}
          <Col className="col-text">
            <h1 className="titulo2">{props.pregunta}</h1>
            <h2 className="desc">{props.descripcion}</h2>
          </Col>

          {/* Columna Carrusel */}
          <Col className="col-slider">
            <div className="carousel-card">
              <Carousel
                interval={3500}
                controls={false}
                indicators={true}
                fade
                pause={false}
                wrap={true}
              >
                {images.map((img, i) => (
                  <Carousel.Item key={i}>
                    <img src={img} alt={`Imagen ${i + 1}`} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Frases;
