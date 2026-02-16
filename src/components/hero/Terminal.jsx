import { useEffect, useMemo, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WindowTopBar from '../WindowTopBar';
import BSODScreen from './BSODScreen';
import TypewriterComponent from 'typewriter-effect';
import { lines, info } from './terminal';

gsap.registerPlugin(ScrollTrigger);
const BRICK_STORAGE_KEY = 'terminal_portfolio_bsod';

const Terminal = () => {
  const terminal = useRef(null);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [showBoot, setShowBoot] = useState(true);
  const [isBricked, setIsBricked] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem(BRICK_STORAGE_KEY) === '1';
  });
  const prompt = useMemo(() => '~$', []);

  useEffect(() => {
    const node = terminal.current;
    if (!node) return undefined;

    const ctx = gsap.context(() => {
      lines.forEach((_, i) => {
        gsap.fromTo(
          `.banner-${i}`,
          { width: 0 },
          { width: '100%', duration: 0.1, delay: i * 0.1, ease: 'power2.in' }
        );
      });

      info.forEach((_, i) => {
        gsap.fromTo(
          `.info-command-${i}`,
          { width: 0 },
          { width: '100%', duration: 0.45, delay: lines.length * 0.2 + 0.4 * i + 0.8, ease: 'power1.out' }
        );
        gsap.fromTo(
          `.info-response-${i}`,
          { width: 0 },
          { width: '100%', duration: 0.45, delay: lines.length * 0.2 + 0.4 * i + 1.2, ease: 'power1.out' }
        );
      });

      gsap.fromTo(
        '.scroll-hint',
        { width: 0 },
        { width: '100%', duration: 0.8, delay: lines.length * 0.2 + 0.4 * info.length + 1.2, ease: 'power2.out' }
      );
    }, node);

    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage > 20) {
        gsap.to(node, { y: '80vh', duration: 0.5, ease: 'power2.out' });
      } else {
        gsap.to(node, { y: '0vh', duration: 0.5, ease: 'power2.out' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  const runCommand = (raw) => {
    const command = raw.trim().toLowerCase();
    if (!command) return;
    if (isBricked) return;

    if (command === 'sudo rm rf' || command === 'sudo rm -rf') {
      setHistory((prev) => [...prev, { command, output: 'filesystem meltdown initiated...' }]);
      try {
        window.localStorage.setItem(BRICK_STORAGE_KEY, '1');
      } catch {
        // Ignore storage failures and keep current session bricked.
      }
      setIsBricked(true);
      return;
    }

    if (command === 'clear') {
      setShowBoot(false);
      setHistory([]);
      return;
    }

    if (command === 'reset') {
      setShowBoot(true);
      setHistory([]);
      return;
    }

    if (command === 'help') {
      setHistory((prev) => [...prev, { command, output: 'available commands: help, ls, clear, reset, sudo rm rf' }]);
      return;
    }

    if (command === 'ls') {
      setHistory((prev) => [...prev, { command, output: 'experience  projects  skills.tree  contact.me' }]);
      return;
    }

    setHistory((prev) => [...prev, { command, output: `command not found: ${command}` }]);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const value = input;
    setInput('');
    runCommand(value);
  };

  return (
    <>
      <Draggable>
        <div
          ref={terminal}
          className="scale-50 md:scale-100 absolute origin-center cursor-move hidden sm:block"
        >
          <div className="flex flex-col bg-black bg-opacity-85 p-5 z-10 rounded-md pt-10 relative min-h-[250px] w-max">
            <WindowTopBar />

          {/* Render spans for each line */}
          {lines.map((line, i) => (
            <span
              key={i}
              className={`mono-font text-white overflow-hidden text-left text-[10px] md:text-lg banner-${i}`}
              style={{
                whiteSpace: 'pre',
                lineHeight: 'normal',
              }}
            >
              {line}
            </span>
          ))}

          {/* Render command and output info */}
          {showBoot && info.map((item, i) => (
            <div key={`boot-${i}`}>
              <span
                className={`mono-font block text-yellow-500 overflow-hidden text-left text-[10px] md:text-lg info-command-${i}`}
                style={{
                  whiteSpace: 'pre',
                }}
              >
                {prompt} {item.command}
              </span>

              <span
                className={`mono-font block text-green-500 overflow-hidden text-left text-[10px] font-bold md:text-lg info-response-${i}`}
                style={{
                  whiteSpace: 'pre',
                }}
              >
                <TypewriterComponent
                  key={`boot-output-${i}`}
                  options={{ delay: 12, cursor: '' }}
                  onInit={(tw) => {
                    tw.typeString(item.output).start();
                  }}
                />
              </span>
            </div>
          ))}

          {history.map((entry, idx) => (
            <div key={`history-${idx}`}>
              <span className="mono-font block text-yellow-500 overflow-hidden text-left text-[10px] md:text-lg" style={{ whiteSpace: 'pre' }}>
                {prompt} {entry.command}
              </span>
              <span className="mono-font block text-green-500 overflow-hidden text-left text-[10px] font-bold md:text-lg" style={{ whiteSpace: 'pre' }}>
                {'>  '}
                {entry.output}
              </span>
            </div>
          ))}

            <form onSubmit={onSubmit} className="mt-1 flex items-center gap-1">
              <span className="mono-font text-yellow-500 text-[10px] md:text-lg">{prompt}</span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="mono-font bg-transparent text-green-400 text-[10px] md:text-lg outline-none w-[22rem]"
                placeholder="help | ls | clear | reset"
                spellCheck={false}
                autoComplete="off"
              />
            </form>

          <span className="mono-font text-green-500 overflow-hidden text-left text-[10px] md:text-lg scroll-hint" style={{
                whiteSpace: 'pre',
                }}>
            {'>  '}
          </span>

          </div>
        </div>
      </Draggable>
      {isBricked && <BSODScreen />}
    </>
  );
};

export default Terminal;
