/* eslint-disable react/prop-types */
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import WindowCard from './WindowCard';

const ExplorerSection = ({
  experience = [],
  otherExperience = [],
  projects = [],
  otherProjects = [],
  onNavigate = null,
}) => {
  const sectionRefs = useRef({});
  const explorerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('experience');
  const [showSidebar, setShowSidebar] = useState(false);

  const sections = useMemo(
    () => [
      {
        id: 'experience',
        title: 'experience',
        subtitle: 'C:\\portfolio\\experience',
        items: experience.map((item, index) => ({
          id: `experience-${index}`,
          label: `${item.role} - ${item.organization}`,
        })),
      },
      {
        id: 'projects',
        title: 'projects',
        subtitle: 'C:\\portfolio\\projects',
        items: projects.map((item, index) => ({
          id: `projects-${index}`,
          label: item.title,
        })),
      },
    ],
    [experience, projects]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0.35, 0.55, 0.75], rootMargin: '-8% 0px -20% 0px' }
    );

    sections.forEach((section) => {
      const node = sectionRefs.current[section.id];
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const node = explorerRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSidebar(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const goToSkill = (skill) => {
    const to = `/skills?skill=${encodeURIComponent(skill)}`;
    if (onNavigate) {
      onNavigate(to);
      return;
    }
    window.location.href = to;
  };

  const activeSectionData = sections.find((section) => section.id === activeSection) || sections[0];
  const activeIndex = sections.findIndex((section) => section.id === activeSectionData?.id);
  const nextSection = activeIndex >= 0 ? sections[activeIndex + 1] : null;

  return (
    <section
      ref={explorerRef}
      className="relative w-screen px-4 pb-20 pt-12 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl lg:pr-72">
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            ref={(node) => {
              sectionRefs.current[section.id] = node;
            }}
            className="mb-6 min-h-screen scroll-mt-24"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.05, ease: 'easeOut' }}
              viewport={{ amount: 0.22, margin: '-8% 0px -12% 0px' }}
            >
              <WindowCard
                id={section.id}
                draggable={false}
                title={`${section.title}\\`}
                className="w-full"
              >
                <div className="mb-4 text-xs text-gray-500">{section.subtitle}</div>

              {section.id === 'experience' && (
                <div className="space-y-3">
                  {experience.map((item, index) => (
                    <article
                      key={item.role + item.organization}
                      id={`experience-${index}`}
                      className="rounded border border-[#1d2536] bg-[#0a0f19] p-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-base font-semibold text-blue-300">{item.role}</h3>
                          <p className="text-sm text-blue-400/90">{item.organization}</p>
                        </div>
                        <div className="text-right text-xs text-gray-400">
                          <p>{item.duration}</p>
                          <p>{item.location}</p>
                        </div>
                      </div>
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-300">
                        {item.highlights.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.tech.map((tech) => (
                          <button
                            type="button"
                            key={tech}
                            onClick={() => goToSkill(tech)}
                            className="rounded border border-[#22314f] bg-[#111b31] px-2 py-1 text-xs text-blue-200 transition hover:border-blue-300 hover:text-blue-100"
                          >
                            {tech}
                          </button>
                        ))}
                      </div>
                    </article>
                  ))}

                  {otherExperience.length > 0 && (
                    <details className="rounded border border-[#1d2536] bg-[#0a0f19] p-4">
                      <summary className="cursor-pointer text-sm font-semibold text-blue-300">
                        Other Experience ({otherExperience.length})
                      </summary>
                      <div className="mt-4 space-y-3">
                        {otherExperience.map((item, index) => (
                          <details
                            key={`${item.role}-${item.organization}`}
                            className="rounded border border-[#1f2b40] bg-[#0c1424] p-3"
                          >
                            <summary className="cursor-pointer text-sm text-blue-200">
                              {item.role} - {item.organization}
                            </summary>
                            <div className="mt-3 space-y-3">
                              <div className="flex flex-wrap items-start justify-between gap-3">
                                <div className="text-xs text-gray-400">
                                  <p>{item.duration}</p>
                                  <p>{item.location}</p>
                                </div>
                                <span className="rounded border border-[#22314f] bg-[#111b31] px-2 py-1 text-[11px] text-blue-200">
                                  {item.type}
                                </span>
                              </div>
                              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-300">
                                {item.highlights.map((point) => (
                                  <li key={`${point}-${index}`}>{point}</li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-2">
                                {item.tech.map((tech) => (
                                  <button
                                    type="button"
                                    key={tech}
                                    onClick={() => goToSkill(tech)}
                                    className="rounded border border-[#22314f] bg-[#111b31] px-2 py-1 text-xs text-blue-200 transition hover:border-blue-300 hover:text-blue-100"
                                  >
                                    {tech}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </details>
                        ))}
                      </div>
                    </details>
                  )}
                </div>
              )}

              {section.id === 'projects' && (
                <div className="space-y-4">
                  {projects.map((item, index) => (
                    <article
                      key={item.title}
                      id={`projects-${index}`}
                      className="rounded border border-[#1d2536] bg-[#0a0f19] p-4"
                    >
                      <div className="grid gap-4 md:grid-cols-[1fr_220px]">
                        <div>
                          <h3 className="text-base font-semibold text-blue-300">{item.title}</h3>
                          <p className="mt-2 text-sm text-gray-200">{item.description}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.tech.map((tech) => (
                              <button
                                type="button"
                                key={tech}
                                onClick={() => goToSkill(tech)}
                                className="rounded border border-[#22314f] bg-[#111b31] px-2 py-1 text-xs text-blue-200 transition hover:border-blue-300 hover:text-blue-100"
                              >
                                {tech}
                              </button>
                            ))}
                          </div>
                          <div className="mt-4 flex flex-wrap gap-3 text-xs">
                            {item.links?.demo && (
                              <a
                                className="text-blue-400 underline"
                                href={item.links.demo}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Live Demo
                              </a>
                            )}
                            {item.links?.github && (
                              <a
                                className="text-gray-300 underline"
                                href={item.links.github}
                                target="_blank"
                                rel="noreferrer"
                              >
                                GitHub
                              </a>
                            )}
                          </div>
                        </div>
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-36 w-full rounded border border-[#1d2536] object-cover"
                          />
                        )}
                      </div>
                    </article>
                  ))}

                  {otherProjects.length > 0 && (
                    <details className="rounded border border-[#1d2536] bg-[#0a0f19] p-4">
                      <summary className="cursor-pointer text-sm font-semibold text-blue-300">
                        Other Projects ({otherProjects.length})
                      </summary>
                      <div className="mt-4 space-y-3">
                        {otherProjects.map((item, index) => (
                          <details
                            key={item.title}
                            id={`other-project-${index}`}
                            className="rounded border border-[#1f2b40] bg-[#0c1424] p-3"
                          >
                            <summary className="cursor-pointer text-sm text-blue-200">
                              {item.title}
                            </summary>
                            <div className="mt-3 space-y-3">
                              <p className="text-sm text-gray-200">{item.description}</p>
                              {item.reason && (
                                <p className="text-xs text-gray-400">Why: {item.reason}</p>
                              )}
                              <div className="flex flex-wrap gap-2">
                                {item.tech.map((tech) => (
                                  <button
                                    type="button"
                                    key={tech}
                                    onClick={() => goToSkill(tech)}
                                    className="rounded border border-[#22314f] bg-[#111b31] px-2 py-1 text-xs text-blue-200 transition hover:border-blue-300 hover:text-blue-100"
                                  >
                                    {tech}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </details>
                        ))}
                      </div>
                    </details>
                  )}
                </div>
              )}

              </WindowCard>
            </motion.div>
          </div>
        ))}
      </div>

      <aside
        className={`fixed right-4 top-1/2 z-30 hidden w-60 -translate-y-1/2 lg:block transition-all duration-500 ${
          showSidebar ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0'
        }`}
        style={{
          pointerEvents: showSidebar ? 'auto' : 'none',
        }}
      >
        <div className="rounded-md border border-[#1b2033] bg-[#090d15]/95 p-4 font-mono text-xs text-gray-300 shadow-lg backdrop-blur">
          <div className="mb-3 text-[11px] uppercase tracking-widest text-gray-500">Explorer</div>

          <div className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`w-full rounded px-2 py-1 text-left transition ${
                  activeSectionData?.id === section.id
                    ? 'bg-[#15233e] text-blue-300'
                    : 'hover:bg-[#101726]'
                }`}
              >
                {activeSectionData?.id === section.id ? '> ' : ''}
                {section.title}
              </button>
            ))}
          </div>

          <div className="my-3 border-t border-[#1f2636]" />

          <div className="mb-2 text-[11px] uppercase tracking-widest text-gray-500">Contents</div>
          <div className="max-h-44 space-y-1 overflow-y-auto pr-1">
            {activeSectionData?.items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full truncate rounded px-2 py-1 text-left text-gray-300 transition hover:bg-[#101726]"
                title={item.label}
              >
                {item.label}
              </button>
            ))}
          </div>

          {nextSection && (
            <button
              onClick={() => scrollTo(nextSection.id)}
              className="mt-4 w-full rounded border border-[#22314f] bg-[#111b31] px-2 py-2 text-left text-blue-300 transition hover:bg-[#15233e]"
            >
              next: {nextSection.title}
            </button>
          )}
          {!nextSection && (
            <button
              onClick={() => scrollTo('contact')}
              className="mt-4 w-full rounded border border-[#22314f] bg-[#111b31] px-2 py-2 text-left text-blue-300 transition hover:bg-[#15233e]"
            >
              next: contact page
            </button>
          )}
        </div>
      </aside>
    </section>
  );
};

export default ExplorerSection;
