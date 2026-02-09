import Terminal from './Terminal';
import Socials from './Socials';
import TerminalMobile from './TerminalMobile';
import './index.css';
import { Analytics } from "@vercel/analytics/react";
import Topbar from './components/topbar';
import Bottombar from './components/bottombar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import { projects, skills, experience, contact } from './portfolioData';

function App() {
  return (
    <div className="content bg-[#A7AFD4] relative overflow-clip">
      <div className='bg-img absolute'></div>

      <div className='hero w-screen max-h-screen relative overflow-x-clip  overflow-clip '  >
        <Analytics />
        <div className="App max-h-screen min-h-screen overflow-clip flex items-center justify-center flex-col gap-0 ">
          <Topbar />
          <Terminal />
          <TerminalMobile />
          <Socials />
          <Bottombar />
        </div>
      </div> 
      <ExperienceSection experience={experience} />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      {/* <AboutSection /> */}
      <ContactSection contact={contact} />
    </div>
    
  );
}

export default App;
