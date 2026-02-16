/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import { useWindowManager } from "./WindowManagerContext";
import { FiBriefcase, FiCircle, FiFolder, FiMail, FiMinimize2, FiMaximize2 } from "react-icons/fi";
import { SiArchlinux } from "react-icons/si";

const TAB_PRIORITY = {
  experience: 0,
  projects: 1,
  contact: 2,
};

const TAB_LABELS = {
  experience: "experience",
  projects: "projects",
  contact: "contact.me",
  "skills-tree": "skills.tree",
};

const TabIcon = ({ id }) => {
  if (id === "experience") {
    return <FiBriefcase className="h-4 w-4" />;
  }

  if (id === "projects") {
    return <FiFolder className="h-4 w-4" />;
  }

  if (id === "contact") {
    return <FiMail className="h-4 w-4" />;
  }

  return <FiCircle className="h-4 w-4" />;
};

const Bottombar = () => {
    const { windows, isMinimized, restoreWindow, minimizeWindow } = useWindowManager();
    const [activeWindowId, setActiveWindowId] = useState(null);

    const orderedWindows = useMemo(
      () =>
        [...windows].sort((a, b) => {
          const pa = TAB_PRIORITY[a.id] ?? 99;
          const pb = TAB_PRIORITY[b.id] ?? 99;
          if (pa !== pb) return pa - pb;
          return (TAB_LABELS[a.id] || a.title || a.id).localeCompare(TAB_LABELS[b.id] || b.title || b.id);
        }),
      [windows]
    );

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (!visible[0]) return;
          const id = visible[0].target.getAttribute("data-window-id");
          if (id) setActiveWindowId(id);
        },
        { threshold: [0.2, 0.4, 0.6], rootMargin: "-10% 0px -20% 0px" }
      );

      orderedWindows.forEach((windowItem) => {
        const target = document.getElementById(windowItem.targetId || windowItem.id);
        if (!target) return;
        target.setAttribute("data-window-id", windowItem.id);
        observer.observe(target);
      });

      return () => observer.disconnect();
    }, [orderedWindows]);

    const handleTabClick = (windowItem) => {
      restoreWindow(windowItem.id);

      const target = document.getElementById(windowItem.targetId || windowItem.id);
      if (!target) return;

      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    };

    const allMinimized = windows.length > 0 && windows.every((item) => isMinimized(item.id));

    const toggleAllWindows = () => {
      if (allMinimized) {
        windows.forEach((item) => restoreWindow(item.id));
        return;
      }

      windows.forEach((item) => {
        if (!isMinimized(item.id)) {
          minimizeWindow(item);
        }
      });
    };

    const goToHero = () => {
      const scrollHero = () => {
        const hero = document.querySelector(".hero");
        if (hero) {
          hero.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };

      if (window.location.pathname !== "/") {
        window.history.pushState({}, "", "/");
        window.dispatchEvent(new PopStateEvent("popstate"));
        requestAnimationFrame(scrollHero);
        return;
      }

      scrollHero();
    };

    const handleArchClick = (event) => {
      if (event.detail === 2) {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank", "noopener,noreferrer");
        return;
      }
      goToHero();
    };

    return (
      <div className="w-full h-11 border-t border-[#1e2230] flex items-center justify-start bg-black/55 fixed bottom-0 left-0 z-[60] backdrop-blur-sm">
        <div className="relative w-full h-full flex items-center justify-start gap-0 overflow-x-auto overflow-y-clip">
            <div className="relative group h-full shrink-0" onClick={handleArchClick}>
              <button
                type="button"
              className="h-full border-r border-[#2b3650] bg-[#111827] text-blue-200 transition hover:bg-[#16203a] hover:text-blue-100 font-mono text-[11px] font-semibold px-3 flex items-center gap-1.5"
              title="Arch Linux: Back to hero"
              aria-label="Arch Linux: Back to hero"
            >
              <SiArchlinux className="h-6 w-6" fill="#fef08a" />
            </button>
              <span className="pointer-events-none absolute bottom-full mb-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-white h-max p-2 bg-[#1B1B27] font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Arch Linux
              </span>
            </div>
            {orderedWindows.map((windowItem) => (
              <div key={windowItem.id} className="relative group h-full shrink-0">
                <button
                  type="button"
                  onClick={() => handleTabClick(windowItem)}
                  title={TAB_LABELS[windowItem.id] || windowItem.title || windowItem.id}
                  aria-label={TAB_LABELS[windowItem.id] || windowItem.title || windowItem.id}
                  className={`h-full w-11 border-r flex items-center justify-center transition ${
                    activeWindowId === windowItem.id && !isMinimized(windowItem.id)
                      ? 'border-[#3f5b91] bg-[#20345a] text-blue-100'
                      : isMinimized(windowItem.id)
                      ? 'border-[#2b3650] bg-[#111827] text-blue-200 hover:bg-[#16203a] hover:text-blue-100'
                      : 'border-[#3f4d6b] bg-[#1b2436] text-white hover:bg-[#22314f]'
                  }`}
                >
                  <TabIcon id={windowItem.id} />
                </button>
                <span className="pointer-events-none absolute bottom-full mb-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-white h-max p-2 bg-[#1B1B27] font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {TAB_LABELS[windowItem.id] || windowItem.title || windowItem.id}
                </span>
              </div>
            ))}
            <div className="relative group h-full shrink-0 ml-auto">
              <button
                type="button"
                onClick={toggleAllWindows}
                className="h-full w-12 border-l border-[#2b3650] bg-[#111827] text-blue-200 transition hover:bg-[#16203a] hover:text-blue-100"
                title={allMinimized ? "Maximize all windows" : "Minimize all windows"}
                aria-label={allMinimized ? "Maximize all windows" : "Minimize all windows"}
              >
                {allMinimized ? <FiMaximize2 className="mx-auto h-4 w-4" /> : <FiMinimize2 className="mx-auto h-4 w-4" />}
              </button>
              <span className="pointer-events-none absolute bottom-full mb-1 right-0 whitespace-nowrap text-white h-max p-2 bg-[#1B1B27] font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {allMinimized ? "Maximize all" : "Minimize all"}
              </span>
            </div>
        </div>
      </div>
    )
  }
  
  export default Bottombar
  
