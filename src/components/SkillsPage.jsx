/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import WindowCard from './WindowCard';

const SkillsPage = ({ projects = [], experiences = [], skills = {}, search = '', onNavigate = null }) => {
  const params = new URLSearchParams(search);
  const selectedSkill = params.get('skill');

  const allSkills = useMemo(() => {
    const projectSkills = projects.flatMap((project) => [
      ...(project.tech || []),
      ...(project.hiddenSkills || []),
    ]);
    const experienceSkills = experiences.flatMap((item) => [ ...(item.tech || []), ...(item.hiddenSkills || []) ]);
    const baseSkills = Object.values(skills).flat();
    return [...new Set([...projectSkills, ...experienceSkills, ...baseSkills])].sort((a, b) => a.localeCompare(b));
  }, [projects, experiences, skills]);

  const skillsToLinks = useMemo(() => {
    const map = {};

    allSkills.forEach((skill) => {
      map[skill] = {
        projects: projects.filter((project) =>
          [...(project.tech || []), ...(project.hiddenSkills || [])].includes(skill)
        ),
        experiences: experiences.filter((item) => (item.tech || []).includes(skill)),
      };
    });

    return map;
  }, [allSkills, projects, experiences]);

  const visibleSkills = selectedSkill && allSkills.includes(selectedSkill) ? [selectedSkill] : allSkills;

  const goTo = (to) => {
    if (onNavigate) {
      onNavigate(to);
      return;
    }
    window.location.href = to;
  };

  return (
    <section className="relative min-h-screen w-screen px-4 pb-16 pt-10 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <WindowCard
          draggable={false}
          title="skills.tree"
          className="w-full border border-[#1b2033] bg-[#0d1119]/95"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => goTo('/')}
              className="rounded border border-[#22314f] bg-[#111b31] px-3 py-1 text-xs text-blue-200 transition hover:border-blue-300"
            >
              cd ..
            </button>
            <div className="text-xs text-gray-400">
              Click badges to filter project branches.
            </div>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => goTo('/skills')}
              className={`rounded border px-2 py-1 text-xs transition ${
                !selectedSkill
                  ? 'border-blue-300 bg-[#172744] text-blue-100'
                  : 'border-[#22314f] bg-[#111b31] text-blue-200 hover:border-blue-300'
              }`}
            >
              all skills
            </button>
            {allSkills.map((skill) => (
              <button
                type="button"
                key={skill}
                onClick={() => goTo(`/skills?skill=${encodeURIComponent(skill)}`)}
                className={`rounded border px-2 py-1 text-xs transition ${
                  selectedSkill === skill
                    ? 'border-blue-300 bg-[#172744] text-blue-100'
                    : 'border-[#22314f] bg-[#111b31] text-blue-200 hover:border-blue-300'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <aside className="rounded border border-[#1d2536] bg-[#0a0f19] p-4">
              <div className="text-xs uppercase tracking-wide text-gray-500">Skill Groups</div>
              <div className="mt-3 space-y-3">
                {Object.entries(skills).map(([group, items]) => (
                  <div key={group}>
                    <h3 className="text-sm font-semibold text-blue-300">{group}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {items.map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => goTo(`/skills?skill=${encodeURIComponent(item)}`)}
                          className={`rounded border px-2 py-1 text-xs transition ${
                            selectedSkill === item
                              ? 'border-blue-300 bg-[#172744] text-blue-100'
                              : 'border-[#22314f] bg-[#111b31] text-blue-200 hover:border-blue-300'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            <div className="rounded border border-[#1d2536] bg-[#0a0f19] p-4">
              <div className="text-xs uppercase tracking-wide text-gray-500">Skill Tree</div>

              <div className="mt-4 space-y-5">
                {visibleSkills.map((skill) => {
                  const linked = skillsToLinks[skill] || { projects: [], experiences: [] };
                  const linkedProjects = linked.projects;
                  const linkedExperiences = linked.experiences;

                  return (
                    <div key={skill} className="rounded border border-[#1b253a] bg-[#0c1424] p-3">
                      <div className="text-sm font-semibold text-blue-300">{skill}</div>

                      <ul className="mt-3 border-l border-[#243148] pl-4">
                        {linkedProjects.length === 0 && linkedExperiences.length === 0 && (
                          <li className="relative mb-2 pl-3 text-xs text-gray-500 before:absolute before:left-[-17px] before:top-[8px] before:h-px before:w-3 before:bg-[#243148]">
                            no linked project/experience yet
                          </li>
                        )}

                        {linkedProjects.map((project) => (
                          <li
                            key={project.title}
                            className="relative mb-2 flex items-center gap-2 pl-3 text-sm text-gray-200 before:absolute before:left-[-17px] before:top-[10px] before:h-px before:w-3 before:bg-[#243148]"
                          >
                            <span className="rounded border border-[#2c3f64] bg-[#12213d] px-2 py-[2px] text-[10px] uppercase tracking-wide text-blue-200">
                              project
                            </span>
                            <span>{project.title}</span>
                          </li>
                        ))}

                        {linkedExperiences.map((item) => (
                          <li
                            key={`${item.role}-${item.organization}`}
                            className="relative mb-2 flex items-center gap-2 pl-3 text-sm text-gray-200 before:absolute before:left-[-17px] before:top-[10px] before:h-px before:w-3 before:bg-[#243148]"
                          >
                            <span className="rounded border border-[#30503e] bg-[#122b20] px-2 py-[2px] text-[10px] uppercase tracking-wide text-emerald-200">
                              experience
                            </span>
                            <span>{item.role} - {item.organization}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </WindowCard>
      </div>
    </section>
  );
};

export default SkillsPage;
