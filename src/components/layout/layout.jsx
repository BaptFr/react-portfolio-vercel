import React from 'react';
import { NavLink } from 'react-router-dom';
import './layout.sass';
import logoCopyright from'../../assets/copyright-white.svg';

function Layout({ children }) {
    return (
        <>
            <header>
                <div className='header__title'>
                <h1> Baptiste SALAZAR </h1>
                </div >
                <nav className='navbar'>
                    <NavLink to="/" >
                        <button>Accueil</button>
                    </NavLink>
                    <NavLink to="/about" >
                        <button>Projets</button>
                    </NavLink>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <div className='footer__containt'>
                    <img src={ logoCopyright } alt="Logo-copyright" /> 2024  <br/>
                    Tous droits réservés
                </div>
            </footer>
        </>
    );

}

export default Layout