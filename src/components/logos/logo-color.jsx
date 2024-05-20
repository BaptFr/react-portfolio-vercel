import React from 'react';
import './logo-color.sass';

function LogoColor({ src, alt, size }) {
  return (
  <img src={src} alt={alt} className={`logo ${size}`} loading="lazy"/>
  )
}

export default LogoColor;