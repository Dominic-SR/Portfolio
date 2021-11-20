import React,{useState} from 'react'
import "./Projects.css"

function Projects({img,title,desc,link}) {
    const [show, setshow] = useState(false);
    return (
        <a href={link}>
        <div className="project" 
        onMouseEnter={()=>setshow(true)} 
        onMouseLeave={()=>setshow(false)}>
            {
                show ? (
                    <div className="project__Content">
                        <h1>{title}</h1>
                        <p>{desc}</p>
                    </div>
                ):(
                    <img src={img} alt=""/>
                )
            }
        </div>
        </a>
    )
}

export default Projects
