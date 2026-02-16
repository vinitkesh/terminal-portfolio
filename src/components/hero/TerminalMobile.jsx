import { useEffect, useMemo, useRef } from 'react';
import Draggable from 'react-draggable';
import gsap from 'gsap';
import TypewriterComponent from 'typewriter-effect';
import WindowTopBar from '../WindowTopBar';
import { mobileLines, info } from './terminal';

const TerminalMobile = () => {
  const terminal = useRef(null);
  const showBoot = true;
  const prompt = useMemo(() => '~$', []);

  useEffect(() => {
    const node = terminal.current;
    if (!node) return undefined;

    const ctx = gsap.context(() => {
      mobileLines.forEach((_, i) => {
        gsap.fromTo(
          `.banner-mobile-${i}`,
          { width: 0 },
          { width: '100%', duration: 0.1, delay: i * 0.1, ease: 'power2.in' }
        );
      });

      info.forEach((_, i) => {
        gsap.fromTo(
          `.info-command-mobile-${i}`,
          { width: 0 },
          { width: '100%', duration: 0.45, delay: mobileLines.length * 0.2 + 0.4 * i + 0.8, ease: 'power1.out' }
        );
        gsap.fromTo(
          `.info-response-mobile-${i}`,
          { width: 0 },
          { width: '100%', duration: 0.45, delay: mobileLines.length * 0.2 + 0.4 * i + 1.2, ease: 'power1.out' }
        );
      });

      gsap.fromTo(
        '.scroll-hint-mobile',
        { width: 0 },
        { width: '100%', duration: 0.8, delay: mobileLines.length * 0.2 + 0.4 * info.length + 1.2, ease: 'power2.out' }
      );
    }, node);

    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage > 20) {
        gsap.to(node, { y: '100vh', duration: 0.5, ease: 'power2.out' });
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

  return (
    <Draggable>
      <div
        ref={terminal}
        className="scale-50 md:scale-100 absolute origin-center top-[15%] cursor-move sm:hidden block max-h-52 w-[95vw] z-20"
      >
        <div className="flex flex-col bg-black bg-opacity-85 p-5 z-10 rounded-md pt-10 relative min-h-[250px] w-full">
          <WindowTopBar />

          {mobileLines.map((line, i) => (
            <span
              key={i}
              className={`mono-font text-white overflow-hidden text-left w-0 text-[10px] min-h-[10px] max-h-[30px] md:text-lg text-wrap max-w-screen banner-mobile-${i}`}
              style={{
                whiteSpace: 'pre',
                lineHeight: 'normal',
              }}
            >
              {line}
            </span>
          ))}

          {showBoot && info.map((item, i) => (
            <div key={`boot-mobile-${i}`}>
              <span
                className={`font-mono block font-extralight text-yellow-500 overflow-hidden text-left w-0 text-[14px] min-h-[10px] max-h-[42px] md:text-lg text-wrap max-w-screen info-command-mobile-${i}`}
                style={{
                  whiteSpace: 'normal',
                }}
              >
                {prompt} {item.command}
              </span>

              <span
                className={`font-mono block text-green-500 overflow-hidden text-left w-0 text-[14px] min-h-[10px] max-h-[42px] font-bold md:text-lg info-response-mobile-${i}`}
                style={{
                  whiteSpace: 'normal',
                }}
              >
                <TypewriterComponent
                  key={`boot-output-mobile-${i}`}
                  options={{ delay: 10, cursor: '' }}
                  onInit={(tw) => {
                    tw.typeString('>  ' + item.output).start();
                  }}
                />
              </span>
            </div>
          ))}

          <span
            className="font-mono text-yellow-500 overflow-hidden text-left w-0 text-[14px] min-h-[10px] max-h-[42px] md:text-lg text-wrap max-w-screen scroll-hint-mobile"
            style={{
              whiteSpace: 'normal',
            }}
          >
            {/* {'~$Mobile terminal is view-only'} */}
          </span>

          <span
            className="font-mono text-green-500 overflow-hidden text-left w-0 text-[14px] min-h-[10px] max-h-[42px] md:text-lg text-wrap max-w-screen scroll-hint-mobile"
            style={{
              whiteSpace: 'normal',
            }}
          >
            {'>  '}
          </span>
        </div>
      </div>
    </Draggable>
  );
};

export default TerminalMobile;
