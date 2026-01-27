import WindowCard from "./WindowCard";

const ContactSection = ({ contact }) => {
  const Tile = ({ title, children, href, className = "" }) => {
    const Comp = href ? "a" : "div";

    return (
      <Comp
        href={href}
        target={href ? "_blank" : undefined}
        rel="noreferrer"
        className={`
          group relative rounded-xl
          border border-[#1c2030]
          bg-[#0c0f16]
          p-4
          transition
          hover:border-blue-400/40
          focus:outline-none focus:border-blue-400
          cusror-pointer
          ${className}
        `}
      >
        <div className="text-[11px] tracking-widest text-gray-400 font-mono mb-2">
          {title}
        </div>
        <div className="text-gray-200 text-sm">
          {children}
        </div>
      </Comp>
    );
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#0b0e14] window-spacing">
      <WindowCard
        id="contact"
        title="contact.me"
        className="w-[94vw] max-w-6xl bg-[#0f1117] border border-[#1e2230]"
      >
        <div
          className="
            grid gap-4 font-mono
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            auto-rows-[minmax(120px,auto)]
          "
          style={{ gridAutoFlow: "dense" }}
        >
          {/* INTRO / MAIN */}
          <Tile
            title="CONTACT"
            className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <div className="space-y-2">
              <div className="text-blue-300 text-lg font-semibold">
                Vinit Keshri
              </div>
              <div className="text-gray-400 leading-relaxed">
                {contact.availability}
              </div>
              <div className="text-xs text-gray-500">
                Open to building cool things & thoughtful conversations.
              </div>
            </div>
          </Tile>

          {/* EMAIL */}
          <Tile
            title="EMAIL"
            href={`mailto:${contact.email.link}`}
            className="sm:col-span-2"
          >
            <span className="text-blue-300 break-all">
              {contact.email.label}
            </span>
          </Tile>

          {/* GITHUB (TALL) */}
          <Tile
            title="GITHUB"
            href={contact.github}
            className="row-span-2"
          >
            <div className="space-y-1">
              <div className="text-blue-300">
                github.com/vinitkesh
              </div>
              <div className="text-xs text-gray-500">
                Code, experiments, OSS
              </div>
            </div>
          </Tile>

          {/* LINKEDIN */}
          <Tile title="LINKEDIN" href={contact.linkedin}>
            <span className="text-blue-300">
              {contact.linkedin.label}
            </span>
          </Tile>

          {/* TWITTER / X */}
          <Tile title="X / TWITTER" href={contact.twitter}>
            <span className="text-blue-300">{contact.twitter.label}</span>
          </Tile>

          {/* RESUME */}
          <Tile
            title="RESUME"
            href={contact.resume}
            className="sm:col-span-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-blue-300">
                Download Resume (PDF)
              </span>
              <span className="text-xs text-gray-500">
                latest
              </span>
            </div>
          </Tile>

          {/* LOCATION */}
          <Tile title="LOCATION">
            <span className="text-gray-300">
              {contact.location}
            </span>
          </Tile>

          {/* FUN / TERMINAL TILE */}
          <Tile title="SSH">
            <span className="text-green-400">
              ssh vinit@portfolio.dev
            </span>
            <div className="text-xs text-gray-500 mt-1">
              someday.
            </div>
          </Tile>
        </div>
      </WindowCard>
    </div>
  );
};

export default ContactSection;
