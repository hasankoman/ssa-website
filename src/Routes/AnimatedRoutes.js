import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import App from "../App";
import Project from "../Layers/Project";
import Projects from "../Pages/Projects";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ProjectLayer from "../Layers/ProjectLayer";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/ssa-website" element={<App />}>
        <Route path="" element={<Home />} />
      </Route>
      <Route path="/ssa-website/projects" element={<Projects />}>
        <Route path="" element={<ProjectLayer />} />
        <Route path=":projectId" element={<Project />} />
      </Route>
    </Routes>
  );
};
export default AnimatedRoutes;
