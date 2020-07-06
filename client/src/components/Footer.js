import React from 'react'
import { FiFacebook, FiInstagram, FiGithub } from "react-icons/fi";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-social">
                <a href="#!">
                    <FiFacebook size={18} />
                </a>
                <a href="#!">
                    <FiInstagram size={18} />
                </a>
                <a href="#!">
                    <FiGithub size={18} />
                </a>
            </div>
            <div className="footer-copy">
                <p>Made by Abhi, Copyright &copy; {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer
