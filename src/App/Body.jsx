import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Overview from '../Pages/Overview/Overview.jsx'
import Skills from "../Pages/Skills/Skills.jsx";
import Projects from "../Pages/Projects/Projects.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
import FadeInWrapper from "./FadeInWrapper";

function Body() {
  const location = useLocation();

  return (
    <div className="pt-30 flex-grow z-10">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<FadeInWrapper><Overview /></FadeInWrapper>} />
          <Route path="/skills" element={<FadeInWrapper><Skills /></FadeInWrapper>} />
          <Route path="/projects" element={<FadeInWrapper><Projects /></FadeInWrapper>} />
          <Route path="/contact" element={<FadeInWrapper><Contact /></FadeInWrapper>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Body;
