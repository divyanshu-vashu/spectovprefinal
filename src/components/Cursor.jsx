import { useState, useEffect } from "react";
import { debounce } from "lodash";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = debounce((event) => {
      const x = Math.max(0, Math.min(event.clientX, window.innerWidth - 10));
      const y = Math.max(
        0,
        Math.min(
          event.clientY + window.scrollY,
          document.documentElement.scrollHeight - 10,
        ),
      );
      setPosition({ x, y });
    }, 5); // debounce delay in milliseconds

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursorReplace hidden md:block">
      <span
        className="pointer-events-none absolute z-10 h-[100px] w-[100px] overflow-hidden rounded-full bg-white blur-3xl"
        style={{
          left: `${position.x - 75}px`,
          top: `${position.y - 75}px`,
          transition: "left 0s ease-out, top 0s ease-out",
        }}
      ></span>
      <span
        className="pointer-events-none absolute z-10 h-[10px] w-[10px] overflow-hidden rounded-full bg-black mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: "left 0s ease-out, top 0s ease-out",
        }}
      ></span>
      <span
        className="pointer-events-none absolute z-10 h-[75px] w-[75px] overflow-hidden overflow-x-hidden bg-[#43A7B6] blur-2xl"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: "left 0s ease-out, top 0s ease-out",
        }}
      ></span>
      <span
        className="pointer-events-none absolute z-10 h-[75px] w-[75px] overflow-hidden overflow-x-hidden bg-[#DD5061] blur-2xl"
        style={{
          left: `${position.x - 75}px`,
          top: `${position.y}px`,
          transition: "left 0s ease-out, top 0s ease-out",
        }}
      ></span>
      <span
        className="pointer-events-none absolute z-10 h-[75px] w-[75px] overflow-hidden overflow-x-hidden bg-[#FDC654] blur-2xl"
        style={{
          left: `${position.x - 50}px`,
          top: `${position.y - 75}px`,
          transition: "left 0s ease-out, top 0s ease-out",
        }}
      ></span>
    </div>
  );
};

export default Cursor;
