import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import Terminal from './Terminal';
import Display from 'seven-segment-display';
import Socials from './Socials';
import TerminalMobile from './TerminalMobile';
import './index.css'
import { Analytics } from "@vercel/analytics/react"
import Topbar from './components/topbar';
import Bottombar from './components/bottombar';

function App() {
  const getCurrentTime = new Date().toLocaleTimeString();


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
      <div className="projects h-screen w-screen">

      </div> 
    </div>
    
  );
}

export default App;
