import React from 'react'

const Footer = () => {
  return (
        <div>
            <footer className="footer">
                <p className="footer_title" data-aos="fade-down">Contact Me</p>
                <div className="footer_socials">
                    <a href="https://www.linkedin.com/in/dominicseduraja/" target="_blank" className="footer_icon" data-aos="fade-down" data-aos-delay="250"><i className="bx bxl-linkedin-square"></i></a>
                    <a href="https://wa.me/919042831738" target="_blank" className="footer_icon" data-aos="fade-down" data-aos-delay="450"><i className="bx bxl-whatsapp"></i></a>
                    <a href="https://github.com/Dominic-SR" target="_blank" className="footer_icon" data-aos="fade-down" data-aos-delay="550"><i className="bx bxl-github"> </i></a>
                    <a href="mailto:dominicseduraja3@gmail.com" target="_blank" className="footer_icon" data-aos="fade-down" data-aos-delay="550"><i className="bx bx-mail-send"></i></a>
                </div>
                <p>© 2025 copyright all right reserved</p>
            </footer>
        </div>
      )
}

export default Footer