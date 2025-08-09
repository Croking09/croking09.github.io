import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import NavbarItem from './NavbarItem.jsx'
import { navbarItems as items } from '../data.js'

function Navbar({ className = '' }) {
  const location = useLocation();
  const [bubbleStyle, setBubbleStyle] = useState({});
  const itemRefs = useRef([]);
  const navRef = useRef(null)

  useEffect(() => {
    const itemId = items.findIndex(item => item.route === location.pathname);
    if (itemRefs.current[itemId] && navRef.current) {
      const element = itemRefs.current[itemId];
      const nav = navRef.current;
      
      let relativeLeft = 0;
      let currentElement = element;
      
      while (currentElement && currentElement !== nav) {
        relativeLeft += currentElement.offsetLeft;
        currentElement = currentElement.offsetParent;
      }
      
      setBubbleStyle({
        left: relativeLeft,
        width: element.offsetWidth,
      });
    }
  }, [location.pathname]);

  return (
    <div className={className}>
      <nav 
        ref={navRef}
        className='bg-navbar-bg rounded-full px-2 py-3 text-navbar-text font-bold relative overflow-visible'
      >
        <div
          className="absolute top-1/2 -translate-y-1/2 h-8 bg-white/8 rounded-full transition-[left,width] duration-400 z-0"
          style={{
            ...bubbleStyle,
            pointerEvents: "none",
          }}
        />
        <ul className='flex items-center space-x-1 relative'>
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
