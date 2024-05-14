import React from 'react';
import './button.sass'

function Button({source}) {
    return(
        <div className="button__container">
          <img src={source} alt='logo-du-lien'/>
        </div>
    )
}

export default Button;