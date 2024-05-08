import React from 'react';
import './layout.css'

function Layout () {
    return (
        <div className="layout-container">
            <header>
                <div className="name-container">
                    <p>
                        Baptiste SALAZAR
                    </p>
                </div>
                <nav className="navbar"> 
                    LINKS
                </nav>
            </header>
            <footer>
                <div className="footer-container">
                    <p className="footer-copyright">
                        Conçu par Baptiste Salazar <br/>
                        - Copyright 2024 - 
                    </p>
                </div>   
            </footer>
        </div>
    )
}

export default Layout;