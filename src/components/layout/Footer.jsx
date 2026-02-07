import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3 className="footer-logo">Safa Bliss</h3>
                        <p>Gentle care, rooted in nature. Healing hair and skin with the purity of herbal wisdom.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Shop</h4>
                        <ul>
                            <li><Link to="/hair">Hair Care</Link></li>
                            <li><Link to="/skin">Skin & Body</Link></li>
                            <li><Link to="/wellness">Wellness</Link></li>
                            <li><Link to="/kits">Kits & Rituals</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Support</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/shipping">Shipping Policy</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <p>Have questions? We're here to help.</p>
                        <p className="contact-method">WhatsApp: +92 300 1234567</p>
                        <p className="contact-method">Email: care@safabliss.com</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Safa Bliss Naturals. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
