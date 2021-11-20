import React from 'react'
import "./SkillContainer.css"
import {Element} from "react-scroll"
import img from "../../files/skills.png"
import LinearProgress from "@material-ui/core/LinearProgress";

function skillContainer() {
    return (
    <Element className="skillContainer" id="skills">
        <div className="skillContainer__image">
            <img src={img}  alt=""/>
        </div>
        <div className="skillContainer__text">
            <h2>SkillsSet</h2>
            
            <div className="skillContainer__skillset">
                <h5>React</h5>
                <div className="skillContainer__slider skillContainer__slider1"> 
                <LinearProgress variant="determinate" value={85} />
                </div>
            </div>

            <div className="skillContainer__skillset">
                <h5>Node Js</h5>
                <div className="skillContainer__slider skillContainer__slider2"> 
                <LinearProgress variant="determinate" value={80} />
                </div>
            </div>

            <div className="skillContainer__skillset">
                <h5>PHP</h5>
                <div className="skillContainer__slider skillContainer__slider3"> 
                <LinearProgress variant="determinate" value={85} />
                </div>
            </div>

            <div className="skillContainer__skillset">
                <h5>C#</h5>
                <div className="skillContainer__slider skillContainer__slider4"> 
                <LinearProgress variant="determinate" value={65} />
                </div>
            </div>

            <div className="skillContainer__skillset">
                <h5>Typescript</h5>
                <div className="skillContainer__slider skillContainer__slider5"> 
                <LinearProgress variant="determinate" value={90} />
                </div>
            </div>
        </div>
    </Element>
    )
}

export default skillContainer
