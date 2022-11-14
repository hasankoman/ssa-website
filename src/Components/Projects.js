import React, { useEffect, useRef, useState } from "react";
import Project from "./Project";
import projects from "../Databases/Projects.json";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Link, useNavigate } from "react-router-dom";
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useScroll,
} from "framer-motion";
import { useWindowHeight } from "@react-hook/window-size";
import { useWindowWidth } from "@react-hook/window-size";

export default function Projects({ handlePageChange }) {
  const [parent] = useAutoAnimate({ duration: 1000 });
  const [lastIndex, setLastIndex] = useState(3);
  const [firstPro, setFirstPro] = useState(true);
  const [secondPro, setSecondPro] = useState(true);

  const { scrollY } = useScroll();

  const height = useWindowHeight();
  const width = useWindowWidth();
  const [sortedProjects, setSortedProjects] = useState([
    projects[1],
    projects[2],
  ]);

  const container = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
    },
    tap: {
      scale: 1.01,
      transition: {
        duration: 0.2,
      },
    },
    initial: {
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="overflow-x-hidden  pb-20 z-50 shadow-img" id="projects">
      <div className=" flex w-11/12 flex-col justify-center items-center mx-auto relative">
        <h2 className="text-6xl self-end text-black py-20 z-50 underline decoration-4 underline-offset-4">
          Top Projects
        </h2>
        <motion.ul className="w-full grid grid-cols-2 gap-8 pb-5" ref={parent}>
          {sortedProjects.map((project) => (
            <Project
              key={project.id}
              images={project.photos[0]}
              id={project.id}
              title={project.title}
              description={project.description}
              handlePageChange={handlePageChange}
            />
          ))}
        </motion.ul>
        <div className="self-start">
          <Link
            to="projects"
            className="project-link !text-black opacity-75 text-3xl project-link  before:bg-black hover:opacity-100 cursor-pointer project-more"
          >
            See All...
          </Link>
        </div>
      </div>
    </section>
  );
}
