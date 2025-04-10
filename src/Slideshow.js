import React from "react";
import Slider from "react-slick";
import '../src/css/Frases.css';  // Importar los estilos
import Disp1 from './Imagenes/Display/Dis1.png';
import Disp2 from './Imagenes/Display/Dis2.png';
import Disp3 from './Imagenes/Display/Dis3.png';
import Disp4 from './Imagenes/Display/Dis4.png';
import Disp5 from './Imagenes/Display/Dis5.png';
import Disp6 from './Imagenes/Display/Dis6.png';
import Disp7 from './Imagenes/Display/Dis7.png';
import Disp8 from './Imagenes/Display/Dis8.png';
import Disp9 from './Imagenes/Display/Dis9.png';

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1, // Solo mostrar una imagen a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slideshow">
      <Slider {...settings}>
        <div className="slide-item">
          <img src={Disp1} alt="Imagen 1" className="slide-image" />
        </div>
        <div className="slide-item">
          <img src={Disp2} alt="Imagen 2" className="slide-image" />
        </div>
        <div className="slide-item">
          <img src={Disp3} alt="Imagen 3" className="slide-image" />
        </div>
        <div className="slide-item">
          <img src={Disp4} alt="Imagen 4" className="slide-image" />
        </div>
        <div className="slide-item">
          <img src={Disp5} alt="Imagen 5" className="slide-image" />
        </div>
        <div className="slide-item">
          <img src={Disp6} alt="Imagen 6" className="slide-image" />
        </div>
        <div className="slide-item">
          <img src={Disp7} alt="Imagen 7" className="slide-image" />
        </div>
        <div className="slide-item">
          <img src={Disp8} alt="Imagen 8" className="slide-image" />
        </div>
        <div className="slide-item">
          <img src={Disp9} alt="Imagen 9" className="slide-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
