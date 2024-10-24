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

        cursorRef.current.style.background = `radial-gradient(1000px circle at ${position.current.x}px ${position.current.y}px, #264fcb26, transparent 80%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-1 transition duration-300 lg:absolute h-screen w-screen"
      ref={cursorRef}
      style={{
        background: `radial-gradient(1000px circle at 0px 0px, #264fcb26, transparent 80%)`,
      }}
    ></div>
  );
};

export default Cursor;
