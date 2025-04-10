import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Imagenes/Logo/Logoaba.png';
import '../css/About.css';
import '../css/Contacto.css';
import { Row, Col } from 'react-bootstrap';
import Display1 from './Display1';
import Contacto from './Contacto';
import Footer from './Footer';

function About() {
  return (
    <div className="mainabout">
      <header className="menu">
        <div className="container-fluid">
          <div className="menuitem">
            <Link to="/">
              <img src={logo} alt="logo" className="logonav" />
            </Link>
            <ul>
              <li className="nav-item">
                <Link to="/" className="menuletras">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="menuletras">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <section className="quienes">
        <Row>
          <Col xs={12} sm={6}>
            <h1 className="atitulo">¿Quiénes Somos?</h1>
            <p className="parrafo1">
              SuDisplay 2.0 es su socio comercial, cumplimos nuestros valores con excelencia y conocimiento del mercado, entendiendo sus necesidades y tendencias actuales. Nuestra relación comercial se basa en los más altos estándares de confidencialidad. Complementamos con una estrategia alineada con socio comercial. Nuestra mezcla de experiencia del equipo humano con más de 25 años en consumo masivo y las ideas de nuevas generaciones nos dan una ventaja competitiva. ¡Iniciamos nuestras operaciones en el 2022!
            </p>
          </Col>
          <Col xs={12} sm={5}>
            <img src={logo} alt="Logo" className="logoabout" />
          </Col>
        </Row>
      </section>

      <section>
        <Display1
          pregunta="¿En qué se especializa SuDisplay?"
          descripcion="Nuestra app nos permite dar soluciones a la medida y brindar una información rápida y oportuna para la toma de decisiones."
        />
      </section>

      <section className="quienesform">
        <Contacto />
      </section>

      <section className="quienesc">
        <Row>
          <Col xs={12} sm={6}>
            <h1 className="atitulo">Contáctenos a nuestro WhatsApp</h1>
            <a className="encimac" href="https://api.whatsapp.com/send?phone=50670161730&text=Hola!%20Quiero%20contratar%20sus%20servicios!">7016-1730</a>
          </Col>
          <Col xs={12} sm={6}>
            <h1 className="atitulo">Correo electrónico</h1>
            <a href="mailto:sudisplay@gmail.com" className="encimac">sudisplay&#64;gmail.com</a>
          </Col>
        </Row>
      </section>

      <Footer />
    </div>
  );
}

export default About;
