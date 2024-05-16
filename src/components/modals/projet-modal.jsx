import React from "react";

import './projet-modal.sass';

function ProjetModal () {

  
        return (
            <div className= 'modal__wrapper'>
                <div className='modal'>
                    <button id='close'> X </button>
                    <div className='modal__content'>
                        <p> CAROUSEL </p>
                    <p> TEXTE DESCRIPTIF</p>
                    <button>LIEN VERS RESSOURCE </button>

                    </div>
                </div>
            </div>
        )
    };

export default ProjetModal;
