import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useLocation, useParams } from "react-router-dom";
import projects from "../Databases/Projects.json";
import { sortingLocation } from "../Helpers/locationSorting";
import { useWindowHeight } from "@react-hook/window-size";
import { motion, useMotionTemplate, useTransform } from "framer-motion";
import { PulseLoader } from "react-spinners";
import { useScroll } from "framer-motion";
import ProjectImageModal from "../Components/ProjectImageModal";

import { useOutletContext } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Project() {
  const height = useWindowHeight();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [currentProjectId, setCurrentProjectId] = useState();
  const { projectId } = useParams();
  const { scrollYProgress } = useScroll();
  const yValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, height / 4, height / 2]
  );

  // const transform = useMotionTemplate`${scrollYProgress}%)`;

  // useEffect(() => {
  //   return scrollYProgress.onChange((latest) => {
  //     console.log(latest);
  //   });
  // }, []);

  return (
    <>
      {isOpen && <ProjectImageModal />}
      <motion.div className="overflow-y-hidden -translate-y-[135px] z-[60] ">
        <motion.div className=" w-full h-screen">
          <motion.div
            className="w-full h-full"
            style={{ y: yValue }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <motion.img
              src={projects[0].photos[0]["mainPhoto"]}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </motion.div>

        <motion.div className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 flex justify-center text-5xl text-white items-center bg-opacity-50 bg-black">
          <motion.div
            className="select-none"
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.2, opacity: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            Teixeira Design
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="w-full flex pb-10 border-b z-50">
        <div className="w-1/4 flex flex-col mt-5 mx-6 gap-y-4 border-r pr-4">
          <div className="flex flex-col ">
            <span className="project-header ">Title</span>
            <span className="project-text border-b w-full flex justify-center items-center">
              {projects[0].title}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="project-header ">Client</span>
            <span className="project-text border-b w-full flex justify-center items-center">
              {projects[0].client}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="project-header ">Function</span>
            <span className="project-text border-b w-full flex justify-center items-center">
              {projects[0].function}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="project-header ">Year</span>
            <span className="project-text border-b w-full flex justify-center items-center">
              {projects[0].year}
            </span>
          </div>
        </div>
        <div className="w-3/4 grid grid-cols-4 gap-8 my-5">
          {projects[0].photos[0]["photoGallery"].map((photoUrl) => {
            return (
              <div className="col-span-1 " onClick={() => setIsOpen(true)}>
                <img src={photoUrl} className="w-full " alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
