import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import NavbarItem from './NavbarItem.jsx'
import { navbarItems as items } from '../data.js'

function Navbar({ className = '' }) {
  const location = useLocation();
  const [bubbleStyle, setBubbleStyle] = useState({});
  const itemRefs = useRef([]);

  useEffect(() => {
    const itemId = items.findIndex(item => item.route === location.pathname);
    if (itemRefs.current[itemId]) {
      const element = itemRefs.current[itemId];
      setBubbleStyle({
        left: element.offsetLeft,
        width: element.offsetWidth,
      });
    }
  }, [location.pathname]);

  return (
    <div className={className}>
      <nav className='bg-navbar-bg rounded-full px-2 py-3 text-navbar-text font-bold relative overflow-visible'>
        <ul className='flex items-center space-x-1 relative'>
          <div
            className="absolute top-1/2 -translate-y-1/2 h-8 bg-white/8 rounded-full transition-[left,width] duration-400 z-0"
            style={{
              ...bubbleStyle,
              pointerEvents: "none",
            }}
          />
          {items.map((item, index) => (
            <li
              key={index}
              className='navbaritem relative z-10'
              ref={element => itemRefs.current[index] = element}
            >
              <NavbarItem
                text={item.text}
                route={item.route}
                currentPath={location.pathname}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
