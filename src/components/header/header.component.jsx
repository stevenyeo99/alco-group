import React from 'react';

import './header.styles.css';
import logo from '../../assets/img/Alco Logo - OK-1.jpg';

const Header = ({ onChangeLanguage, toggleNavBarClass, toggleClass }) => {
    return (
        <header>
            <nav className="nav-bar">
                <div className="alco">
                    <i className="fa fa-bars link" onClick={toggleNavBarClass}></i> 
                </div>

                <div className="nav-bar-left">
                    <img src={logo} id="headerLogo" />
                </div>

                <div id="navContent" className={`nav-bar-right ${toggleClass}`}>
                    <ul>
                        <li>
                             <a className="link" href="#">Home</a>
                        </li>

                        <li>
                             <a className="link" href="#">Group</a>
                        </li>

                        <li>
                            <a target="_blank" href={"https://web.facebook.com/alco.co.id"}>
                                <i className="fa fa-facebook-square link"></i>
                            </a>
                            &nbsp;
                            <a target="_blank" href={"https://www.instagram.com/alcogroup.id/"}>
                                <i className="fa fa-instagram link"></i>
                            </a>
                        </li>

                        <li>
                            <select id="ddlLang" onChange={onChangeLanguage}>
                                <option value="ENG">ENG - English</option>
                                <option value="ID">ID - Indonesia</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;