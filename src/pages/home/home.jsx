import React from 'react';
import prorfile from './../../assets/images/profile.png';
import wave from './../../assets/images/wave.svg';
import styled from "./home.module.css";
import downloadCv from "./../../assets/files/cv.pdf";

function Home() {
    return (
        <>
            <div className={`container ${styled.backgroundColorSky}`}>
                <div className={styled.stars}></div>
                <pre>
                    I do website design <br /><span>&</span> code.
                </pre>
                <img className={styled.profile} src={prorfile} alt="Profile" />
                <div className={styled.moon}></div>
                {/* <img src={wave} className={styled.wave} alt="Wave" /> */}
            </div>
            <a className={styled.downloadCv} href={downloadCv} target="_blank" >
                Download My Cv
            </a>
        </>
    )
}

export default Home;
