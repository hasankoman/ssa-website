import React, { useEffect, useState } from "react";
import { useWindowHeight } from "@react-hook/window-size";
import { useWindowWidth } from "@react-hook/window-size";
import { Link, useLocation } from "react-router-dom";
import { sortingLocation } from "../Helpers/locationSorting";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useScroll,
  animate,
} from "framer-motion";

export default function Header() {
  const height = useWindowHeight();
  const width = useWindowWidth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [onLocation, setOnLocation] = useState("HOME");
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    if (scrollY.current > height) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    if (show) {
      controls.start({ opacity: 1, paddingRight: "15px" });
    }
    if (!show) {
      controls.start({ opacity: 0, paddingRight: 0 });
    }
  }, [show]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (location.pathname === "/ssa-website") {
        if (latest >= height) {
          setShow(true);
        }
        if (latest < height) {
          setShow(false);
          setIsMenuOpen(false);
        }
      }
    });
  }, []);

  useEffect(() => {
    if (location.pathname.includes("projects")) {
      setOnLocation("PROJECTS");
      setShow(true);
    } else if (location.pathname.includes("about")) {
      setOnLocation("ABOUT");
      setShow(true);
    } else if (location.pathname.includes("contact")) {
      setOnLocation("CONTACT");
      setShow(true);
    } else {
      setOnLocation("HOME");
      setShow(false);
    }
  }, []);

  return (
    <header
      className={`flex justify-start   items-center w-full sticky top-0 self-start z-50  `}
    >
      <motion.div
        className={`  h-[135px] relative  flex items-center  `}
        animate={{
          width: show ? "100%" : "10%",
          transition: { duration: 1 },
        }}
        initial={{ width: "50%" }}
      >
        <svg
          version="1.1"
          baseProfile="tiny"
          id="katman_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          height="100%"
          width="100%"
          viewBox="0 0 1920 200"
          overflow="visible"
          xmlSpace="preserve"
          preserveAspectRatio="none"
          className="max-w-[1296px] z-20"
        >
          <rect
            fill="#000"
            stroke="#000"
            stroke-miterlimit="10"
            width="1920"
            height="200"
          />
        </svg>
        <svg
          version="1.1"
          baseProfile="tiny"
          id="katman_2"
          height="100%"
          width="200px"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 200 160"
          overflow="visible"
          xmlSpace="preserve"
          className="max-w-[168.75px] z-20"
        >
          <path fill="#000" stroke="#000" stroke-miterlimit="10" d="M200,0" />
          <path
            fill="#000"
            stroke="#000"
            stroke-miterlimit="10"
            d="M0,160L0,160c35.45,0,69.24-15.03,92.98-41.35L200,0H0V160z"
          />
        </svg>
        <div
          className={`text-white absolute transition-all duration-1000 delay-500 w-[168px] z-50 bg-black pl-4`}
        >
          <Link to={"/ssa-website"} className={`h-full`}>
            <div className="">
              <div className="font-ssa text-6xl text-center">SSA</div>
            </div>
          </Link>
        </div>
        <div className="w-full max-w-[1296px] absolute h-full bg-transparent flex justify-end items-center z-20">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white  text-xl justify-center items-center gap-3 flex  "
            animate={controls}
            transition={{
              duration: 1,
              x: {
                duration: 0.5,
              },
            }}
            whileHover={{ x: isMenuOpen ? -10 : 10 }}
          >
            <span className="header-location">{onLocation}</span>
            <motion.i
              animate={{
                rotate: isMenuOpen ? -180 : 0,
                transition: { duration: 1 },
              }}
              className={`fa-regular fa-circle-right text-lg`}
            ></motion.i>
          </motion.button>
        </div>
      </motion.div>
      <div className="w-full  sm:min-w-[300px] md:min-w-[450px] lg:min-w-[700px]   h-[135px] bg-transparent flex justify-end items-center ">
        <motion.div
          className={`bg-white header-mobile-links w-full h-full flex justify-end items-center  project-shadow  z-10`}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            x: isMenuOpen ? "0" : "-100%",
            transition: { duration: 1 },
          }}
        >
          <ul
            className={`flex flex-col lg:flex-row  gap-5 transition-all duration-1000 delay-500 text-lg px-10 `}
          >
            <li
              className={`nav-link !text-black tracking-widest before:!bg-black  `}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/ssa-website">Home</Link>
            </li>
            <li
              className="nav-link !text-black tracking-widest before:!bg-black"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/ssa-website/about">About</Link>
            </li>
            <li
              className="nav-link !text-black tracking-widest "
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/ssa-website/projects">Projects</Link>
            </li>
            <li
              className="nav-link !text-black tracking-widest before:!bg-black "
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/ssa-website/contact">Contact</Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </header>
  );
}
