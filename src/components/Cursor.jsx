"use client";

import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        position.current.x = e.clientX;
        position.current.y = e.clientY;

        cursorRef.current.style.background = `radial-gradient(800px circle at ${position.current.x}px ${position.current.y}px, #ffffff26, transparent 80%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-1 transition duration-300 h-full w-screen"
      ref={cursorRef}
      style={{
        background: `radial-gradient(800px circle at 0px 0px, #ffffff26, transparent 80%)`,
      }}
    ></div>
  );
};

export default Cursor;
