import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import Terminal from './Terminal';
import Display from 'seven-segment-display';
import Socials from './Socials';
import TerminalMobile from './TerminalMobile';
import './index.css'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const getCurrentTime = new Date().toLocaleTimeString();


  return (
    <div className='w-screen h-screen relative overflow-x-clip overflow-y-scroll bg-[#A7AFD4]  '  >
    <Analytics />
    <div className='bg-img absolute'></div>
    <div className="App max-h-screen min-h-screen overflow-clip flex items-center justify-center flex-col gap-0 ">
      

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
    
    </div>
  );
}

export default App;
