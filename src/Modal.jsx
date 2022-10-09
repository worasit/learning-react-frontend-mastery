import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elementRef = useRef(null);
  if (!elementRef.current) {
    elementRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalElement = document.getElementById("modal");
    modalElement.appendChild(elementRef.current);

    return () => modalElement.removeChild(elementRef.current);
  });

  return createPortal(<div>{children}</div>, elementRef.current);
};

export default Modal;
