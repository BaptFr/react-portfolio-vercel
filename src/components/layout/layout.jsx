import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './layout.sass';
import logoCopyright from'../../assets/copyright-white.svg';

function Layout({ children }) {

    const location = useLocation();
    return (
        <>
            <header>    
            <div className='header__title'>     
            </div>

            <nav className='navbar'>
                <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
                    <button>Accueil</button>
                </NavLink>
                
                    <button>Mes projets</button>
                    <button>Mon CV</button>

                <NavLink to="/contact" className={location.pathname === "/about" ? "active" : ""}>
                    <button>Me contacter</button>
                </NavLink>
            </nav>
            </header>


            <main>
                {children}
            </main>


            <footer>
                <div className='footer__containt'>
                    <p> Tous droits réservés </p> 
                    <p><img src={ logoCopyright } alt="Logo-copyright" /> 2024  </p>
                </div>
            </footer>
        </>
    );
}

export default Layout