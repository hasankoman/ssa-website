import { useEffect, useRef, useState } from "react";
import Main from "./Components/Home";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Logo from "./Components/Logo";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col w-full ">
      <Outlet />
    </div>
  );
}

export default App;
