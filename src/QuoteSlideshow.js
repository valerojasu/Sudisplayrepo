import React, { useState, useEffect, useCallback } from 'react';
import Quote from './Quote';
import '../src/css/Quote.css';
import avatar1 from './Imagenes/avatarm.png';
import avatar2 from './Imagenes/avatar2.png';
import avatar3 from './Imagenes/avatar3.png';
import avatar4 from './Imagenes/avatar4.png';



const quotesData = [
  { 
    text: "Muchas gracias equipo su Display!! Trabajo impecable. Saludos", 
    author: "Mariana Esquivel",
    time: "Lider Categoria Trademarketing Canal ModeRno",
    avatar: avatar1
  },
  { 
    text: "Estamos muy bien con el servicio de la agencia de Carlos, nos estan ayudando un monton", 
    author: "Emerson Gamez", 
    time: "Gerente Canal Super Independientes - FIFCO",
    avatar: avatar2
  },

  { 
    text: "Tenemos que hacer mucho más. La verdad está claro que el nivel de ustedes es otro.", 
    author: "Gustavo Blanco", 
    time: "Gerente Comercial FIFCO - Vinos y Destilados",
    avatar: avatar4 
  },
  { 
    text: "Como siempre mil gracias por toda la dedicación, apoyo y excelente ejecución. Mil gracias y Saludos", 
    author: "Jose Pablo Salas", 
    time: "Lider Categoria Trademarketing Canal ModeRno",
    avatar: avatar3  
  }
];

const QuoteSlideshow = () => {
  const [index, setIndex] = useState(0);

  const nextQuote = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % quotesData.length);
  }, []);

  const prevQuote = useCallback(() => {
    setIndex((prevIndex) => (prevIndex - 1 + quotesData.length) % quotesData.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextQuote();
    }, 8000);

    return () => clearInterval(interval);
  }, [nextQuote]);

  return (
    <div className='quoteb'>
      <Quote
        text={quotesData[index].text}
        author={quotesData[index].author}
        time={quotesData[index].time}
        avatar={quotesData[index].avatar}
        prevQuote={prevQuote}
        nextQuote={nextQuote}
      />
    </div>
  );
};

export default QuoteSlideshow;




