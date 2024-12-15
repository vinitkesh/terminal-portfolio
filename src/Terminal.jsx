import React, { useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import gsap, { SteppedEase } from 'gsap';

const Terminal = () => {
  const lines = [
    '  Hey i am',
    '  ',
    `  ██╗   ██╗██╗███╗   ██╗██╗████████╗    ██╗  ██╗███████╗███████╗██╗  ██╗██████╗ ██╗`,
    `  ██║   ██║██║████╗  ██║██║╚══██╔══╝    ██║ ██╔╝██╔════╝██╔════╝██║  ██║██╔══██╗██║`,
    `  ██║   ██║██║██╔██╗ ██║██║   ██║       █████╔╝ █████╗  ███████╗███████║██████╔╝██║`,
    `  ╚██╗ ██╔╝██║██║╚██╗██║██║   ██║       ██╔═██╗ ██╔══╝  ╚════██║██╔══██║██╔══██╗██║`,
    `   ╚████╔╝ ██║██║ ╚████║██║   ██║       ██║  ██╗███████╗███████║██║  ██║██║  ██║██║`,
    `    ╚═══╝  ╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝       ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝`,
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

  }, []);

  return (
    <Draggable>
      <div
        ref={terminal}
        className="scale-50 md:scale-100 absolute origin-center cursor-move hidden sm:block"
      >
        <div className="flex flex-col bg-black bg-opacity-85 p-5 z-10 rounded-md pt-10 relative min-h-[250px] w-max">
          <div className="rounded-t-md bg-white absolute top-0 left-0 h-5 z-20 w-full ">
            <div className="relative w-full h-full">
              <div className="w-3 h-3 m-1 bg-red-500 rounded-full right-1 origin-center absolute"></div>
              <div className="w-3 h-3 m-1 bg-blue-600 rounded-full right-5 origin-center absolute"></div>
            </div>
          </div>

          {/* Render spans for each line */}
          {lines.map((line, i) => (
            <span
              key={i}
              id={`banner${i}`}
              className="mono-font text-white overflow-hidden text-left w-0 text-[10px] md:text-lg"
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
                className="mono-font text-yellow-500 overflow-hidden text-left w-0 text-[10px] md:text-lg"
                style={{
                  whiteSpace: 'pre',
                }}
              >
                {'guest@vinitkeshri.xyz:~$ '} {item.command}
              </span>

              {/* Immediately show the response after typing the command */}
              <span
                id={`infoResponse${i}`}
                key={`infoResponse${i}`}
                className="mono-font text-green-500 overflow-hidden text-left w-0 text-[10px] font-bold md:text-lg"
                style={{
                  whiteSpace: 'pre',
                }}
              >
                {'>  '}{item.output}
              </span>
            </>
          ))}


        {/* <span
            id="scroll"
            className="mono-font text-yellow-500 overflow-hidden text-left w-0 text-[10px] md:text-lg"
            style={{
                whiteSpace: 'pre',
                }}
            >
            {'guest@vinitkeshri.xyz:~$ Scroll to Continue....'}
        </span> */}

        <span id="scroll" className="mono-font text-green-500 overflow-hidden text-left w-0 text-[10px] md:text-lg" style={{
                whiteSpace: 'pre',
                }}>
            {'>  '}
        </span>
        </div>
      </div>
    </Draggable>
  );
};

export default Terminal;
