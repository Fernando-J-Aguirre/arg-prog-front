import React, { useState, useEffect, useContext } from 'react';
import { handleLinkClick } from '../utils';
import { UserContext } from '../context/UserContext';

function NavBar() {
    const user = useContext(UserContext)

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleClick = () => {
        setIsDropdownOpen(isDropdownOpen => !isDropdownOpen);
    };

    const handleCloseDropdown = () => {
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const navbar = document.querySelector('#nav');
        let prevScrollpos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                navbar.classList.remove('disabled');
            } else {
                navbar.classList.add('disabled');
                handleCloseDropdown();
            }
            prevScrollpos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const navToggle = document.getElementById('nav-toggle');
        const navDropdown = document.querySelector('.nav-dropdown');

        const handleClickOutside = (e) => {
            if (!navToggle.contains(e.target) && !navDropdown.contains(e.target)) {
                handleCloseDropdown();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);

    return (
        <nav id="nav">
            <div className="nav-container">
                <div className="nav-left">
                    <div className="profile-pic-m-container">
                        <img src={user.picture.medium} alt="profile" className="profile-pic-m" />
                    </div>
                    <a href="#top" className="name nav-link" onClick={e => handleLinkClick(e, '#top')}>{user.name.first} {user.name.last}</a>
                </div>
                <div className="nav-right">
                    <a href="#experience" className="nav-link" onClick={e => handleLinkClick(e, '#experience')}>Experiencia</a>
                    <a href="#education" className="nav-link" onClick={e => handleLinkClick(e, '#education')}>Formación</a>
                    <a href="#skills" className="nav-link" onClick={e => handleLinkClick(e, '#skills')}>Aptitudes</a>
                    <a href="#contact" className="nav-link" onClick={e => handleLinkClick(e, '#contact')}>Contacto</a>
                </div>
                <div className={`nav-dropdown ${isDropdownOpen ? 'show' : ''}`}>
                    <a href="#experience" className="nav-link" onClick={e => { handleLinkClick(e, '#experience'); handleCloseDropdown(); }}>Experiencia</a>
                    <a href="#education" className="nav-link" onClick={e => { handleLinkClick(e, '#education'); handleCloseDropdown(); }}>Formación</a>
                    <a href="#skills" className="nav-link" onClick={e => { handleLinkClick(e, '#skills'); handleCloseDropdown(); }}>Aptitudes</a>
                    <a href="#contact" className="nav-link" onClick={e => { handleLinkClick(e, '#contact'); handleCloseDropdown(); }}>Contacto</a>
                </div>
                <button id="nav-toggle" onClick={handleToggleClick}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    );
}

export default NavBar;