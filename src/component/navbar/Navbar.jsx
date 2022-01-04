import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '';
import './navbar.css';
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="RSI__navbar">
            <div className="RSI__navbar-links">
                <div className="RSI__navbar-links_logo">
                    {/* <img src={logo} /> */}
                    <h1>SRI</h1>
                </div>
                <div className="RSI__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wRSI">What is RSI?</a></p>
                    <p><a href="#possibility">Why inverts?</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                </div>
            </div>
            <div className="RSI__navbar-sign">
                <p>About</p>
                <button type="button">Login</button>
            </div>
            <div className="RSI__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="RSI__navbar-menu_container scale-up-center">
                        <div className="RSI__navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#wRSI">What is RSI?</a></p>
                            <p><a href="#possibility">Why inverts</a></p>
                            <p><a href="#features">Case Studies</a></p>
                            <p><a href="#blog">Library</a></p>
                        </div>
                        <div className="RSI__navbar-menu_container-links-sign">
                            <p>About</p>
                            <button type="button">Login</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar

