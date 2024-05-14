import React from 'react';
import './projet-card.sass';


function ProjetCard({ source, title }) {
    return (
        <div className='card__container'>
            <p>{title}</p>
            <img src={source} alt='illustration-projet'/>
        </div>
    );

}

export default ProjetCard