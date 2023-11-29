import React from "react";
import '../css/Marcas.css';

function Marcas(){
    return(
        <div className="Marcas-box">
                <h3 className="marcat">Marcas con las que trabajamos      </h3>
                    <img className="Logof" src={require ('../Imagenes/Logo/fifco.png')} 
                    alt='Logo FIFCO'/>
  
        </div>
    );
}

export default Marcas
