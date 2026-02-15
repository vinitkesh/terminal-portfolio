import React, { useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import gsap from 'gsap';
import WindowTopBar from './WindowTopBar';
import { useWindowManager } from './WindowManagerContext';

const WindowCard = ({ id, title, children, className = '', draggable = true, size = 'md' }) => {
  const el = useRef(null);
  const isAnimatingRef = useRef(false);
  const { registerWindow, unregisterWindow, minimizeWindow, isMinimized } = useWindowManager();
  const windowId = id || title;
  const targetId = id || windowId;

  useEffect(() => {
    const node = el.current;
    gsap.fromTo(node, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
  }, []);

  useEffect(() => {
    if (!windowId) return undefined;

    registerWindow({ id: windowId, title: title || windowId, targetId });
    return () => unregisterWindow(windowId);
  }, [registerWindow, targetId, title, unregisterWindow, windowId]);

  useEffect(() => {
    const node = el.current;
    if (!node || !windowId) return;

    if (isMinimized(windowId)) {
      gsap.set(node, { display: 'none', clearProps: 'x,y,scale,opacity,filter,pointerEvents' });
      return;
    }

    gsap.set(node, { display: 'block' });
    gsap.fromTo(
      node,
      { opacity: 0, y: 14, scale: 0.98, filter: 'blur(3px)' },
      { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 0.45, ease: 'power2.out' }
    );
  }, [isMinimized, windowId]);

  const handleMinimize = () => {
    const node = el.current;
    if (!node || !windowId || isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const rect = node.getBoundingClientRect();
    const targetX = 70;
    const targetY = window.innerHeight - 24;
    const dx = targetX - (rect.left + rect.width / 2);
    const dy = targetY - (rect.top + rect.height / 2);

    gsap.set(node, { willChange: 'transform, opacity, filter', pointerEvents: 'none' });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(node, { clearProps: 'x,y,scale,opacity,filter,pointerEvents,willChange', display: 'none' });
        minimizeWindow({ id: windowId, title: title || windowId, targetId });
        isAnimatingRef.current = false;
      },
    });

    tl.to(node, {
      scale: 0.94,
      duration: 0.12,
      ease: 'power1.out',
      force3D: true,
      overwrite: 'auto',
    }).to(
      node,
      {
        x: `+=${dx}`,
        y: `+=${dy}`,
        scale: 0.16,
        opacity: 0,
        filter: 'blur(4px)',
        duration: 0.5,
        ease: 'expo.inOut',
        force3D: true,
        overwrite: 'auto',
      },
      0.04
    );
  };

  const content = (
    <div id={id} ref={el} className={`relative bg-black bg-opacity-85 p-5 z-10 rounded-md pt-10 shadow-sm transform transition hover:-translate-y-1 hover:shadow-lg ${className}`}>
      <WindowTopBar onMinimize={windowId ? handleMinimize : null} />
      {title && <h2 className="text-xl font-bold text-white mb-2">{title}</h2>}
      <div className="text-white font-mono text-sm">{children}</div>
    </div>
  );

  if (draggable) {
    return (
      <Draggable>
        <div>{content}</div>
      </Draggable>
    );
  }

  return content;
};

export default WindowCard;
