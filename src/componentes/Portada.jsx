import React from "react";
import '../css/Portada.css'
import { BrowserRouter, Routes,Route} from "react-router-dom"; 


function Portada(){
    return(

        <div className="main"> 
        {/*Menu*/}
        <BrowserRouter>
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="/" element={<Users />} />
    </Routes>
  </BrowserRouter>
        
                

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