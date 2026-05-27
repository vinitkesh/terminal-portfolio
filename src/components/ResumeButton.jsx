import { FiDownload, FiFileText } from 'react-icons/fi';

const ResumeButton = ({ resume, variant = 'hero' }) => {
  if (!resume?.link) return null;

  if (variant === 'dock') {
    return (
      <a
        href={resume.link}
        download
        className="btn flex items-center gap-2 relative group cursor-pointer rounded-md border border-yellow-300 bg-yellow-300/15 p-1 shadow-[0_0_18px_rgba(250,204,21,0.35)] transition hover:bg-yellow-300/25"
      >
        <span className="flex h-12 w-12 items-center justify-center text-yellow-300 transition group-hover:text-yellow-100">
          <FiFileText className="h-9 w-9" aria-hidden="true" />
        </span>
        <span className="text-white h-max p-2 bg-[#1B1B27] left-full font-mono text-xs absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {resume.label || 'Resume'}
        </span>
      </a>
    );
  }

  return (
    <a
      href={resume.link}
      download
      className="group absolute bottom-24 right-4 z-40 hidden items-center gap-3 rounded-md border border-[#263653] bg-[#0b101b]/90 px-4 py-3 font-mono text-sm text-blue-100 shadow-lg shadow-black/25 backdrop-blur transition hover:-translate-y-1 hover:border-blue-300 hover:bg-[#111b31] focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300/35 md:bottom-20 md:right-8 md:flex"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded border border-[#2b3f65] bg-[#14213a] text-blue-200 transition group-hover:text-white">
        <FiFileText className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="text-[11px] uppercase tracking-widest text-gray-400">
          {resume.label || 'Resume'}
        </span>
        <span className="whitespace-nowrap font-semibold">Download PDF</span>
      </span>
      <FiDownload className="h-4 w-4 text-blue-300 transition group-hover:translate-y-0.5 group-hover:text-white" aria-hidden="true" />
    </a>
  );
};

export default ResumeButton;
