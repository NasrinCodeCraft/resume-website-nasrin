import Input from "../../component/input/input";
import TextArea from "../../component/textArea/textArea";
import styled from './contact.module.css';
import instagram from './../../assets/images/instagram-fill.svg';
import linkedin from './../../assets/images/linkedin.svg';
import github from './../../assets/images/github.svg';

function Contact() {

    return (
        <>
            <header className={styled.contactTitle}>
                Want to <span>contact</span> me?
            </header>
            <pre className={styled.textSideForm}>
                Please, use the form this <br/>
                or send an email to <br/>
                <span>mokhtarinasrin200@gmail.com:</span>
            </pre>
            <div className={styled.apps}>
                <a><img src={instagram}/></a>
                <a><img src={linkedin}/></a>
                <a><img src={github}/></a>
            </div>
            <div className={styled.contactMeForm}>
                <Input placeHolder="Name" />
                <Input placeHolder="Email" />
                <TextArea placeHolder={"Message"} />
                <button className={styled.sendButton}>send</button>
            </div>
        </>
    )

}

export default Contact;