import React from 'react';
import projetsData from '../../datas/projets.json';

import './projet-display.sass';


function ProjetDisplay ({ projetId }){
    const projet = projetsData.find(projet => projet.id == projetId);
    
    if (!projet) {
        return <div>Projet non trouvé pour l'ID {projetId}</div>;
    }

    return (
        <div className='description__container'>
          <div className='text__container'>
            <p className='projet__title'> {projet.title} </p>
            {/*<p className='projet__description'> {projet.description} </p> */}
          </div>
          <div className='projet__missions__container'>
            <p className='projet__missions__title'>DESCRIPTION</p>
            <p className='projet__missions'> {projet.description}</p>
            <p className='projet__missions'> {projet.mission}</p>
          </div>
        </div>
    )
};

export default ProjetDisplay
