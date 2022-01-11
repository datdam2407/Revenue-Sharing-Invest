import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
// import logo from '';
import './navbar.css';
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="RSI__navbar_control">
        <div className="RSI__navbar">
            <div className="RSI__navbar-links">
                <div className="RSI__navbar-links_logo">
                    {/* <img src={logo} /> */}
                    <h1>SRI</h1>
                </div>
                <div className="RSI__navbar-links_container">
                    <p><Link to="/">Home</Link> </p>

                    <p><a style={{textDecoration:"none"}} href="#wRSI">What is RSI?</a></p>
                    <p><a style={{textDecoration:"none"}} href="#wIns">Why inverts?</a></p>
                    <p><a style={{textDecoration:"none"}} href="#features">Case Studies</a></p>
                    <p><Link to="/real-estate">Real estate</Link> </p>
                    <p><Link to="/companies">Startup</Link> </p>
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
                            <p><a href="#wIns">Why inverts</a></p>
                            <p><a href="#features">Case Studies</a></p>
                            <p><a href="#invertco">Library</a></p>
                        </div>
                        <div className="RSI__navbar-menu_container-links-sign">
                            <p>About</p>
                            <button type="button">Login</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default Navbar

