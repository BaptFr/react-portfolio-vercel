import React from 'react';
import './projet-card.sass';


function ProjetCard({ source, alt }) {
    return (
        <div className='card__container'>
            <div className='card__effects'>
                <img  src={source} alt={alt} />
            </div>
        </div>
    );
}

export default ProjetCard