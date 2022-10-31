import React from "react";
import myImage from "../images/Thandazile Gcisa_Photo.jpg";
import "../styles/heroSectionComponent.css";
import AboutSection from "./AboutSection";
import FooterSection from "./FooterSection";


class HeroSection extends React.Component{
    render(){
        return(
            <main role="main" className="mainContent" id="main-content">
                <section>
                    <div role={"generic presentation"} className="blockTop"></div>
                    <div role={"generic presentation"} className="blockLeft"></div>
                    <div role={"generic presentation"} className="blockMiddle"></div>

                        <span className="inlineIAmText"> I '<br></br>m </span>


                    <article>
                        <figure>
                            <img src={myImage} alt="An image of Thandazile Gcisa" className="mainImage"></img>
                        </figure>

                        <ul>
                            <li> 
                                <span className="nameTextOne" >Thanda</span>
                            </li>
                            <li> 
                                <span className="nameTextTwo">Zile</span>
                            </li>
                            <li> 
                                <span className="nameTextThree">Gcisa</span>
                            </li>
                        </ul>


                        <AboutSection/>
                    
                    </article>
                </section>

                <FooterSection/>
            </main>

        )
    }
}

export default HeroSection