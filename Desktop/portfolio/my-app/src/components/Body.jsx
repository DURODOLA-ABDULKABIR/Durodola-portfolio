import React from "react"
import { FaCss3Alt } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import { SiJquery } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import HeadingIcons from "./HeadingIcons";

function Body() {
    return(<div className="content">
        <div className="about">
            <div className="aboutMe">
                <h2>About Me</h2>
                <hr className="line" />
                <p>I am a self driven, result oriented front end  web developer who is a team player, quick study and tackles problems with confidence and optimism.</p>
                <div className="hireMe"><a href="#contact">Hire me</a></div>
            </div>
            <div>
                <img src={require("./kb.jpg")} alt=""/>
            </div>
        </div>
        <div className="jobDescription">
            <div className="services">
                <h2>My services</h2>
                <hr className="line" />
                <div>
                <p><strong>Design:</strong> I design simple, clean content structures and patterns that give users awsome experiences.</p>
                </div>
                <div>
                <p><strong>Development:</strong> I develop designs to precision and derive much satisfaction from bringing ideas to live.</p>
                </div>
            </div>
            <div className="role">
                <h2>I'm available for:</h2>
                <hr className="line" />
                <p>Front End Role (Onsite)</p>
                <p>Front End Role (Remote)</p>
                <p>Freelance Job</p>
            </div>
            <div id="contact"/>
        </div>
        <div className="getInTouch">
            <h2>Get In Touch</h2>
                <HeadingIcons />
        </div>
        <div className="skills">
            <h2>Skills/Tools</h2>
                <div className="mySkills">   
                    <ul>
                        <li><FaHtml5 className="iconHtml" />HTML</li>
                        <li><FaCss3Alt className="iconCss" />CSS</li>
                        <li><FaBootstrap className="iconBootstrap" />Bootstrap</li>
                    </ul>
                    <ul>
                        <li><DiJavascript className="iconJavascript" />JavaScript</li>
                        <li><SiJquery className="iconJquery" /> jQuery</li>
                        <li><GrReactjs className="iconReact" /> React JS</li>
                    </ul>
                </div>
        </div>
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects"  id="projects">
                <div><a href="https://durodola-abdulkabir.github.io/Fashion-landing-page/"><p>Fasion landing page</p><img src={require("./fashion.png")} alt=""/></a></div>
                <div><a href="https://protected-wildwood-49216.herokuapp.com/"><p>Weather App</p><img src={require("./weather.png")} alt=""/></a></div>
                <div><a href="https://still-falls-33408.herokuapp.com/"><p>Newsletter sign up page</p><img src={require("./newsletter.png")} alt=""/></a></div> 
            </div>
        </div>
        <div className="hireMe-footer"><a href="#contact">Hire me</a></div>
    </div>)
}

export default Body;    