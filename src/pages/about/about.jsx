import styled from './about.module.css';
import BlueStars from '../../component/navbar/blueStars/blueStars';

function AboutUs() {

    return (

        <div className={`${styled.backgroundColorSky}`}>
            <div className={styled.bio}>
                <pre>
                    <p>Who's this girl?</p>
                    <p>My name is Nasrin.</p>
                    I am a web designer and developer living in beautiful Tehran, Iran.<br/> 
                    I enjoy solving problems and making everything beautiful and easy.<br/>
                    You can use my skills. I can't stop learning new things.<br/> 
                    the more the better. I am also very interested in stars and galaxies.<br/> 
                    I like it. My favorite hobby is bodybuilding and sports in general.<br/>
                    And I love to eat kaffee.
                </pre>
            </div>
            <BlueStars />
        </div>
    )

}

export default AboutUs;