import React from 'react';
import { NavLink } from 'react-router-dom';
import './error.sass'

function Error404(){
    return(
        <div className='error__container'>
            <p className='error__type'>404</p>
            <p className='error__message'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink  to="/" className='home__link'>
                        <p>Retourner sur la page d'accueil</p>
            </NavLink>
        </div>
    )
}

export default Error404