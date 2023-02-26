import React, { useEffect, useRef, useState } from "react";
import img0 from "../Assets/Images/logo-bg-0.avif";
import img1 from "../Assets/Images/logo-bg-1.avif";
import img2 from "../Assets/Images/logo-bg-2.avif";
import img3 from "../Assets/Images/logo-bg-3.avif";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Logo({ canScroll }) {
  const [refHeight, setRefHeight] = useState();
  const [image, setImage] = useState(img0);
  const [onIndex, setOnIndex] = useState(0);
  const logoRef = useRef(null);
  const logoTextRef = useRef();
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!canScroll) {
      document.querySelector("html").classList.add("overflow-clip");
    } else {
      document.querySelector("html").classList.remove("overflow-clip");
    }
  }, [canScroll]);

  useEffect(() => {
    setRefHeight(logoRef.current.clientHeight);
    return scrollY.onChange(() => {
      setTimeout(() => {
        if (scrollY.current === 0) {
          if (onIndex < 4) {
            if (onIndex === 0) {
              setImage(img0);
            } else if (onIndex === 1) setImage(img1);
            else if (onIndex === 2) {
              setImage(img2);
              setOnIndex(onIndex + 1);
              return;
            }
            setTimeout(() => {
              setOnIndex(onIndex + 1);
            }, 2000);
          } else {
            setImage(img3);
            setTimeout(() => {
              setOnIndex(0);
            }, 2000);
          }
        }
      }, 1000);
    });
  }, []);
  const opacity = useTransform(scrollY, [0, refHeight / 1.5], [1, 0]);
  const scale = useTransform(scrollY, [0, refHeight], [1, 0]);

  useEffect(() => {
    setTimeout(() => {
      if (scrollY.current === 0) {
        if (onIndex < 4) {
          if (onIndex === 0) {
            setImage(img0);
          } else if (onIndex === 1) setImage(img1);
          else if (onIndex === 2) {
            setImage(img2);
            setOnIndex(onIndex + 1);
            return;
          }
          setTimeout(() => {
            setOnIndex(onIndex + 1);
          }, 2000);
        } else {
          setImage(img3);
          setTimeout(() => {
            setOnIndex(0);
          }, 2000);
        }
      }
    }, 1000);
  }, [onIndex]);

  return (
    <div
      className={`h-screen z-[9999] bg-white  flex justify-center items-center relative ${
        canScroll ? "" : "pr-4"
      }  `}
      id="begin"
      ref={logoRef}
    >
      <motion.div
        className="ssa-text select-none sticky top-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, type: "easeInOut" }}
        style={{
          opacity,
          scale,
          "--background-image": `url(${image})`,
        }}
        ref={logoTextRef}
      >
        <div className="text-[140px] md:text-[225px] lg:text-[300px] sm:text-[175px] tracking-wider font-ssa">
          SSA
        </div>
        <div className="lg:text-6xl text-2xl md:text-4xl sm:text-3xl">
          SOPHISTICATED SOLUTIONS <br />& ARCHITECTURE
        </div>
      </motion.div>

      <a
        className={`absolute bottom-0 text-6xl mb-5 animate-bounce transition-opacity duration-700  ${
          scrollY > 0 ? "opacity-0 pointer-events-none" : "opacity-100"
        } `}
        href="#about"
      >
        <i class="fa-solid fa-angle-up"></i>
      </a>
    </div>
  );
}
