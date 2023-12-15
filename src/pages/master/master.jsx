import React from "react";
import { Link, Element, scroller } from "react-scroll";
import styled from "./master.module.css"
import Navbar from "../../component/navbar/navbar";
import Home from "../home/home";
import AboutUs from "../about/about";
import Services from "../services/services";
import Contact from "../contact/contact";

function Master() {
    
    return (
        <div className={styled.container}>
            <Navbar />
            <Element name="home" className={styled.element}><Home /></Element>
            {/* <Element name="about" className={styled.element}><AboutUs /></Element> */}
            <Element name="services" className={styled.element}><Services /></Element>
            <Element name="contact" className={styled.element}><Contact /></Element>
        </div>
    )

}

export default Master;
