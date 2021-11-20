import React from 'react'
import { Element } from 'react-scroll'
import Experience from "../ExperienceBox/Experience"
import "./ExperienceContainer.css"

const ExperienceContainer = () => {
    return (
        <Element className="experienceContainer" id="experience">
            <h1>Experience</h1>
            <div className="experienceContainer__info">
                <Experience number="PHP" title="1 Year" />
                <Experience number="Javascript" title="2 Year's" />
                <Experience number="React Js " title="1.2 Years" />
                <Experience number="API" title="1.2 Year's" />
            </div>
        </Element>
    )
}

export default ExperienceContainer
