import "./Contact.css";
import Phone from "../../img/phone.png";
import WA from "../../img/whatsapp.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ThemeContext } from "../../context";
import { useContext } from "react";

const Contact = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);
    const formRef = useRef();
    const [done,setDone] = useState(false);

    const handleSumbit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_96vaiur', 
            'template_868y2q6', 
            formRef.current, "user_dRz6KfnXnVuTjlA5BhzFe"
            )
        .then((result) => {
            console.log(result.text);
            window.alert("Message Sent Successfully!!");
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title" data-aos="fade-right">
                        Let's discuss your Project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item" data-aos="slide-up">
                            <img 
                            src={Phone} 
                            alt="" 
                            className="c-icon" 
                            />
                            +92344-2392967
                        </div>
                        <div className="c-info-item" data-aos="slide-up">
                            <img 
                            src={WA} 
                            alt="" 
                            className="c-icon" 
                            />
                            +92306-2186018
                        </div>
                        <div className="c-info-item" data-aos="slide-up">
                            <img 
                            src={Email} 
                            alt="" 
                            className="c-icon" 
                            />
                            mirzahamzaumer@gmail.com
                        </div>
                        <div className="c-info-item" data-aos="slide-up">
                            <img 
                            src={Address} 
                            alt="" 
                            className="c-icon" 
                            />
                            R-1757 Gulshan-e-Mustafa Dastagir Karachi, Pakistan
                        </div>
                    </div>
                </div>
                <div className="c-right">
                <p className="c-desc" data-aos="fade-down">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
                </p>
                <form ref={formRef} onSubmit={handleSumbit} data-aos="slide-left">
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                    <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                    <textarea style={{backgroundColor:darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                    <button data-aos="zoom-in">Submit</button>
                    {done && "Thank You..."}
                </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
