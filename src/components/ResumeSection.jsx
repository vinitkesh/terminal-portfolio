import WindowCard from './WindowCard';

const ResumeSection = () => (
  <div className="resume h-screen w-screen flex items-center justify-center window-spacing">
    <WindowCard id="resume" title="Resume" className="min-h-[120px] w-[90vw] max-w-md">
      <a href="/resume.pdf" download className="text-blue-400 underline font-mono">Download Resume (PDF)</a>
    </WindowCard>
  </div>
);

export default ResumeSection;
