import Terminal from './components/hero/Terminal.jsx';
import Socials from './Socials';
import TerminalMobile from './components/hero/TerminalMobile.jsx';
import { useCallback, useEffect, useState } from 'react';
import './index.css';
import { Analytics } from "@vercel/analytics/react";
import Topbar from './components/topbar';
import Bottombar from './components/bottombar';
import ExplorerSection from './components/ExplorerSection';
import ContactSection from './components/ContactSection';
import SkillsPage from './components/SkillsPage';
import { projects, otherProjects, skills, experience, otherExperience, contact } from './portfolioData';
import { FiDownload, FiFileText } from 'react-icons/fi';

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
          <a
            href={contact.resume.link}
            target="_blank"
            className="group absolute bottom-24 right-4 z-40 flex items-center gap-3 rounded-md border border-[#263653] bg-[#0b101b]/90 px-4 py-3 font-mono text-sm text-blue-100 shadow-lg shadow-black/25 backdrop-blur transition hover:-translate-y-1 hover:border-blue-300 hover:bg-[#111b31] focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300/35 md:bottom-20 md:right-8"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded border border-[#2b3f65] bg-[#14213a] text-blue-200 transition group-hover:text-white">
              <FiFileText className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="text-[11px] uppercase tracking-widest text-gray-400">Resume</span>
              <span className="whitespace-nowrap font-semibold">Download PDF</span>
            </span>
            <FiDownload className="h-4 w-4 text-blue-300 transition group-hover:translate-y-0.5 group-hover:text-white" aria-hidden="true" />
          </a>
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
