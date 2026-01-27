import WindowCard from './WindowCard';

const ProjectsSection = ({ projects }) => (
  <div className="projects h-screen w-screen flex items-center justify-center window-spacing text-pretty font-inter">
  <WindowCard 
    id="projects" 
    title="Projects" className="min-h-[300px] w-[90vw] max-w-3xl">
      <div className="flex flex-col gap-4 w-full">
        {projects.map((p, i) => (
          <article key={i} className="border border-gray-700 rounded p-3 bg-[#0f1115] w-full">
            <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">

                <h3 className="text-lg font-semibold text-blue-300 py-2">{p.title}</h3>
                <p className="text-white text-sm mb-1 py-1">{p.description}</p>
                {p.reason && <p className="text-gray-400 text-xs ">Why: {p.reason}</p>}
                
                <div className="flex flex-wrap gap-2 mb-1 mt-6">
                  {p.tech.map((t, j) => (
                    <span key={j} className="bg-blue-900 text-blue-200 px-2 py-1 rounded text-xs">{t}</span>
                  ))}
                </div>

                {p.contribution && <p className="text-gray-400 text-xs mb-1">Contribution: {p.contribution}</p>}
                <div className="flex gap-4 mb-1">
                  {p.links.demo && <a href={p.links.demo} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Live Demo</a>}
                  {p.links.github && <a href={p.links.github} className="text-gray-300 underline" target="_blank" rel="noopener noreferrer">GitHub</a>}
                </div>
                {p.challenges && <p className="text-xs text-yellow-400">Challenges: {p.challenges}</p>}
                {p.learned && <p className="text-xs text-green-400">What I learned: {p.learned}</p>}
              </div>
              {/* placeholder for screenshot */}
              {p.image && <img src={p.image} alt={p.title} className="w-80 h-60 object-cover rounded-md border border-gray-800" />}
            </div>
          </article>
        ))}
      </div>
    </WindowCard>
  </div>
);

export default ProjectsSection;
