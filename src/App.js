import './App.css';
import Contact from './components/Contact/Contact';
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Header from './components/Header/Header';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import TopContainer from './components/TopContainer/TopContainer';
import Mobileview from './components/Underconstruction/Mobileview';

function App() {
 
  return (
    <div>
 
       <>
     <Header/>
     <TopContainer/>
     <SkillContainer/>
     <ProjectContainer/>
     <ExperienceContainer/>
     <Contact/>
     </>
    
    </div>
  );
}

export default App;
