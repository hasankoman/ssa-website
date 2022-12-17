import React from "react";
import Header from "../Components/Header";
import Logo from "../Components/Logo";
import HomePage from "../Components/Home";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../Components/Footer";

export default function Home() {
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCanScroll(true);
    }, 1500);
  }, []);

  return (
    <main className="relative">
      <Logo canScroll={canScroll} />
      <Header />
      <HomePage />
    </main>
  );
}
