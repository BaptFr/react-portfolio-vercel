import React from 'react';
import './button-link.sass'

function ButtonLink({source}) {
    return(
        <div className="button__container">
          <img src={source} alt='logo-lien-interne'/>
        </div>
    )
}

export default ButtonLink;