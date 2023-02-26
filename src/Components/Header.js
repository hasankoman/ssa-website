import React, { useEffect, useState } from "react";
import { useWindowHeight } from "@react-hook/window-size";
import { useWindowWidth } from "@react-hook/window-size";
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimationControls, useScroll } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsMenuOpen, toggleShow } from "../Helpers/storeSlice";

export default function Header() {
  const height = useWindowHeight();
  const width = useWindowWidth();
  const location = useLocation();
  // const [isMenuOpen, dispatch(toggleIsMenuOpen())] = useState(false);
  const [onLocation, setOnLocation] = useState("");
  const { scrollY } = useScroll();

  const controls = useAnimationControls();
  const [animateHeader, setAnimateHeader] = useState();
  const [isMobile, setIsMobile] = useState(false);
  const { isMenuOpen, show } = useSelector((state) => state.general);
  const dispatch = useDispatch();

  useEffect(() => {
    if (scrollY.current > height) {
      dispatch(toggleShow(true));
    } else {
      dispatch(toggleShow(false));
    }
  }, [scrollY, height, dispatch]);

  useEffect(() => {
    if (width > 1100) {
      setIsMobile(false);
      console.log(show);
      setAnimateHeader({
        width: show ? "70%" : "10%",
        transition: { duration: 1 },
      });
    } else if (width <= 1100) {
      setIsMobile(true);
      setAnimateHeader({
        width: !isMenuOpen ? "calc(100% - 168.75px)" : "100%",
        transition: { duration: 1 },
      });
    }
  }, [width, isMenuOpen, show]);

  useEffect(() => {
    if (show) {
      controls.start({ opacity: 1 });
    }
    if (!show) {
      controls.start({ opacity: 0 });
    }
  }, [show]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (location.pathname === "/ssa-website") {
        if (latest >= height) {
          dispatch(toggleShow(true));
        }
        if (latest < height) {
          dispatch(toggleShow(false));
          dispatch(toggleIsMenuOpen(false));
        }
      }
    });
  });

  useEffect(() => {
    if (location.pathname.includes("projects")) {
      setOnLocation("PROJECTS");
      dispatch(toggleIsMenuOpen(true));
      dispatch(toggleShow(true));
    } else if (location.pathname.includes("about")) {
      setOnLocation("ABOUT");
      dispatch(toggleIsMenuOpen(true));
      dispatch(toggleShow(true));
    } else if (location.pathname.includes("contact")) {
      setOnLocation("CONTACT");
      dispatch(toggleIsMenuOpen(true));
      dispatch(toggleShow(true));
    } else {
      setOnLocation("HOME");
      dispatch(toggleIsMenuOpen(false));
      dispatch(toggleShow(false));
    }
    width < 1100 && isMenuOpen
      ? dispatch(toggleIsMenuOpen(false))
      : dispatch(toggleIsMenuOpen(true));
  }, [dispatch, location]);

  const mobileHeader = (
    <header
      className={`flex  items-center w-full sticky top-0 self-start z-50  `}
    >
      <motion.div
        className={`  h-[135px] relative  flex items-center  `}
        animate={animateHeader}
        initial={{ width: "70%" }}
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
        <div className="w-full max-w-[1296px] absolute  h-full bg-transparent flex justify-end items-center z-20">
          <motion.button
            onClick={() => dispatch(toggleIsMenuOpen(!isMenuOpen))}
            className="text-white  text-xl justify-center items-center gap-3 flex overflow-hidden "
            animate={{
              opacity: show ? 1 : 0,
              x: isMenuOpen ? "-30px" : "20px",
            }}
            transition={{
              duration: 1,
            }}
          >
            <motion.span
              className={`header-location  ${width < 576 ? "!hidden" : ""} `}
              initial={{
                // x: isMenuOpen ? "100%" : "0",
                opacity: isMenuOpen ? 0 : 1,
                pointerEvents: isMenuOpen ? "none" : "auto",
                cursor: isMenuOpen ? "default" : "pointer",
              }}
              animate={{
                x: isMenuOpen ? "100%" : "0",
                opacity: isMenuOpen ? 0 : 1,
                pointerEvents: isMenuOpen ? "none" : "auto",
                cursor: isMenuOpen ? "default" : "pointer",
                transition: { duration: 1 },
              }}
            >
              {onLocation}
            </motion.span>
            <motion.i
              animate={{
                rotate: isMenuOpen ? -180 : 0,
                transition: { duration: 1 },
              }}
              className={`fa-solid fa-bars-staggered text-lg
               `}
            ></motion.i>
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className={`h-[${height}px] w-full  absolute bg-transparent flex justify-end items-center `}
        style={{ height: "calc(100vh - 135px)" }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          x: isMenuOpen ? "0" : "-100%",
          top: "135px",
          transition: { duration: 1 },
        }}
        initial={{
          opacity: isMenuOpen ? 1 : 0,
          x: isMenuOpen ? "0" : "-100%",
          top: "135px",
          transition: { duration: 1 },
        }}
      >
        <motion.div
          className={`bg-white  w-full h-full project-shadow flex justify-center items-center z-10`}
        >
          <ul
            className={`flex flex-col h-full py-12 gap-5 transition-all duration-1000 delay-500 text-lg ${
              width > 1100 ? "px-10" : ""
            }  `}
          >
            <li
              className={`nav-link !text-black tracking-widest before:!bg-black  `}
              onClick={() => dispatch(toggleIsMenuOpen(isMenuOpen))}
            >
              <Link
                className={`${onLocation === "HOME" ? "font-semibold" : ""}`}
                to="/ssa-website"
              >
                Home
              </Link>
            </li>
            <li
              className="nav-link !text-black tracking-widest before:!bg-black"
              onClick={() => dispatch(toggleIsMenuOpen(isMenuOpen))}
            >
              <Link
                className={`${onLocation === "ABOUT" ? "font-semibold" : ""}`}
                to="/ssa-website/about"
              >
                About
              </Link>
            </li>
            <li
              className="nav-link !text-black tracking-widest  "
              onClick={() => dispatch(toggleIsMenuOpen(isMenuOpen))}
            >
              <Link
                className={`${
                  onLocation === "PROJECTS" ? "font-semibold" : ""
                }`}
                to="/ssa-website/projects"
              >
                Projects
              </Link>
            </li>
            <li
              className="nav-link !text-black tracking-widest before:!bg-black "
              onClick={() => dispatch(toggleIsMenuOpen(isMenuOpen))}
            >
              <Link
                className={`${onLocation === "CONTACT" ? "font-semibold" : ""}`}
                to="/ssa-website/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </header>
  );

  const defaultHeader = (
    <header
      className={`flex justify-start items-center w-full sticky top-0 self-start z-50  `}
    >
      <motion.div
        className={`  h-[135px] relative  flex items-center  `}
        animate={animateHeader}
        initial={{ width: show ? "70%" : "10%" }}
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
        <div
          className="w-full max-w-[1296px] absolute h-full bg-transparent flex justify-end items-center z-20"
          style={{ right: "-47px" }}
        >
          <motion.button
            onClick={() => dispatch(toggleIsMenuOpen(!isMenuOpen))}
            className="text-white overflow-hidden text-xl justify-center items-center gap-3 flex  "
            animate={controls}
            transition={{
              duration: 1,
              x: {
                duration: 0.5,
              },
            }}
          >
            <motion.span
              initial={{
                x: isMenuOpen ? "100%" : "0",
                opacity: isMenuOpen ? 0 : 1,
                pointerEvents: isMenuOpen ? "none" : "auto",
                cursor: isMenuOpen ? "default" : "pointer",
              }}
              animate={{
                x: isMenuOpen ? "100%" : "0",
                opacity: isMenuOpen ? 0 : 1,
                pointerEvents: isMenuOpen ? "none" : "auto",
                cursor: isMenuOpen ? "default" : "pointer",
                transition: { duration: 1 },
              }}
              className="header-location"
            >
              {onLocation}
            </motion.span>
            <motion.i
              animate={{
                rotate: isMenuOpen ? -180 : 0,
                transition: { duration: 1 },
              }}
              className={`fa-regular fa-circle-right text-xl bg-black`}
            ></motion.i>
          </motion.button>
        </div>
      </motion.div>
      <div className="w-full  sm:min-w-[300px] md:min-w-[450px] lg:min-w-[700px]   h-[135px] bg-transparent flex justify-end items-center ">
        <motion.div
          className={`bg-white header-mobile-links w-full h-full flex justify-end items-center  project-shadow  z-10`}
          initial={{
            x: isMenuOpen ? "0" : "-100%",
            opacity: isMenuOpen ? 1 : 0,
          }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            x: isMenuOpen ? "0" : "-100%",
            transition: {
              opacity: { duration: 0.7 },
              x: {
                duration: 1,
              },
            },
          }}
        >
          <ul
            className={`flex flex-col lg:flex-row gap-3  transition-all duration-1000 delay-500 text-lg px-2 `}
          >
            <li
              className={`nav-link !text-black tracking-widest before:!bg-black  `}
              onClick={() => dispatch(toggleIsMenuOpen(isMenuOpen))}
            >
              <Link
                className={`${onLocation === "HOME" ? "font-semibold" : ""}`}
                to="/ssa-website"
              >
                Home
              </Link>
            </li>
            <li
              className="nav-link !text-black tracking-widest before:!bg-black"
              onClick={() => dispatch(toggleIsMenuOpen(isMenuOpen))}
            >
              <Link
                className={`${onLocation === "ABOUT" ? "font-semibold" : ""}`}
                to="/ssa-website/about"
              >
                About
              </Link>
            </li>
            <li
              className="nav-link !text-black tracking-widest  "
              onClick={() => dispatch(toggleIsMenuOpen(isMenuOpen))}
            >
              <Link
                className={`${
                  onLocation === "PROJECTS" ? "font-semibold" : ""
                }`}
                to="/ssa-website/projects"
              >
                Projects
              </Link>
            </li>
            <li
              className="nav-link !text-black tracking-widest before:!bg-black "
              onClick={() => dispatch(toggleIsMenuOpen(isMenuOpen))}
            >
              <Link
                className={`${onLocation === "CONTACT" ? "font-semibold" : ""}`}
                to="/ssa-website/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </header>
  );

  if (width > 1100) {
    return defaultHeader;
  } else if (width <= 1100) {
    return mobileHeader;
  }
}
