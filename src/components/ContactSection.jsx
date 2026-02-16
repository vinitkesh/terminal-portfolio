/* eslint-disable react/prop-types */
import { useState } from "react";
import WindowCard from "./WindowCard";
import {
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiMail,
  FiTerminal,
  FiTwitter,
  FiUser,
  FiFileText,
} from "react-icons/fi";

const ICON_MAP = {
  profile: FiUser,
  mail: FiMail,
  github: FiGithub,
  linkedin: FiLinkedin,
  x: FiTwitter,
  resume: FiFileText,
  location: FiMapPin,
  terminal: FiTerminal,
};

const ContactSection = ({ contact }) => {
  const [car, setCar] = useState(0);

  const cats = [
    {
      id: 0,
      src: "/neon-cat-cute.gif",
      alt: "Nyan cat",
    },
    {
      id: 1,
      src: "/oiiai-cat-spinning-cat.gif",
      alt: "Spinning cat",
    },
    {
      id: 2,
      src: "/khóc.gif",
      alt: "DJ cat",
    },
    {
      id: 3,
      src: "/tongue-stick-cat.gif",
      alt: "Tongue stick cat",
    },
    {
      id: 4,
      src: "/pop-cat.gif",
      alt: "Pop cat",
    }


  ];

  const Tile = ({ title, icon, children, href, onClick, className = "", iconSize = "h-7 w-7 lg:h-9 lg:w-9" }) => {
    const Comp = href ? "a" : onClick ? "button" : "div";
    const IconComp = ICON_MAP[icon];

    return (
      <Comp
        href={href}
        type={Comp === "button" ? "button" : undefined}
        onClick={onClick}
        target={href ? "_blank" : undefined}
        rel="noreferrer"
        className={[
          "group relative overflow-hidden rounded-xl border border-[#1c2030]",
          "bg-gradient-to-b from-[#0f1320] to-[#0b0f18] p-4",
          "transition hover:border-blue-400/45 hover:-translate-y-1",
          "focus:outline-none focus:border-blue-400",
          className,
        ].join(" ")}
      >
        <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(90,130,255,0.2),transparent_55%)]" />

        <div className="relative z-10 flex items-start justify-between gap-3">
          <div className="text-[11px] tracking-widest text-gray-400 font-mono">{title}</div>
          <div className="text-white/95 shrink-0">
            {IconComp ? <IconComp className={iconSize} /> : null}
          </div>
        </div>

        <div className="relative z-10 mt-3 text-gray-200 text-sm">{children}</div>
      </Comp>
    );
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#0b0e14] window-spacing px-3 sm:px-4">
      <WindowCard
        id="contact"
        title="contact.me"
        className="w-[96vw] max-w-6xl bg-[#0f1117] border border-[#1e2230]"
        draggable={false}
      >

        <div
          className="grid gap-4 font-mono grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(120px,auto)]"
          style={{ gridAutoFlow: "dense" }}
        >
          <Tile
            title="CONTACT"
            icon="profile"
            iconSize="h-10 w-10 lg:h-12 lg:w-12"
            className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <div className="space-y-2">
              <div className="text-blue-300 text-lg font-semibold">Vinit Keshri</div>
              <div className="text-gray-300 leading-relaxed">{contact.availability}</div>
              <div className="text-xs text-gray-500">Open to building cool things & thoughtful conversations.</div>
            </div>
          </Tile>

          <Tile title="EMAIL" icon="mail" iconSize="h-8 w-8 lg:h-10 lg:w-10" href={`mailto:${contact.email.link}`} className="sm:col-span-2">
            <span className="text-blue-300 break-all">{contact.email.label}</span>
          </Tile>

          <Tile
            title={"Click ?"}
            onClick={() => setCar((prev) => (prev + 1) % cats.length)}
            className="sm:col-span-2 lg:col-span-2 lg:col-start-3 min-h-[132px]"
          >
            <div className="rounded-lg flex items-center justify-center overflow-hidden bg-black border border-white/10">
              <img
                src={cats[car].src}
                alt={cats[car].alt}
                className="w-max h-[120px] object-cover"
                loading="lazy"
              />
            </div>
          </Tile>

          <Tile title="GITHUB" icon="github" iconSize="h-9 w-9 lg:h-11 lg:w-11" href={contact.github.link} className="row-span-2">
            <div className="space-y-1">
              <div className="text-blue-300">{contact.github.label}</div>
              <div className="text-xs text-gray-500">Code, experiments, OSS</div>
            </div>
          </Tile>

          <Tile title="LINKEDIN" icon="linkedin" iconSize="h-7 w-7 lg:h-9 lg:w-9" href={contact.linkedin.link}>
            <span className="text-blue-300">{contact.linkedin.label}</span>
          </Tile>

          <Tile title="X / TWITTER" icon="x" iconSize="h-6 w-6 lg:h-8 lg:w-8" href={contact.twitter.link}>
            <span className="text-blue-300">{contact.twitter.label}</span>
          </Tile>

          <Tile title="RESUME" icon="resume" iconSize="h-8 w-8 lg:h-10 lg:w-10" href={contact.resume.link} className="sm:col-span-2">
            <div className="flex items-center justify-between">
              <span className="text-blue-300">Download Resume (PDF)</span>
              <span className="text-xs text-gray-500">latest</span>
            </div>
          </Tile>

          <Tile title="LOCATION" icon="location" iconSize="h-7 w-7 lg:h-9 lg:w-9">
            <span className="text-gray-300">{contact.location}</span>
          </Tile>

          <Tile title="SSH" icon="resume" iconSize="h-6 w-6 lg:h-7 lg:w-7">
            <span className="text-green-400">ssh vinit@portfolio.dev</span>
            <div className="text-xs text-gray-500 mt-1">someday.</div>
            <div className="text-xs text-yellow-500 mt-1">Double Click on the Arch Linux for a surprise!</div>
          </Tile>

          
        </div>
      </WindowCard>
    </div>
  );
};

export default ContactSection;
