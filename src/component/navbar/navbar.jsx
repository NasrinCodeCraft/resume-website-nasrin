import styled from "./navbar.module.css";
import { Link, Element, scroller } from "react-scroll";

function Navbar() {

    return (
        <div className={styled.header}>
            <ul>
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