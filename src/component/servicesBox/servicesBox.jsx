import styled from './servicesBox.module.css';
import webIcon from './../../assets/images/web.svg';



function ServicesBox() {

    return (
        <div className={styled.box}>
            <img src={webIcon} className={styled.iconService}/>
            <p className={styled.titleService}>title service</p>
            <p className={styled.contentService}>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Eius esse accusantium, 
                tenetur expedita incidunt iste eligendi, 
                corporis modi consequatur ipsa eos. 
                Reiciendis dolore pariatur laborum 
                veritatis animi necessitatibus ad cupiditate?
            </p>
        </div>
    )
    
}

export default ServicesBox;