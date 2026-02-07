import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    Safa Bliss
                </Link>

                {/* Desktop Menu */}
                <ul className="navbar-menu desktop-only">
                    <li><NavLink to="/hair" className={({ isActive }) => "navbar-link" + (isActive ? " active" : "")}>Hair</NavLink></li>
                    <li><NavLink to="/skin" className={({ isActive }) => "navbar-link" + (isActive ? " active" : "")}>Skin</NavLink></li>
                    <li><NavLink to="/wellness" className={({ isActive }) => "navbar-link" + (isActive ? " active" : "")}>Wellness</NavLink></li>
                    <li><NavLink to="/kits" className={({ isActive }) => "navbar-link" + (isActive ? " active" : "")}>Kits</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => "navbar-link" + (isActive ? " active" : "")}>About</NavLink></li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Navigation">
                    <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
                </button>

                {/* Mobile Menu Dropdown */}
                <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="mobile-menu-list">
                        <li><NavLink to="/hair" onClick={toggleMenu}>Hair</NavLink></li>
                        <li><NavLink to="/skin" onClick={toggleMenu}>Skin</NavLink></li>
                        <li><NavLink to="/wellness" onClick={toggleMenu}>Wellness</NavLink></li>
                        <li><NavLink to="/kits" onClick={toggleMenu}>Kits</NavLink></li>
                        <li><NavLink to="/about" onClick={toggleMenu}>About</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
