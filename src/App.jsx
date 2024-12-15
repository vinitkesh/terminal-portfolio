import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import Terminal from './Terminal';
import Display from 'seven-segment-display';
import Socials from './Socials';
import TerminalMobile from './TerminalMobile';

function App() {
  const getCurrentTime = new Date().toLocaleTimeString();

  

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-[#A7AFD4] flex-col gap-0">
      <img src="/Lines.svg" alt="Lines" className="w-screen absolute blur-sm object-cover" />

      <div className="w-full h-6 bg-black bg-opacity-25 absolute top-0">
        <div className="time origin-center left-[50%] absolute top-0 h-min">
          <span className="text-white text-xs font-mono ">{getCurrentTime}</span>
        </div>
      </div>

      {/* Draggable Terminal */}
      <Terminal />
      <TerminalMobile />
      <Socials />

      
    </div>
  );
}

export default App;
