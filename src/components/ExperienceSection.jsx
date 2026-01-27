import WindowCard from "./WindowCard";

const ExperienceSection = ({ experience }) => (
  <div className="experience min-h-screen w-screen flex items-center justify-center window-spacing ">
    <WindowCard
      id="experience"
      title="Experience"
      className="w-[92vw] max-w-3xl"
    >
      <div className="space-y-4 font-mono text-sm">
        {experience.map((e, i) => (
          <div
            key={i}
            className="flex gap-4 rounded border border-[#1c2030] bg-[#0c0f16] p-4 hover:border-blue-400/40 transition"
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded bg-[#141826] border border-[#1f2440] flex items-center justify-center">
                <img
                  src={e.logo}
                  alt={`${e.organization} logo`}
                  className="h-7 w-7 object-contain opacity-90"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="text-blue-300 font-semibold text-base">
                    {e.role}
                  </div>
                  <div className="text-blue-400/80">
                    {e.organization}
                  </div>
                </div>

                <div className="text-gray-400 text-xs sm:text-right">
                  <div>{e.duration}</div>
                  <div>{e.location}</div>
                </div>
              </div>

              {/* Highlights */}
              <ul className="mt-3 list-disc list-inside space-y-1 text-gray-300">
                {e.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {/* Footer */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {e.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-[2px] rounded text-xs bg-[#141826] text-blue-300 border border-[#1f2440]"
                  >
                    {t}
                  </span>
                ))}

                <span className="ml-auto text-xs text-gray-500 italic">
                  {e.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </WindowCard>
  </div>
);

export default ExperienceSection;
