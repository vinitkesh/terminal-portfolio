import React, { useEffect, useRef } from 'react'
import Draggable from 'react-draggable'
import gsap from 'gsap';

const Socials = () => {
    const terminal = useRef(null);

    

  const data = [
    {
      id: 0,
      name: 'Github',
      url: 'https://github.com/vinitkesh',
      svg: '/logos/GitHub.svg'
    },
    {
      id: 1,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vinitkeshri/',
      svg: '/logos/LinkedIn.svg'
    },
    {
      id: 2,
      name: 'Twitter',
      url: 'https://x.com/VINITKESHRI6',
      svg: '/logos/TwitterX.svg'
    },
    {
      id: 3,
      name: 'Leetcode',
      url: 'https://leetcode.com/u/vk_tori/',
      svg: '/logos/Leetcode.svg'
    },
  ];

  const hoverMap = {
    Github : 'hover:fill-purple-600',
    LinkedIn : 'hover:fill-blue-800',
    Twitter : 'hover:fill-blue-400',
    Leetcode : 'hover:fill-yellow-400'
  }

  useEffect(() => {
    gsap.fromTo(
        terminal.current,
        { x: -200 },
        { x: 5, duration: 1, ease: 'power2.inOut' }
    )
  }, []);

  return (
    <Draggable>
        <div ref={terminal} className="absolute origin-center md:left-0 bottom-0 md:bottom-auto cursor-move">
          <div className="flex md:flex-col flex-row bg-black bg-opacity-70 p-5 z-10 rounded-md pt-10 relative h-max w-max">

          <div className="rounded-t-md bg-white absolute top-0 left-0 h-5 z-20 w-full ">
              <div className="relative w-full h-full">
                <div className="w-3 h-3 m-1 bg-red-500 rounded-full right-1 origin-center absolute"></div>
                <div className="w-3 h-3 m-1 bg-blue-600 rounded-full right-5 origin-center absolute"></div>
              </div>
            </div>

            {data.map((item) => (
              <a href={item.url} target="_blank" key={item.id} className="flex items-center gap-2 relative group cursor-pointer">
                <img src={item.svg} alt={item.name} className={`${hoverMap[item.name]} fill-black w-12 h-12`}  />
                
                {/* Hidden label that appears on hover */}
                <span className={`text-white h-max p-2 bg-[#1B1B27] left-full font-mono text-xs absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Draggable>
  )
}

export default Socials
