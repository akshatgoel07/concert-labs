import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a
                        href="https://www.linkedin.com/in/akshatgoel7"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="footer-icon" />
                    </a>
                    <a
                        href="https://github.com/akshatgoel07"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="footer-icon" />
                    </a>
                </div>
                {/* <p>&copy; 2023 Akshat Goel</p> */}
            </div>
        </footer>
    );
};
export default Footer;
