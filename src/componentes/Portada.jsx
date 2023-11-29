import React from "react";
import '../css/Portada.css'

function Portada(){
    return(

        <div className="main"> 
            <nav class="navbar navbar">
            <div class="container-fluid">
            <img 
            src={require('../Imagenes/Logo/Logoaba.png')} 
            className="logonav" 
            alt="logo nav" /> 
            <ul class="nav">
            <div class="menuitem">   
                <li class="nav-item">
                <p class="menutit">Inicio</p>
                </li>
            <section class="divi">

            </section>
                
                    <li class="nav-item">
                    <p class="menutit">Contacto</p>
                    </li>
                </div>
                
            </ul> 
            </div>
                </nav>
                

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