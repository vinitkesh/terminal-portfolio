import { useEffect, useMemo, useState } from 'react';

const detectBrowser = (ua) => {
  if (/Edg\//.test(ua)) return 'Edge';
  if (/OPR\//.test(ua)) return 'Opera';
  if (/Firefox\//.test(ua)) return 'Firefox';
  if (/Chrome\//.test(ua)) return 'Chrome';
  if (/Safari\//.test(ua) && !/Chrome\//.test(ua)) return 'Safari';
  return 'Unknown';
};

const detectOS = (ua) => {
  if (/Windows/.test(ua)) return 'Windows';
  if (/Mac OS X/.test(ua)) return 'macOS';
  if (/Android/.test(ua)) return 'Android';
  if (/iPhone|iPad|iPod/.test(ua)) return 'iOS';
  if (/Linux/.test(ua)) return 'Linux';
  return 'Unknown';
};

const Topbar = () => {
  const [clock, setClock] = useState(() => new Date());
  const [usage, setUsage] = useState({ cpu: 23, ram: 41 });

  useEffect(() => {
    const interval = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    const interval = setInterval(() => {
      setUsage((prev) => {
        const cpuDrift = (Math.random() - 0.5) * 9;
        const ramDrift = (Math.random() - 0.5) * 5;
        const cpuSpike = Math.random() < 0.08 ? Math.random() * 18 : 0;
        const ramSpike = Math.random() < 0.05 ? Math.random() * 10 : 0;

        return {
          cpu: Math.round(clamp(prev.cpu + cpuDrift + cpuSpike, 6, 96)),
          ram: Math.round(clamp(prev.ram + ramDrift + ramSpike, 18, 92)),
        };
      });
    }, 1400);

    return () => clearInterval(interval);
  }, []);

  const machine = useMemo(() => {
    const ua = navigator.userAgent;
    const browser = detectBrowser(ua);
    const os = detectOS(ua);
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(ua);
    const cores = navigator.hardwareConcurrency || 4;
    const mem = navigator.deviceMemory || 8;
    const seed = (ua.length + cores + mem) % 17;

    return {
      browser,
      os,
      device: isMobile ? 'mobile' : 'desktop',
      distro: ['arch', 'fedora', 'debian', 'nixos'][seed % 4],
      kernel: `6.${(seed % 7) + 1}.${(seed % 9) + 2}`,
      shell: ['zsh', 'fish', 'bash'][seed % 3],
      packages: 900 + seed * 83,
      services: 12 + (seed % 9),
      uptime: `${(seed % 8) + 2}h ${(seed * 7) % 60}m`,
    };
  }, []);

  const timezoneLabel = useMemo(() => {
    const offsetMinutes = -clock.getTimezoneOffset();
    const sign = offsetMinutes >= 0 ? '+' : '-';
    const abs = Math.abs(offsetMinutes);
    const hh = String(Math.floor(abs / 60)).padStart(2, '0');
    const mm = String(abs % 60).padStart(2, '0');
    return `(UTC${sign}${hh}:${mm})`;
  }, [clock]);

  return (
    <div className="w-full fixed top-0 left-0 z-[70] px-3 py-1.5 border-b border-[#20283c] bg-gradient-to-b from-[#121725]/85 to-[#0d1220]/85 backdrop-blur-sm mono-font">
      <div className="font-mono text-[12px] text-white/90 flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
        <div className="flex items-center gap-1.5">
          <span className="ml-0 md:ml-1 text-white/60">./Vinit_Keshri</span>
        </div>

        <div className="hidden md:block flex-1 h-px bg-white/15 mx-3" />

        <div className="flex items-center gap-1">
          
          <span className="hidden md:inline rounded border border-[#2a3654] bg-[#121a30] px-2 py-[2px] text-white/90">
            {machine.browser} | {machine.os} | {machine.device}
          </span>
          {/* <span className="hidden lg:inline rounded border border-[#2b3d35] bg-[#122119] px-2 py-[2px] text-emerald-200">
            {machine.distro} {machine.kernel}
          </span> */}
          <span className="hidden xl:inline rounded border border-[#3f3a2c] bg-[#231f14] px-2 py-[2px] text-amber-200">
            {machine.shell} | pkgs {machine.packages} | up {machine.uptime}
          </span>
          <span className="hidden lg:inline rounded border border-[#4a2f2f] bg-[#2b1616] px-2 py-[2px] text-red-200">
            CPU {usage.cpu}%
          </span>
          <span className="hidden lg:inline rounded border border-[#2f3a4f] bg-[#131d2f] px-2 py-[2px] text-cyan-200">
            RAM {usage.ram}%
          </span>
          <span className="rounded px-2 py-[2px] text-blue-200">
            {timezoneLabel} | {clock.toLocaleTimeString()} 
          </span>
        </div>

      </div>
    </div>
  );
};

export default Topbar
