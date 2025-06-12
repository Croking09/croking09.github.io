import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import { navRoutes } from '../data.js'

const MIN_SCROLL_DELTA = 25;

function SmartNavigator({ children, className }) {
  const location = useLocation();
  const navigate = useNavigate();
  const lastScrollTime = useRef(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const currentRouteId = navRoutes.indexOf(location.pathname);
      navigate(navRoutes[currentRouteId + 1]);
    },
    onSwipedRight: () => {
      const currentRouteId = navRoutes.indexOf(location.pathname);
      navigate(navRoutes[currentRouteId - 1]);
    },
    swipeDuration: 250,
    preventScrollOnSwipe: true,
  })

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
    <div {...handlers} className={className}>
      {children}
    </div>
  );
}

export default SmartNavigator;
