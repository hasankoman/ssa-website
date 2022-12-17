import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { wrap } from "popmotion";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function About() {
  const { scrollY } = useScroll();
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const otherPaginate = (newDirection) => {
    console.log(newDirection);
    if (newDirection > page) {
      setPage([newDirection, 1]);
    }
    if (newDirection < page) {
      setPage([newDirection, -1]);
    }
  };

  const images = [
    "https://images.unsplash.com/photo-1613231445107-5ee7f03c8dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1612531047016-c44064f5f5d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1629774631753-88f827bf6447?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  ];

  const imageIndex = wrap(0, images.length, page);

  return (
    <section id="about" className="h-screen relative bg-white">
      <div className="w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className="w-full h-full absolute object-cover "
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", stiffness: 1000, damping: 30, duration: 1 },
              opacity: { duration: 1 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
          <div className="absolute bottom-0 left-1/2 mb-4 -translate-x-1/2 z-10 overflow-hidden bg-white px-8 py-4 rounded-2xl">
            <ul className="flex gap-8 justify-between ">
              <li className="flex justify-between items-center flex-col">
                <button
                  className=" active:scale-95 flex flex-col gap-1"
                  onClick={() => otherPaginate(0)}
                >
                  <span
                    className={`text-black ${
                      imageIndex === 0 ? "font-semibold" : ""
                    } `}
                  >
                    Project 1
                  </span>
                  <div
                    className={` h-1 ${
                      imageIndex === 0 ? "w-12" : "w-4"
                    } transition-all duration-500 rounded-full mx-auto bg-black`}
                  ></div>
                </button>
              </li>
              <li className="flex justify-center items-center flex-col">
                <button
                  className=" active:scale-95 flex flex-col gap-1"
                  onClick={() => otherPaginate(1)}
                >
                  <span
                    className={`text-black ${
                      imageIndex === 1 ? "font-semibold" : ""
                    } `}
                  >
                    Project 2
                  </span>
                  <div
                    className={` h-1 ${
                      imageIndex === 1 ? "w-12" : "w-4"
                    } transition-all duration-500 rounded-full mx-auto bg-black`}
                  ></div>
                </button>
              </li>
              <li className="flex justify-center items-center flex-col">
                <button
                  className=" active:scale-95 flex flex-col gap-1"
                  onClick={() => otherPaginate(2)}
                >
                  <span
                    className={`text-black ${
                      imageIndex === 2 ? "font-semibold" : ""
                    } `}
                  >
                    Project 3
                  </span>
                  <div
                    className={` h-1 ${
                      imageIndex === 2 ? "w-12" : "w-4"
                    } transition-all duration-500 rounded-full mx-auto bg-black`}
                  ></div>
                </button>
              </li>
            </ul>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
