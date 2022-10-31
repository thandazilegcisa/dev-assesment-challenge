import React from "react";
import "../styles/footerSectionComponent.css";
import linkedinIcon from "../images/linkedin.png";
import githubIcon from "../images/github.png";

class FooterSection extends React.Component{
    render(){
        return(
            <section className="footerSection">
                <footer>
                    <p>
                        Thank <br/> <span>You</span>
                    </p>

                    <p>
                        thandazilegcisa@gmail <br/><span className="dotCom">  .com </span>
                    </p>

                    <img src={linkedinIcon} alt="linkedin icon"></img>
                    <img src={githubIcon} alt="linkedin icon"></img>
                </footer>
            </section>
        )
    }
}

export default FooterSection