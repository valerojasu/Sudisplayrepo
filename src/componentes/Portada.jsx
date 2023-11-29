import React from "react";
import '../css/Portada.css'
import { Container, Navbar, Nav } from 'react-bootstrap';


function Portada(){
    return(

        <div className="main"> 
        {/*Menu*/}
        <Navbar>
        <Container>
        <Navbar.Brand href="#home">
            <img
              src={require ('../Imagenes/Logo/Logoaba.png')}
              className="logonav"
              alt="SuDisplayLogo logo"
            />
          </Navbar.Brand>          
          <Nav >
            <Nav.Link href="#" >INICIO</Nav.Link>
            <Nav.Link href="#" >CONTACTO</Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
                

                {/*Portada*/}
            <section>
                 <h1 className="portatitu">
          <strong className="bold-text">Una forma nueva de conectar</strong>
       <br>
       </br>
          Hacer <img src={require('../Imagenes/Logo/sonri2.png')} 
          className="sonri" alt="Sonrisa"/> a nuestros clientes </h1> 

               </section>

    </div>
 
    );
}

export default Portada