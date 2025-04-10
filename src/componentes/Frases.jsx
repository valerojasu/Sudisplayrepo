import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap"; // Usamos Carousel de react-bootstrap
import '../css/Frases.css';
import Disp1 from 'src/Imagenes/Display/Dis1.png';
import Disp2 from '/Users/valerojas/Desktop/React- SuDisplay2/sudisplay/src/Imagenes/Display/Dis2.png';
import Disp3 from '/Users/valerojas/Desktop/React- SuDisplay2/sudisplay/src/Imagenes/Display/Dis3.png';
import Disp4 from '/Users/valerojas/Desktop/React- SuDisplay2/sudisplay/src/Imagenes/Display/Dis4.png';
import Disp5 from '/Users/valerojas/Desktop/React- SuDisplay2/sudisplay/src/Imagenes/Display/Dis5.png';
import Disp6 from '/Users/valerojas/Desktop/React- SuDisplay2/sudisplay/src/Imagenes/Display/Dis5.png';
import Disp7 from '/Users/valerojas/Desktop/React- SuDisplay2/sudisplay/src/Imagenes/Display/Dis7.png';
import Disp8 from '/Users/valerojas/Desktop/React- SuDisplay2/sudisplay/src/Imagenes/Display/Dis8.png';
import Disp9 from '/Users/valerojas/Desktop/React- SuDisplay2/sudisplay/src/Imagenes/Display/Dis9.png';
function Frases(props) {
  return (
    <div className="frase">
      <Container>
        <Row className="frase-row">
          {/* Columna para el texto */}
          <Col xs={12} md={6} className="col-text">
            <h1 className="titulo2">{props.pregunta}</h1>
            <h2 className="desc">{props.descripcion}</h2>
          </Col>

          {/* Columna para el Slider usando Carousel */}
          <Col xs={12} md={6} className="col-slider">
            <Carousel interval={3000} controls={false} indicators={true} fade>
              <Carousel.Item>
                <img src={Disp1} alt="Imagen 1" className="slide-image" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Disp2} alt="Imagen 2" className="slide-image" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Disp3} alt="Imagen 3" className="slide-image" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Disp4} alt="Imagen 4" className="slide-image" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Disp5} alt="Imagen 5" className="slide-image" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Disp6} alt="Imagen 6" className="slide-image" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Disp7} alt="Imagen 7" className="slide-image" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Disp8} alt="Imagen 8" className="slide-image" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Disp9} alt="Imagen 9" className="slide-image" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Frases;