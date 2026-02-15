import Terminal from './Terminal';
import Socials from './Socials';
import TerminalMobile from './TerminalMobile';
import { useCallback, useEffect, useState } from 'react';
import './index.css';
import { Analytics } from "@vercel/analytics/react";
import Topbar from './components/topbar';
import Bottombar from './components/bottombar';
import ExplorerSection from './components/ExplorerSection';
import ContactSection from './components/ContactSection';
import SkillsPage from './components/SkillsPage';
import { projects, otherProjects, skills, experience, otherExperience, contact } from './portfolioData';

function App() {
  const [route, setRoute] = useState({
    pathname: window.location.pathname,
    search: window.location.search,
  });

  useEffect(() => {
    const onPopState = () => {
      setRoute({
        pathname: window.location.pathname,
        search: window.location.search,
      });
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((to) => {
    const [pathname, search = ''] = to.split('?');
    const next = {
      pathname,
      search: search ? `?${search}` : '',
    };

    window.history.pushState({}, '', `${next.pathname}${next.search}`);
    setRoute(next);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const isSkillsPage = route.pathname === '/skills';

  if (isSkillsPage) {
    return (
      <div className="content bg-[#A7AFD4] relative overflow-clip min-h-screen">
        <div className='bg-img absolute'></div>
        <SkillsPage
          projects={[...projects, ...otherProjects]}
          experiences={[...experience, ...otherExperience]}
          skills={skills}
          search={route.search}
          onNavigate={navigate}
        />
        <Bottombar />
      </div>
    );
  }

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
        </div>
      </div> 
      <ExplorerSection
        experience={experience}
        otherExperience={otherExperience}
        projects={projects}
        otherProjects={otherProjects}
        onNavigate={navigate}
      />
      <ContactSection contact={contact} />
      <Bottombar />
    </div>
    
  );
}

export default App;
