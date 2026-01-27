import React, { useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import gsap from 'gsap';
import WindowTopBar from './WindowTopBar';

const WindowCard = ({ id, title, children, className = '', draggable = true, size = 'md' }) => {
  const el = useRef(null);

  useEffect(() => {
    const node = el.current;
    gsap.fromTo(node, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
  }, []);

  const content = (
    <div id={id} ref={el} className={`relative bg-black bg-opacity-85 p-5 z-10 rounded-md pt-10 shadow-sm transform transition hover:-translate-y-1 hover:shadow-lg ${className}`}>
      <WindowTopBar />
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
