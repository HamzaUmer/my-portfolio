import "./Footer.css";
import Logo1 from "../../img/fb.png";
import Logo2 from "../../img/insta.png";
import Logo3 from "../../img/linkedin.png";
import Logo4 from "../../img/github.png";
import Logo5 from "../../img/fiverr.png";
import Logo6 from "../../img/upwork.png";
import { BackTop } from 'antd';

const Footer = () => {
    return (
        <div className="s">
            <h3 className="s-text">Find Me:</h3>
            <ul className="s-wrapper">
               <li className="s-icon" ><a href="https://www.facebook.com/Mirza.Hamza.Umer"><img src={Logo1} alt="" className="s-img" /></a></li>
               <li className="s-icon"><a href="https://www.instagram.com/mirhamzaumer786/"><img src={Logo2} alt="" className="s-img" /></a></li>
               <li className="s-icon"><a href="https://www.linkedin.com/in/engr-mirza-hamza-umer-3b596617a/"><img src={Logo3} alt="" className="s-img" /></a></li>
               <li className="s-icon"><a href="https://github.com/HamzaUmer"><img src={Logo4} alt="" className="s-img" /></a></li>
               <li className="s-icon"><a href="https://www.fiverr.com/mirzahamzaumer?up_rollout=true"><img src={Logo5} alt="" className="s-img" /></a></li>
               <li className="s-icon"><a href="https://www.upwork.com/freelancers/~019bf7a0ae48524b10"><img src={Logo6} alt="" className="s-img" /></a></li>
            </ul>
            <BackTop>
                <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
                </BackTop>
        </div>
    )
}

export default Footer
