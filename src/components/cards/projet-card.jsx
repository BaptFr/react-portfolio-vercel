import React from 'react';
import './projet-card.sass';


function ProjetCard({ source, alt }) {
    return (
        <div className='card__container'>
            <img src={source} alt={alt}/>
        </div>
    );

}

export default ProjetCard