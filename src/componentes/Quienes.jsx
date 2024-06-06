import React from "react";
import '../css/Quienes.css';
import { Container, Row, Col } from 'react-bootstrap';


function Quienes(props) {
return(
        <div className="infor">
            <Container>
      <Row>
      <Col sm={4} className="colt">
      <h1 className="titu1">¿Quienes somos?</h1>
       <p className="parra">SuDisplay 2.0 es su socio comercial, cumplimos nuestros valores con excelencia y conocimiento del mercado, entendiendo sus necesidades y tendencias actuales. 
          Nuestra  relación comercial se basa en los más altos estándares de confidencialidad. Complementamos  con una estrategia alineada con socio comercial.
          Nuestra mezcla de experiencia del equipo humano con más de 25 años en consumo masivo y  las ideas de  nuevas generaciones nos dan una ventaja competitiva!   
          Iniciamos nuestras operaciones en el 2022.</p>
       </Col>
      
        <Col sm={4} className="colf" >
        <p className="titu2"> David Vargas</p>
        <p className="titu3"> Gerente Financiero </p>
        <img  
        src={require (`../Imagenes/David.jpeg`)} 
        alt='Logo FIFCO'
        className="fotoq"/>
         </Col>

        <Col sm={4} className="colf">
        <p className="titu2"> Carlos Gutiérrez</p>
        <p className="titu3"> Gerente comercial </p>
        <img  
        src={require (`../Imagenes/Cali.jpeg`)} 
        alt='Logo FIFCO'
        className="fotoq"/>
                    </Col>
      </Row>
     
      
    </Container>

    </div>
)
    
}
export default Quienes