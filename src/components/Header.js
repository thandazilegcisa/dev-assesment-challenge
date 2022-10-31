import React from "react";
import "../styles/headerComponent.css"

class Header extends React.Component{
    render(){
        return(
            <header>
                <span className="salutationText"> Hello </span>
                <div role="generic">

                    <section>
                        <svg className="svgTop" width="1482" height="5" viewBox="0 0 1482 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.0238647" y1="1.28686" x2="1481.59" y2="1.28686" stroke="black" strokeWidth="0.86725"/>
                        </svg>
                    </section>

                    <section>
                        <svg className="svgSide" width="4" height="2520" viewBox="0 0 2 2289" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.594482 0.72049L0.594482 2289" stroke="black" strokeWidth="0.86725"/>
                        </svg>
                    </section>
                </div>
            </header>
        )
    }
}

export default Header