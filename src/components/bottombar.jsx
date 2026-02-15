/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import { useWindowManager } from "./WindowManagerContext";

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
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="7.5" width="17" height="11" rx="2" />
        <path d="M9 7.5V5.5h6v2" />
      </svg>
    );
  }

  if (id === "projects") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3.5 7.5h6l2 2h9v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z" />
      </svg>
    );
  }

  if (id === "contact") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="6.5" width="17" height="11" rx="2" />
        <path d="m4.5 8 7.5 5 7.5-5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
};

const Bottombar = () => {
    const { windows, isMinimized, restoreWindow } = useWindowManager();
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

    return (
      <div className="w-full h-11 border-t border-[#1e2230] flex items-center justify-start bg-black/55 fixed bottom-0 left-0 z-[60] backdrop-blur-sm px-2">
        <div className="relative w-full h-full flex items-center justify-start gap-2 overflow-x-auto">
            {orderedWindows.map((windowItem) => (
              <button
                type="button"
                key={windowItem.id}
                onClick={() => handleTabClick(windowItem)}
                title={TAB_LABELS[windowItem.id] || windowItem.title || windowItem.id}
                aria-label={TAB_LABELS[windowItem.id] || windowItem.title || windowItem.id}
                className={`h-8 w-8 shrink-0 rounded border flex items-center justify-center transition ${
                  activeWindowId === windowItem.id && !isMinimized(windowItem.id)
                    ? 'border-blue-300 bg-[#20345a] text-blue-100'
                    : isMinimized(windowItem.id)
                    ? 'border-[#2b3650] bg-[#111827] text-blue-200 hover:border-blue-300 hover:text-blue-100'
                    : 'border-[#3f4d6b] bg-[#1b2436] text-white hover:border-blue-300'
                }`}
              >
                <TabIcon id={windowItem.id} />
              </button>
            ))}
            <div className="ml-auto w-10 h-full border-l border-[#1e2230] bg-black/30" />
        </div>
      </div>
    )
  }
  
  export default Bottombar
  
