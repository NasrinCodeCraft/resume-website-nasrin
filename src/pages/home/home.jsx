import prorfile from './../../assets/images/profile.png';
import styled from "./home.module.css";

function Home() {

    return (
        <div className={`container ${styled.backgroundColorSky}`}>
            <div className={styled.stars}></div>
            {/* <img className={styled.profile} src={prorfile} /> */}
            <div className={styled.moon}></div>
        </div>
    )

}

export default Home;