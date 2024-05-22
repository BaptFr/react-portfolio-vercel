import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './button-scroll.sass'; 

const ScrollToTopButton = () => {
  return (
    <ScrollLink to='top' smooth={true} duration={600}>
      <button className='scroll-to-top'>REMONTER </button>
    </ScrollLink>
  );
};

export default ScrollToTopButton;