import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="d-flex justify-content-center py-2">
                <button type="button" className="btn btn-lg btn-floating mx-2" >
                    <i className="fab fa-facebook-f"></i>
                </button>
                <button type="button" className="btn btn-lg btn-floating mx-2" >
                    <i className="fab fa-youtube"></i>
                </button>
                <button type="button" className="btn btn-lg btn-floating mx-2" >
                    <i className="fab fa-instagram"></i>
                </button>
                <button type="button" className="btn btn-lg btn-floating mx-2" >
                    <i className="fab fa-twitter"></i>
                </button>
            </div>
            <div className="text-center text-white p-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:
                <a className="text-white" href="https://prosaectotal.com/"> Prosaectotal.com</a>
                <div>Made with ❤️ By - <a href="mailto:amankumarsinghamar@gmail.com">amankumarsinghamar@gmail.com</a> | <a href="mailto:himanshu@77626@gmail.com">himanshu@77626@gmail.com</a></div>
            </div>
        </footer>
    );
}

export default Footer;
