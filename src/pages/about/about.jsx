import styled from './about.module.css';
import BlueStars from '../../component/navbar/blueStars/blueStars';
import greenprofile from './../../assets/images/greenprofile.png'

function AboutUs() {

    return (

        <div className={`container ${styled.backgroundColorSky}`}>
            <div className={styled.bio}>
                <pre>
                    <p><span>Who's</span> this girl?<br/>
                    My name is <span>Nasrin</span>.</p>
                    I am a web designer and developer living in<br/> 
                    beautiful Tehran, Iran. I enjoy solving<br/> 
                    problems and making everything beautiful<br/>
                    and easy.You can use my skills. I can't stop<br/>
                    learning new things. the more the better.<br/>
                    I am also very interested in stars and galaxies.<br/> 
                    I like it. My favorite hobby is bodybuilding <br/>
                    and sports in general. And I love to eat kaffee.
                </pre>
            </div>
            <div className={styled.box_porofile}>
                <img src={greenprofile} />
            </div>
            <BlueStars />
        </div>
    )

}

export default AboutUs;