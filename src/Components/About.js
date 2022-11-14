import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function About() {
  const { scrollY } = useScroll();
  // const y = useTransform(scrollY, [0, 100], [0, 360], { clamp: false });

  // const [refHeight, setRefHeight] = useState();
  // const imgRef = useRef(null);
  // useEffect(() => {
  //   return scrollY.onChange(() => {
  //     if (imgRef) {
  //       setRefHeight(imgRef.current.clientHeight);
  //     }
  //   });
  // }, []);
  return (
    <section
      id="about"
      className="h-screen flex  justify-center items-center bg-white"
    >
      <motion.div
        className={`w-full  h-full about-bg justify-center relative items-center pr-4
      `}
      ></motion.div>
    </section>
  );
}
