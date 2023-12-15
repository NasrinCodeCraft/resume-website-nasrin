import styled from "./navbar.module.css";
import { Link, Element, scroller } from "react-scroll";
import React, { useState } from "react";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
        <div className={styled.header}>
                <label className={styled.menuToggle} htmlFor="demo" onClick={toggleMenu}>
                    <input type="checkbox" id="demo" className={styled.toggleMenu} checked={menuOpen} onChange={toggleMenu}/>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <ul style={{ left: menuOpen ? "0px" : "-100%" }}>
                    <li>
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>About me</Link>
                    </li>
                    <li>
                        <Link to="services" smooth={true} duration={500}>Services</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>Contact me</Link>
                    </li>
                </ul>
        </div>
    )

}

export default Navbar;