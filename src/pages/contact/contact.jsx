import Input from "../../component/input/input";
import TextArea from "../../component/textArea/textArea";
import styled from './contact.module.css';
import instagram from './../../assets/images/instagram-fill.svg';
import linkedin from './../../assets/images/linkedin.svg';
import github from './../../assets/images/github.svg';
import emailjs from 'emailjs-com';

function Contact() {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
         // Set up an account at https://www.emailjs.com/
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        emailjs.sendForm('mokhtarinasrin200@gmail.', 'template_81vrjts', e.target, 'oBdvtTvvk85sp_zrH')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <header className={styled.contactTitle}>
                Want to <span>contact</span> me?
            </header>
            <pre className={styled.textSideForm}>
                Please, use the form this <br />
                or send an email to <br />
                <span>mokhtarinasrin200@gmail.com:</span>
            </pre>
            <div className={styled.apps}>
                <a><img src={instagram} /></a>
                <a><img src={linkedin} /></a>
                <a><img src={github} /></a>
            </div>
            <form className={styled.contactMeForm} onSubmit={sendEmail}>
                <Input placeHolder="Name" name="from_name" />
                <Input placeHolder="Email" name="from_email" />
                <TextArea placeHolder="Message" name="message" />
                <input type="submit" value="send" className={styled.sendButton} />
            </form>
        </>
    )

}

export default Contact;