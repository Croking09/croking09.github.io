import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { navRoutes } from '../data.js'

const MIN_SCROLL_DELTA = 25;

function ScrollNavigator({ children, className }) {
  const location = useLocation();
  const navigate = useNavigate();
  const lastScrollTime = useRef(0);

  useEffect(() => {
    function onWheel(e) {
      const now = Date.now();
      if (now - lastScrollTime.current < 150) return; // 150ms cooldown

      const currentRouteId = navRoutes.indexOf(location.pathname);
      if (e.deltaY > MIN_SCROLL_DELTA && currentRouteId < navRoutes.length - 1) {
        navigate(navRoutes[currentRouteId + 1]);
        lastScrollTime.current = now;
      } else if (e.deltaY < -MIN_SCROLL_DELTA && currentRouteId > 0) {
        navigate(navRoutes[currentRouteId - 1]);
        lastScrollTime.current = now;
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [location.pathname, navigate]);

  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default ScrollNavigator;
