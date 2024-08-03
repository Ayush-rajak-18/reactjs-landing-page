import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>I am passionate software developer to providing the best services and solutions to our customers.</p>
                </div>
                <div className="footer-section">
                    <h4>Contacts</h4>
                    <p>Email: ayurjk008@gmail.com</p>
                    <p>Phone: +91 7024677198</p>
                </div>
                <div className="footer-section">
                <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://github.com/ayush-rajak-18" className="social-link" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://instagram.com/___iamark_" className="social-link" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} />
                        </a>
                        <a href="https://linkedin.com/in/ayush-rajak-677a3a245?utm" className="social-link" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a> </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Ayush rajak. All rights reserved.</p>
            </div>
        </footer>
       
    );
};

export default Footer;