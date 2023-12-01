import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Imagenes/Logo/Logoaba.png'
import '../css/About.css'
import Quienes from './Quienes'
import Frases from './Frases'
import Numeros from './Numeros'
import Contacto from './Contacto'

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

      
  <div>
  <Quienes/>
  </div>
  <div>
  <Frases
      pregunta='En que se especializa SuDisplay?'
      descripcion='Nuestra app nos permite dar soluciones a la medida y brindar una información rápida y oportuna para la toma de decisiones.'
      />
    </div>
    <section>
      <Numeros/>
    </section>
    <section>
      <Contacto></Contacto>
    </section>
  </div>
 
    );
}

export default About