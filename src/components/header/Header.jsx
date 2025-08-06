import React from 'react'

const Header = () => {
  return (
    <div className="header">
            <nav className="nav bd_grid">
               <div><a href="/#" className="nav_logo">Code with Dominic</a></div>
               <div className="nav_menu" id="nav_menu">
                  <ul className="nav_list">
                     <li className="nav_items"><a href="/#home" className="nav_link active">Home</a></li>
                     <li className="nav_items"><a href="/#about" className="nav_link active">About</a></li>
                     <li className="nav_items"><a href="/#skills" className="nav_link active">Skills</a></li>
                     <li className="nav_items"><a href="/#work" className="nav_link active">Technologies</a></li>
                  </ul>
               </div>
               <div className="nav_toggle" id="nav_toggle"><i className="bx bx-menu-alt-right"></i></div>
            </nav>
         </div>
  )
}

export default Header