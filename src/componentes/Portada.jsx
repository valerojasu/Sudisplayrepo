import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Imagenes/Logo/Logoaba.png'
import '../css/Portada.css'

function Portada(){
    return(
<div className='main'>
<nav className="navbar navbar">
    <div className="container-fluid">
      <div className="menuitem">
      <Link to='/' >
    <img src={logo} alt="logo" className='logonav'/> 
      </Link>
        <li className="nav-item">
          <Link to='/' className="menutit">Inicio </Link>
        </li>

     <section className="divi"> </section>
           
            <li className="nav-item">
              <Link to='./About' className="menutit">Contacto</Link>
            </li>
          </div>
        
    </div>
</nav>
      
       

              
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