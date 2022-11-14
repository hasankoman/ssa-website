import React from "react";
import { Link } from "react-router-dom";
import instagram from "../Assets/Images/instagram-logo.png";

export default function Footer() {
  return (
    <div className="py-12 mx-10 mt-24 ">
      <div className="grid grid-cols-8 gap-10 h-full place-content-center">
        <div className="col-span-2 border-r">
          <Link to={"/"} className={``}>
            <div className="text-6xl font-bold custom-border before:h-1 items-start flex flex-col justify-start tracking-widest pb-3">
              <span className="font-ssa ">SSA</span>
              <span className="text-base text-start">
                SOPHISTICATED SOLUTIONS
                <br />& ARCHITECTURE
              </span>
            </div>
          </Link>
        </div>
        <div className="col-span-2 flex flex-col gap-6 border-r">
          <h2 className=" text-lg underline tracking-widest">MENU</h2>
          <ul className={`flex flex-col gap-3 `}>
            <li className="footer-link">
              <Link to="ssa-website">Home</Link>
            </li>
            <li className="footer-link">
              <Link to="about">About</Link>
            </li>
            <li className="footer-link">
              <Link to="projects">Projects</Link>
            </li>
            <li className="footer-link ">
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col gap-6 border-r">
          <h2 className=" text-lg underline tracking-widest ">CONTACT</h2>
          <div>
            <span>Email: </span>
            <span className="font-normal">info@ssaarch.com</span>
          </div>
          <div>
            <span>Phone Number: </span>
            <span className="font-normal">1234 567 89 10</span>
          </div>
          <div>
            <span>Address: </span>

            <span className="font-normal">
              Bankalar Cd. No:19 Voyvoda Han 306, İstanbul
            </span>
          </div>
        </div>
        <div className=" col-span-1 flex flex-col gap-6">
          <h2 className=" text-lg underline tracking-widest ">SOCIAL MEDIA</h2>
          <div className="flex flex-row gap-3 text-black text-3xl ">
            <div className="opacity-50 hover:opacity-100 transition-all duration-500">
              <a
                href="https://www.instagram.com/sophisticatedsolutions_arch/"
                className="p-2 "
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100 transition-all duration-500">
              <a href="#!" className="  p-2   ">
                <i class="fa-brands fa-twitter "></i>
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100 transition-all duration-500">
              <a href="#!" className=" p-2  ">
                <i class="fa-brands fa-linkedin "></i>
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100 transition-all duration-500">
              <a href="#!" className=" p-2   ">
                <i class="fa-brands fa-youtube "></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
