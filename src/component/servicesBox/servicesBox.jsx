import styled from './servicesBox.module.css';

function ServicesBox(props) {

    return (
        <div className={styled.box}>
        <img src={props.box.icon} className={styled.iconService} alt="Service Icon" />
            <p className={styled.titleService}>{props.box.title}</p>
            <p className={styled.contentService}>{props.box.Desc}</p>
        </div>
    )

}

export default ServicesBox;