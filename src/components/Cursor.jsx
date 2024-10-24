"use client";

import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        const left = `${e.clientX}px`;
        const top = `${e.clientY}px`;

        cursorRef.current.style.background = `radial-gradient(1000px at ${left} ${top}, #dddddd26, transparent 80%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute h-screen w-screen"
      ref={cursorRef}
    ></div>
  );
};

export default Cursor;
