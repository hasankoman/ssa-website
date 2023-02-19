import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Header from "./Header";
import Logo from "./Logo";
import Projects from "./Projects";

export default function Home() {
  return (
    <main className="relative">
      <div className="-translate-y-[135px] bg-white overflow-hidden ">
        <About />
        <Footer />
      </div>
    </main>
  );
}
