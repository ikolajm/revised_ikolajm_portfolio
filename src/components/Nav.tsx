import { mainNavClick, toggleMobileMenu } from '../functions/Interactions';
import {animNavbar} from  '../functions/Animations';
import { useEffect } from 'react';

export default () => {
    useEffect(() => {
        animNavbar();
    })
    return (
        <nav id="nav" className="navbar">
            <ul id="large-links">
                <li><a onClick={() => mainNavClick('splash')} href="#splash">Home</a></li>
                <li><a onClick={() => mainNavClick('about')} href="#about">About</a></li>
                <li><a onClick={() => mainNavClick('work')} href="#work">Work</a></li>
                <li><a onClick={() => mainNavClick('toolkit')} href="#toolkit">Toolkit</a></li>
                <li><a onClick={() => mainNavClick('repos')} href="#repos">Repos</a></li>
                <li><a onClick={() => mainNavClick('footer')} href="#footer">Contact</a></li>
            </ul>
            <div className="mobile">
                <div className="mobile-overlay"></div>
                <div className="toggle-container visible">
                    <div onClick={toggleMobileMenu} id="nav-icon" className="nav-icon">
                        <i className="fas fa-bars hamburger visible"></i>
                        <i className="fas fa-times close"></i>
                    </div>
                    {/* <span>Menu</span> */}
                </div>
                <div id="mobile-menu">
                    <ul>
                        <li id="home-link" className="mobile-nav-item"><a onClick={() => mainNavClick('splash')} href="#splash">Home</a></li>
                        <li id="about-link" className="mobile-nav-item"><a onClick={() => mainNavClick('about')} href="#about">About</a></li>
                        <li id="work-link" className="mobile-nav-item"><a onClick={() => mainNavClick('work')} href="#work">Work</a></li>
                        <li id="toolkit-link" className="mobile-nav-item"><a onClick={() => mainNavClick('toolkit')} href="#toolkit">Toolkit</a></li>
                        <li id="repos-link" className="mobile-nav-item"><a onClick={() => mainNavClick('repos')} href="#repos">Repos</a></li>
                        <li id="contact-link" className="mobile-nav-item"><a onClick={() => mainNavClick('footer')} href="#footer">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}