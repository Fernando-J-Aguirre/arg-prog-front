import React from 'react';
import { handleLinkClick } from '../utils';

function Footer() {

    return (
        <footer className="footer">
            <p>Copyright © 2023 Creado por Fernando J. Aguirre</p>
            <div className="social-media-container">
                <a href="mailto:example@email.com"><i className="fa fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/example"><i className="fa fa-linkedin"></i></a>
                <a href="https://www.facebook.com/example"><i className="fa fa-facebook"></i></a>
                <a href="https://www.instagram.com/example"><i className="fa fa-instagram"></i></a>
            </div>
            <a href="#top" className="nav-link" onClick={e => {handleLinkClick(e, '#top');}}>Ir arriba</a>
        </footer>
    )
}

export default Footer;