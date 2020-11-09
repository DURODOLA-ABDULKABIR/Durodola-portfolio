import React from "react";


function About(){
    return(
        <div className="about">
            <div className="aboutMe">
                <h2>About me</h2>
                <hr className="line" />
                <p>I am a self driven, result oriented front end  web developer who is a team player, quick study and tackles problems with confidence and optimism.</p>
                <div className="hireMe"><a href="#contact">Hire me</a></div>
            </div>
            <div>
                <img src={require("./kb.jpg")} alt="IntroImage"/>
            </div>
        </div>
    )
}

export default About;   