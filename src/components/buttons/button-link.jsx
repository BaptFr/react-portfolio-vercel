import React from 'react';
import './button-link.sass'

function ButtonLink({source}) {
    return(
        <div className="button__container">
          <img src={source} alt='logo-du-lien'/>
        </div>
    )
}

export default ButtonLink;