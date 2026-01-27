import WindowCard from './WindowCard';

const HeroSection = () => {
  return (
    <div className="hero-window h-screen w-screen flex items-center justify-center">
      <WindowCard draggable={false} className="min-h-[200px] max-w-3xl text-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Hi, I’m Vinit.</h1>
          <h2 className="text-lg text-blue-200 font-semibold">Full-Stack Developer & Tech Enthusiast</h2>
          <p className="text-white max-w-2xl mx-auto">I build clean full-stack web apps and love solving real problems. Passionate about FOSS, writing, and developer communities.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#projects" className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">View Projects</a>
            <a href="#resume" className="px-5 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">Download Resume</a>
            <a href="#contact" className="px-5 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition">Contact</a>
          </div>
        </div>
      </WindowCard>
    </div>
  )
}

export default HeroSection;
