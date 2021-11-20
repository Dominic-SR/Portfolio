import React from 'react'
import "./Experience.css"

const Experience = ({number,title,style}) => {
    return (
        <div style={{...style}} className="experiance">
            <h1>{number}</h1>
            <p>{title}</p>
        </div>
    )
}

export default Experience
