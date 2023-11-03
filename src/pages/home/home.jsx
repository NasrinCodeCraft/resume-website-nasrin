import React from "react";
import { Link, Element, scroller } from "react-scroll";
import styled from "./home.module.css"
function Home() {

    const scrollToNextSection = () => {
        scroller.scrollTo('section2', {
            duration: 1000,
            smoooth: true
        })
    }

    return (
        <>
            <div className={styled.pos}>

            <Link to="section1" smooth={true} duration={500} className={styled.link}>section1</Link>
            <Link to="section2" smooth={true} duration={500} className={styled.link}>section2</Link>
            <Link to="section3" smooth={true} duration={500} className={styled.link}>section3</Link>

            </div>
            <div>
                {/* <button onClick={scrollToNextSection} className={styled.button}>scroll</button> */}
            </div>
            <Element name="section1" className={styled.element}>section1</Element>
            <Element name="section2" className={styled.element}>section2</Element>
            <Element name="section3" className={styled.element}>section3</Element>
        </>
    )
}

export default Home;
