import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"

const TopContent = () => {
    return (
        <div className="topcontent">
            <div className="topcontent__container">
                <h1 className="topcontentHeading">Hi I'm</h1>
                <h1>Dominic Sedu Raja</h1>
                <h1 className="topcontentHeading">A Professional</h1>
                <h1>Software Engineer</h1>
                <a href="www.google.com">
                    <button className="topcontent_downloadbutton">Download CV</button>
                </a>
                <Link to="project" smooth={true} duration={500}>
                    <button className="topcontent_workbutton">My Work</button>
                </Link>   
            </div>           
        </div>
    )
}

export default TopContent
