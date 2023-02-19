import { useAnimationControls, motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

//Databases
import projects from "../Databases/Projects.json";
import { useState } from "react";
import Logo from "../Components/Logo";

const container = {
  hover: {
    scale: 1.05,
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

export default function ProjectLayer() {
  const [imagesLoading, setImagesLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    setImagesLoading(true);
  }, []);

  function handleImageLoaded() {
    setLoadedImages((prevLoadedImages) => prevLoadedImages + 1);
  }

  useEffect(() => {
    if (loadedImages === projects.length) {
      setImagesLoading(false);
    }
  }, [loadedImages]);

  return (
    <main className="py-10">
      {imagesLoading && <div>loading</div>}
      <div className="grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-3 w-[95%] mx-auto gap-x-8 gap-y-32">
        {projects.map((project, index) => (
          <motion.div
            className="col-span-1 sm:col-span-2 xl:col-span-1"
            initial={{ y: "-5%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            key={project.id}
          >
            <Link to={`${project.id}`}>
              <div className="w-full h-full overflow-hidden">
                <motion.img
                  custom={index}
                  initial={{ x: "-100%" }}
                  whileInView={{ x: 0 }}
                  onLoad={handleImageLoaded}
                  transition={{
                    x: {
                      delay: 0.5,
                      ease: "circOut",
                      duration: 0.6,
                    },
                  }}
                  variants={container}
                  whileHover="hover"
                  whileTap="tap"
                  className="h-full w-full object-center object-cover"
                  src={project.photos[0].mainPhoto}
                  alt=""
                />
              </div>

              <div className="flex justify-start items-center mt-5 mb-14 text-3xl">
                <span className="">{project.title}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
