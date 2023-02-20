import React, { useEffect, useRef, useState } from "react";
import { useWindowHeight } from "@react-hook/window-size";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LazyLoad from "react-lazyload";

export default function Project({
  images,
  id,
  description,
  title,
  handlePageChange,
}) {
  const projectRef = useRef(null);
  const height = useWindowHeight();
  const navigate = useNavigate();

  const handleImageClick = () => {
    handlePageChange();
    setTimeout(() => {
      navigate(`project/${id}`);
    }, 1500);
  };

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
    <motion.li
      className={`cursor-pointer flex flex-col`}
      style={{ "--height": `${height * 0.7}px` }}
      ref={projectRef}
    >
      <Link to={`projects/${id}`}>
        <motion.div
          exit={{}}
          className="w-full mx-auto projects-item  rounded-3xl bg-slate-200 overflow-hidden bg-opacity-90  project-shadow transition-all duration-[2000ms]"
        >
          <motion.img
            src={images.landspace}
            alt=""
            variants={container}
            animate="initial"
            whileHover="hover"
            whileTap="tap"
            className="h-full w-full rounded-3xl object-center object-cover"
          />
        </motion.div>
        <AnimatePresence initial={false} wait>
          <motion.div
            exit={{ opacity: 0 }}
            transition={{
              duration: 2,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="flex justify-center items-center"
          >
            <span className="text-2xl">{title}</span>
          </motion.div>
        </AnimatePresence>
      </Link>
    </motion.li>
  );
}
