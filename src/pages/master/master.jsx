import React from "react";
import { Link, Element, scroller } from "react-scroll";
import styled from "./master.module.css"
import Navbar from "../../component/navbar/navbar";

function Master() {

    return (
        <>
            <Navbar />
            <Element name="home" className={styled.element}>Home</Element>
            <Element name="about" className={styled.element}>About me</Element>
            <Element name="services" className={styled.element}>Services</Element>
            <Element name="contact" className={styled.element}>Contact me</Element>
        </>
    )

}

export default Master;
