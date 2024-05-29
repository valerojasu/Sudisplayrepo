import React from "react";
import '../src/css/Frases.css';
import Slider from 'react-slick';
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slideshow">
      <Slider {...settings}>
        <div>
        <img src={Disp1}  alt="Imagen2" />
        </div>
        <div>
        <img src={Disp2}  alt="Imagen2" />
        </div>
        <div>
        <img src={Disp3}  alt="Imagen2" />
        </div>
        <div>
        <img src={Disp4}  alt="Imagen2" />
        </div>
        <div>
        <img src={Disp5}  alt="Imagen2" />
        </div>
        <div>
        <img src={Disp6}  alt="Imagen2" />
        </div>
        <div>
        <img src={Disp7}  alt="Imagen2" />
        </div>
        <div>
        <img src={Disp8}  alt="Imagen2" />
        </div>
        <div>
        <img src={Disp9}  alt="Imagen2" />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
