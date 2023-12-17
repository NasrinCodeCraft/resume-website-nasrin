import styled from './about.module.css';
import BlueStars from '../../component/navbar/blueStars/blueStars';
import greenprofile from './../../assets/images/greenprofile.png'

function AboutUs() {

    return (

        <div className={`container ${styled.backgroundColorSky}`}>
            <p className={styled.who}><span>Who's</span> this girl?<br/>
                    My name is <span>Nasrin</span>.
            </p>
            <div className={styled.orderingAboutContent}>
                <div className={styled.bio}>
                    <p>
                        I am a web designer and developer living in
                        beautiful Tehran, Iran. I enjoy solving
                        problems and making everything beautiful
                        and easy.You can use my skills. I can't stop
                        learning new things. the more the better.
                        I am also very interested in stars and galaxies.
                        I like it. My favorite hobby is bodybuilding 
                        and sports in general. And I love to eat kaffee.
                    </p>
                </div>
                <div className={styled.box_porofile}>
                    <img src={greenprofile} />
                </div>
            </div>
            <BlueStars />
        </div>
    )

}

export default AboutUs;