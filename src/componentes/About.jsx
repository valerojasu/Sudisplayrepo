import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Imagenes/Logo/Logoaba.png'
import '../css/About.css'
import { Row, Col } from 'react-bootstrap';
import Display1 from './Display1'
import Contacto from './Contacto'
import Footer from './Footer'

function About(){
    return(
<div className='mainabout'>
<nav className="menu">
    <div className="container-fluid">
      <div className="menuitem">
      <Link to='/' >
    <img src={logo} alt="logo" className='logonav'/> 
      </Link>
        <li className="nav-item">
          <Link to='/' className="menuletras">Inicio </Link>
        </li>

     <section className="divi"> </section>
           
            <li className="nav-item">
              <Link to='./About' className="menuletras">Contacto</Link>
            </li>
          </div>
         </div>
         </nav>

      
  <div className='quienes'>

    <Row>
      <Col>
      <h1 className="atitulo">Quienes Somos?</h1>
    
    <p className="parrafo1">SuDisplay 2.0 es su socio comercial, cumplimos nuestros valores con excelencia y conocimiento del mercado, entendiendo sus necesidades y tendencias actuales. 
     
      Nuestra  relación comercial se basa en los más altos estándares de confidencialidad. 
      Complementamos  con una estrategia alineada con socio comercial.
    Nuestra mezcla de experiencia del equipo humano con más de 25 años en consumo masivo y  las ideas de  nuevas generaciones nos dan una ventaja competitiva!   
     Iniciamos nuestras operaciones en el 2022.</p>
      </Col>
      <Col>
      <img src={require ('../Imagenes/Logo/Logoaba.png')} 
      className='logoabout'
                    alt='Logo FIFCO'/>
                    </Col> 
    </Row>
 
  </div>
  <section>
  <Display1
    pregunta='¿En que se especializa SuDisplay?'
    descripcion='Nuestra app nos permite dar soluciones a la medida y brindar una información rápida y oportuna para la toma de decisiones.'
    />
  

  </section>
  <section >
    <Contacto />
  </section>
  <div className='quienes'>
    <Row>
      <Col>
      <h1 className="atitulo">Contáctenos a nuestro WhatsApp</h1>
    
      <a className="parrafo1" href="https://api.whatsapp.com/send?phone=50670161730&text= Hola!%20Quiero%20contratar%20sus%20servicios!"> 7016-1730</a>

     </Col>
      <Col>
      <h1 className="atitulo">Correo electrónico:</h1>
    
      <a href="mailto:sudisplay@gmail.com" className="parrafo1">sudisplay&#64;gmail.com</a>

      </Col>
    </Row>
  
  </div>

 
  <div>
    <Footer/>
  </div>


  </div> 
    );
}

export default About