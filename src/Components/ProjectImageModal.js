import React from "react";
import { createPortal } from "react-dom";

const BackDrop = (props) => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <img src="" alt="" />
    </div>
  );
};

export default function ProjectImageModal() {
  return (
    <>{createPortal(<BackDrop />, document.getElementById("backdrop-root"))}</>
  );
}
