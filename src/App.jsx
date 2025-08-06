import { useState } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/Footer';
import HomeImage from "./assets/images/2.png";
import AboutImage from "./assets/images/3.png";
import SkillImage from "./assets/images/1.png";
import './App.css';

function App() {

  return (
    <>
         <Header />
         <div>
            <div className="main">
               <div>
                  <section className="home bd_grid" id="home">
                     <div className="home_data" data-aos="fade-down">
                        <h1 className="home_title">Hi, <br/>I'm <span className="home_title-color" style={{color: "rgb(69, 169, 143)"}}>Dominic </span><br/>Software Engineer</h1>
                        <a href="https://github.com/Dominic-SR" target="_blank" className="button" style={{background: "linear-gradient(to right, rgb(53, 135, 115), rgb(93, 224, 192))"}}>My Projects</a>
                     </div>
                     <div className="home_social">
                        <a href="https://www.linkedin.com/in/dominicseduraja/" target="_blank" className="home_social-icon" data-aos="fade-down" data-aos-delay="300"><i className="bx bxl-linkedin-square" style={{fontSize: "50px"}}></i></a>
                        
                        <a href="https://wa.me/919042831738" target="_blank" className="home_social-icon" data-aos="fade-down" data-aos-delay="300"><i className="bx bxl-whatsapp" style={{fontSize: "50px"}}></i></a>
                        
                        <a href="https://github.com/Dominic-SR" target="_blank" className="home_social-icon" data-aos="fade-down" data-aos-delay="300"><i className="bx bxl-github" style={{fontSize: "50px"}}></i></a>
                        
                        <a href="mailto:dominicseduraja3@gmail.com" target="_blank" className="home_social-icon" data-aos="fade-down" data-aos-delay="300"><i className="bx bx-mail-send" style={{fontSize: "50px"}}></i></a>
                      </div>
                     <div className="home_img"><img src={HomeImage} /></div>
                  </section>
               </div>
               <div>
                  <section className="about section" id="about">
                     <h2 className="section-title" data-aos="fade-down" style={{color: "rgb(69, 169, 143)"}}>About</h2>
                     <div className="about_container bd_grid">
                        <div className="about_img"><img src={AboutImage} /></div>
                        <div>
                           <h2 className="about_subtitle" data-aos="fade-down" data-aos-delay="350">I'm Dominic</h2>
                           <p className="about_text" data-aos="fade-down" data-aos-delay="450">I'm a software Engineer. I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️.</p>
                        </div>
                     </div>
                  </section>
               </div>
               <div>
                  <section className="skills section" id="skills">
                     <h2 className="section-title" data-aos="fade-down">Skills</h2>
                     <div className="skills_container bd_grid">
                        <div>
                           <h2 className="skills_subtitle" data-aos="fade-down" data-aos-delay="250">Professional Skills</h2>
                           <p className="skills_text" data-aos="fade-down" data-aos-delay="350">Without sharpen your weapon; standing on the battlefield would not increase your chance of winning</p>
                           <div className="skills_data" data-aos="fade-right">
                              <div className="skills_name">
                                 <i className="bx bxl-react skill_icon"></i>
                                 <box-icon type="logo" name="react"></box-icon>
                                 <span className="skill_name">Front-End &amp; UI Designing</span>
                              </div>
                              <div><span className="skill_percentage">95%</span></div>
                              <div className="skill_bar skill_html"></div>
                           </div>
                           <div className="skills_data" data-aos="fade-right" data-aos-delay="250">
                              <div className="skills_name"><i className="bx bxl-nodejs skill_icon"></i><span className="skill_name">Back-End &amp; API Service</span></div>
                              <div><span className="skill_percentage">85%</span></div>
                              <div className="skill_bar skill_css"></div>
                           </div>
                           <div className="skills_data" data-aos="fade-right" data-aos-delay="250">
                              <div className="skills_name"><i className="bx bxl-git skill_icon"></i><span className="skill_name">version Control(git,github,bitbucket)</span></div>
                              <div><span className="skill_percentage">75%</span></div>
                              <div className="skill_bar skill_js"></div>
                           </div>
                           <div className="skills_data" data-aos="fade-right" data-aos-delay="250">
                              <div className="skills_name"><i className="bx bxs-data skill_icon"></i><span className="skill_name">Database(MongoDB,MySql)</span></div>
                              <div><span className="skill_percentage">80%</span></div>
                              <div className="skill_bar skill_ui"></div>
                           </div>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="350"><img src={SkillImage} /></div>
                     </div>
                  </section>
               </div>
               <div>
                  <section className="work section" id="work">
                     <h2 className="section-title" data-aos="fade-down">Current Tech Stack</h2>
                     <div className="work_container bd_grid" data-aos="fade-down" data-aos-delay="250">
                        <div className="work_img">
                           <h4>React JS</h4>
                           <a href="https://github.com/Dominic-SR/React-Functionality" target="_blank"><img src="./D Protfolio_files/react.png" alt=""/></a>
                        </div>
                        <div className="work_img">
                           <h4>Redux</h4>
                           <a href="https://github.com/Dominic-SR/React-Redux"><img src="./D Protfolio_files/redux.png" alt=""/></a>
                        </div>
                        <div className="work_img">
                           <h4>Node JS</h4>
                           <a href="https://github.com/Dominic-SR/NodeJS-Mysql"><img src="./D Protfolio_files/node.png" alt=""/></a>
                        </div>
                        <div className="work_img">
                           <h4>Graph QL</h4>
                           <a href="https://github.com/Dominic-SR/GraphQL"><img src="./D Protfolio_files/graphql.png" alt=""/></a>
                        </div>
                        <div className="work_img">
                           <h4>PHP</h4>
                           <a href="https://github.com/Dominic-SR/PHP-CORE"><img src="./D Protfolio_files/php.png" alt=""/></a>
                        </div>
                        <div className="work_img">
                           <h4>Angular</h4>
                           <a href="https://github.com/Dominic-SR/React-Typescript"><img src="./D Protfolio_files/typescript.png" alt=""/></a>
                        </div>
                     </div>
                  </section>
               </div>
               <Footer />
            </div>
         </div>
      
    </>
  )
}

export default App
