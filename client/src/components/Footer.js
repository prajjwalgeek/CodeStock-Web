import React from 'react'
import { Tooltip } from 'antd';
import { FiFacebook, FiInstagram, FiGithub } from "react-icons/fi";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-social">
                <Tooltip placement="top" title="Facebook" color="#000000">
                    <a href="#!">
                        <FiFacebook size={18} color="#000000" />
                    </a>
                </Tooltip>
                <Tooltip placement="top" title="Instagram" color="#000000">
                    <a href="#!">
                        <FiInstagram size={18} color="#000000" />
                    </a>
                </Tooltip>
                <Tooltip placement="top" title="Github" color="#000000">
                    <a href="#!">
                        <FiGithub size={18} color="#000000" />
                    </a>
                </Tooltip>
            </div>
            <div className="footer-copy">
                <p>Made by <Tooltip placement="top" title="PortFolio" color="#000000"><a href="https://techtypo.me/" target="_blank" rel="noopener noreferrer" id="hover-up">Abhi</a></Tooltip>, Copyright &copy; {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer
