import React from 'react'
import "./ProjectContainer.css"
import {Element} from "react-scroll"
import Projects from '../Projects/Projects'
import react from "../../files/react.png"
import graphqlimg from "../../files/grapql.png"
import redux from "../../files/redux.png"
import Node from "../../files/node.png"
import PHP from "../../files/php.png"
import Typescript from "../../files/typescript.png"

function ProjectContainer() {

    const project = [
     {   img:react,
        title:"React",
        desc:"Click To Github",
        link:"https://github.com/Dominic-SR/React-Functionality"
    },
    {   img:redux,
        title:"React - Redux",
        desc:"Click To Github",
        link:"https://github.com/Dominic-SR/React-Redux"
    },
    {   img:Node,
        title:"Node Js",
        desc:"Click To Github",
        link:"https://github.com/Dominic-SR/Express-CRUD"
    },
    {   img:graphqlimg,
        title:"GraphQL",
        desc:"Click To Github",
        link:"https://github.com/Dominic-SR/GraphQL"
    },
    {   img:PHP,
        title:"PHP",
        desc:"Click To Github",
        link:"https://github.com/Dominic-SR/PHP-CORE"
    },
    {   img:Typescript,
        title:"TypeScript",
        desc:"Click To Github",
        link:""
    },
    ];

    return (
            <Element className="projectContainer" id="projects">
                <h1>Projects</h1>
                <p>Here are some projects which i done for making lives of people easy.</p>
                <div className="projectContainer_projects">
                {
                    project.map((proj,index)=>{
                    return(
                    <Projects 
                    key={index} 
                    img={proj.img} 
                    title={proj.title} 
                    desc={proj.desc} 
                    link={proj.link}
                    />
                        )
                    })
                }                    
                </div>
            </Element>
    )
}

export default ProjectContainer
