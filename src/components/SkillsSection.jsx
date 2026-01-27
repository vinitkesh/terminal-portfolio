import WindowCard from './WindowCard';

const SkillsSection = ({ skills }) => (
  <div className="skills h-screen w-screen flex items-center justify-center window-spacing">
  <WindowCard 
    id="skills" 
    title="Skills & Tech Stack" 
    className="min-h-[220px] w-[90vw] max-w-2xl"
    draggable={false}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {Object.entries(skills).map(([cat, vals], i) => (
          <div key={i}>
            <h3 className="font-semibold text-blue-400 mb-2">{cat}</h3>
            <ul className="space-y-1">
              {vals.map((v, j) => <li key={j} className="text-gray-200 text-sm">{v}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </WindowCard>
  </div>
);

export default SkillsSection;
