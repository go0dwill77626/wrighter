import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap's JS
import './header.css'; // Import your custom CSS
import { Collapse } from 'bootstrap'; // Directly import Collapse

const Header = () => {
    const navbarRef = useRef(null); // Use ref for the navbar collapse element

    useEffect(() => {
        const handleLinkClick = () => {
            if (navbarRef.current) {
                const bsCollapse = new Collapse(navbarRef.current, {
                    toggle: false
                });
                bsCollapse.hide(); // Hide the navbar
            }
        };

        // Add click event listeners to each nav-link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });

        // Clean up event listeners on component unmount
        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', handleLinkClick);
            });
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    <img
                        src="/images/logoimg.png"
                        height="50"
                        alt="Prosaec Logo"
                        loading="lazy"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" ref={navbarRef}> {/* Attach ref here */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item nav-item-gradient">
                            <Link className="nav-link nav-link-gradient" to="/about">About</Link>
                        </li>
                        <li className="nav-item nav-item-gradient">
                            <Link className="nav-link nav-link-gradient" to="/project">Our Projects</Link>
                        </li>
                        <li className="nav-item nav-item-gradient">
                            <Link className="nav-link nav-link-gradient" to="/services">Services</Link>
                        </li>
                        <li className="nav-item nav-item-gradient">
                            <Link className="nav-link nav-link-gradient" to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
