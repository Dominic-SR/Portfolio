import { IconButton } from '@material-ui/core'
import React from 'react'
import { Element } from 'react-scroll'
import { LinkedIn,Instagram,Twitter } from '@material-ui/icons'
import "./Contact.css"

const Contact = () => {
    return (
        <Element className="contact" id="contacts">
            <h1>Contact</h1>
            <div className="contact__container">
                <p>
                    Email : <a href="mailto:dominicseduraja3@gmail.com"><span>dominicseduraja3@gmail.com</span></a>
                </p>
                <p>
                    Github : <a href="https://github.com/Dominic-SR"><span>@Dominic-SR</span></a>
                </p>
                <div className="contact__icons">
                 

                    <a href="https://in.linkedin.com/in/dominicseduraja">
                        <IconButton>
                        <LinkedIn/>
                        </IconButton>
                    </a>

                    <a href="https://www.instagram.com/dominic_offl/">
                        <IconButton>
                        <Instagram/>
                        </IconButton>
                    </a>

                    <a href="https://twitter.com/dominic_offl">
                        <IconButton>
                        <Twitter/>
                        </IconButton>
                    </a>


                </div>
            </div>
        </Element>
    )
}

export default Contact