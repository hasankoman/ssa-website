import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./Routes/AnimatedRoutes";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { store } from "./store";
// ..
AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
