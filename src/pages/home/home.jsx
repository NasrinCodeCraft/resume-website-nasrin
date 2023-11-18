import prorfile from './../../assets/images/profile.png';
import wave from './../../assets/images/wave.svg';
import trees from './../../assets/images/Trees.svg';
import styled from "./home.module.css";

function Home() {

    return (
        <div className={`container ${styled.backgroundColorSky}`}>
            <div className={styled.stars}></div>
            <img className={styled.profile} src={prorfile} />
            <div className={styled.moon}></div>
            <img src={wave} className={styled.wave}/>
        </div>
    )

}

export default Home;