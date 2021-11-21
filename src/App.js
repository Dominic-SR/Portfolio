import './App.css';
import Contact from './components/Contact/Contact';
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Header from './components/Header/Header';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import TopContainer from './components/TopContainer/TopContainer';
import Mobileview from './components/Underconstruction/Mobileview';

function App() {
  const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
console.log(isMobile)
  return (
    <div>
     {(isMobile !== true) ?(
       <>
     <Header/>
     <TopContainer/>
     <SkillContainer/>
     <ProjectContainer/>
     <ExperienceContainer/>
     <Contact/>
     </>
     ):(
       <Mobileview/>
     )}
    </div>
  );
}

export default App;
