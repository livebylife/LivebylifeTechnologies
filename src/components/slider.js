import React from 'react';

const Slide = ({ title, image, description }) => (
  <div className="slide">
    <h2>{title}</h2>
    <img src={image} alt={title} />
    <p>{description}</p>
  </div>
);

export default Slide;