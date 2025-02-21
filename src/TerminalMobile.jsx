import React, { useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import gsap, { SteppedEase } from 'gsap';
import TypewriterComponent from 'typewriter-effect';
import WindowTopBar from './components/WindowTopBar';

const TerminalMobile = () => {
  const lines = [
    '  Hey, I am',
    '  ',
    `  ██╗   ██╗██╗███╗   ██╗██╗████████╗ `,
    `  ██║   ██║██║████╗  ██║██║╚══██╔══╝ `,
    `  ██║   ██║██║██╔██╗ ██║██║   ██║    `,
    `  ╚██╗ ██╔╝██║██║╚██╗██║██║   ██║    `,
    `   ╚████╔╝ ██║██║ ╚████║██║   ██║    `,
    `    ╚═══╝  ╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝    `,
    `  ██╗  ██╗███████╗███████╗██╗  ██╗██████╗ ██╗ `,
    `  ██║ ██╔╝██╔════╝██╔════╝██║  ██║██╔══██╗██║ `,
    `  █████╔╝ █████╗  ███████╗███████║██████╔╝██║ `,
    `  ██╔═██╗ ██╔══╝  ╚════██║██╔══██║██╔══██╗██║ `,
    `  ██║  ██╗███████╗███████║██║  ██║██║  ██║██║ `,
    `  ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ `,
  ];

  const info = [
    {
      command: 'whoami',
      output: 'I am a passionate developer who loves to code and solve problems.',
    },
    {
      command: 'cat welcome.txt',
      output: 'Welcome to my part of the internet. Feel free to explore.',
    },
  ];

  const terminal = useRef(null);

  useEffect(() => {
    lines.forEach((_, i) => {
      gsap.fromTo(
        `#banner${i}`,
        { width: 0 },
        { width: '100%', duration: 0.1, delay: i * 0.1, ease: 'power2.in' }
      );
    });

    info.forEach((_, i) => {
      gsap.fromTo(
        `#infoCommand${i}`,
        { width: 0 },
        { width: '100%', duration: 1, delay: lines.length * 0.2 + 2.4*i + 1  , ease: "none" }
      );
      gsap.fromTo(
        `#infoResponse${i}`,
        {width:" 0%" },
        {width:"100%" , duration: 1, delay: lines.length * 0.2 + 2.4*i + 1.2 + 1 , ease: 'none' }
      );
    });

    gsap.fromTo(
        `#scroll`,
        { width: 0 },
        { width: '100%', duration: 1, delay: lines.length * 0.2 + 2.4*info.length + 1.2 + 0.5, ease: 'power2.out' }
      );

    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  
      if (scrollPercentage > 20) {
        gsap.to(terminal.current, { y: "100vh", duration: 0.5, ease: "power2.out" });
      } else {
        gsap.to(terminal.current, { y: "0vh", duration: 0.5, ease: "power2.out" });
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <Draggable >
      <div
        ref={terminal}
        className="scale-50 md:scale-100 absolute origin-center top-[15%] cursor-move sm:hidden block max-h-52 w-[95vw]"
      >
        <div className="flex flex-col bg-black bg-opacity-85 p-5 z-10 rounded-md pt-10 relative min-h-[250px] w-full">
          <WindowTopBar />

          {/* Render spans for each line */}
          {lines.map((line, i) => (
            <span
              key={i}
              id={`banner${i}`}
              className="mono-font text-white overflow-hidden text-left w-0 text-[10px] min-h-[10px] max-h-[30px] md:text-lg text-wrap max-w-screen"
              style={{
                whiteSpace: 'pre',
                lineHeight: 'normal',
              }}
            >
              {line}
            </span>
          ))}

          

          {/* Render command and output info */}
          {info.map((item, i) => (
            <>
              <span

                id={`infoCommand${i}`}
                key={`infoCommand${i}`}
                className="font-mono text-yellow-500 overflow-hidden text-left w-0 text-[14px] min-h-[10px] max-h-[42px] md:text-lg text-wrap max-w-screen"
                style={{
                  whiteSpace: 'normal',
                }}
              >
                {'guest@vinitkeshri.xyz:~$ '} {item.command}
              </span>

              {/* Immediately show the response after typing the command */}
              <span
                id={`infoResponse${i}`}
                key={`infoResponse${i}`}
                className="font-mono text-green-500 overflow-hidden text-left w-0 text-[14px] min-h-[10px] max-h-[42px] font-bold md:text-lg"
                style={{
                  whiteSpace: 'normal',
                }}
              >
                {'>  '}{item.output}
              </span>
            </>
          ))}


        <span
            id="scroll"
            className="font-mono text-yellow-500 overflow-hidden text-left w-0 text-[14px] min-h-[10px] max-h-[42px] md:text-lg text-wrap max-w-screen"
            style={{
                whiteSpace: 'normal',
                }}
            >
            {'guest@vinitkeshri.xyz:~$ Scroll to Continue....'}
        </span>

        <span id="scroll" className="font-mono text-green-500 overflow-hidden text-left w-0 text-[14px] min-h-[10px] max-h-[42px] md:text-lg text-wrap max-w-screen" style={{
                whiteSpace: 'normal',
                }}>
            {'>  '}
        </span>
        </div>
      </div>
    </Draggable>
  );
};

export default TerminalMobile;

