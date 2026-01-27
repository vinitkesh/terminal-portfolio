import WindowCard from './WindowCard';

const AboutSection = () => (
  <div className="about h-screen w-screen flex items-center justify-center window-spacing">
    <WindowCard id="about" title="About Me" className="min-h-[180px] w-[90vw] max-w-lg">
      <div>
        I enjoy building tools that empower developers and communities. I think like a problem-solver, always curious about new tech and best practices. Currently learning more about LLMs, open source, and developer advocacy. I love writing, running workshops, and being part of FOSS and tech clubs (LnD, GDSC).
      </div>
    </WindowCard>
  </div>
);

export default AboutSection;
