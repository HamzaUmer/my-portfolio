import "./About.css";
import Img1 from "../../img/webpic.jpg";
import Img2 from "../../img/Award.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg" data-aos="fade-right"></div>
                <div className="a-card" data-aos="fade-right">
                    <img src={Img1}
                    alt="Web" 
                    className="a-img" />
                </div>
            </div>
            <div className="a-right">
            <h1 className="a-title" data-aos="fade-down">About Me</h1>
                <p className="a-desc" data-aos="fade-left">
                I am MERN Stack Developer with exposure in JavaScript technology such as React JS, Node JS, Express JS and MongoDB. I have experience in building ecommerce application using the JavaScript MERN stack using Redux, Flux, ES6 and Web-pack for Single Page Application Development. 
                Expertise in developing web pages using HTML5. CSS3, MVC, SASS, ES6,JSON, JQuery. Good Understanding of Document Object Model(DOM) and its functionality.
                Extensive use of Node environment using NPM, Grunt, Gulp and MongoDB with Mongoose to create server side Applications.
                Expertise in creating the user validation forms and using RESTful Services for sending the data to server.
                Good Experience in using Components, Forms, Events, Keys, Router, Animations and Flux Concept.
                Used Node Package Manager(NPM) to manage the modules and used it to install useful tools such as Express, Passport.js, mongoose modules, mongo.js, body-parser and redux.
                Strong experience with the version Controls GIT, GITHUB and Bit Bucket.<br/>
                I am also Graduated Electronic Engineer with Silver Medal and i have knowledge of
                Artificial Intelligence, Machine Learning and IOT. I made almost 15 Projects in 
                my University Life and Got First Prize twice.
                </p>
                <div className="a-award">
                    <img src={Img2} alt="award" data-aos="fade-up" className="a-award-img" />
                    <div className="a-award-texts">
                    <h4 data-aos="fade-up" className="a-award-title">Silver Medal</h4>
                    <p data-aos="fade-up" className="a-award-desc">
                    Secure 2nd Position in BSc Electronic Engineering in 2021 
                    from Sir Syed University of Engineering and Technology Karachi, Pakistan
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About;
