// Quote.js
import React from 'react';

const Quote = ({ text, author, time, avatar, prevQuote, nextQuote }) => {
  return (

    <div className="quote-container">
      <div className="avatar-container">
        <img src={avatar} alt="Avatar" className="avatar" />
      </div>
      <div className="quote-text">{text}</div>
      <div className="quote-author">{author}</div>
      <div className="quote-time">{time}</div>
      <button className="prev" onClick={prevQuote}> ❮ </button>
      <button className="next" onClick={nextQuote}>❯</button>
      
    </div>
   
   
  );
};

export default Quote;

