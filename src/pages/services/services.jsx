import ServicesBox from '../../component/servicesBox/servicesBox';
import styled from './services.module.css';

function Services() {

    return (
        <>
            <div className={styled.titleService}>
                <pre>My <span>Services</span></pre>
                <p>What I do</p>
            </div>
            <div className={styled.servicesBox}>
                <ServicesBox />
                <ServicesBox />
                <ServicesBox />
                {/* component servicebox with props */}
            </div>
        </>
    )

}

export default Services;