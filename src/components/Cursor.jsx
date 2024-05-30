import { useState, useEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = Math.max(0, Math.min(event.clientX, window.innerWidth - 10));
      const y = Math.max(
        0,
        Math.min(
          event.clientY + window.scrollY,
          document.documentElement.scrollHeight - 10
        )
      );
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="hidden md:block cursorReplace">
      <span
        className="absolute h-[100px] w-[100px] bg-white z-10 rounded-full pointer-events-none overflow-hidden blur-3xl"
        style={{
          left: `${position.x - 75}px`,
          top: `${position.y - 75}px`,
          transition: "left 0.1s ease-out, top 0.1s ease-out",
        }}
      ></span>
      <span
        className="absolute h-[10px] w-[10px] bg-black z-10  rounded-full mix-blend-screen pointer-events-none overflow-hidden"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: "left 0.1s ease-out, top 0.1s ease-out",
        }}
      ></span>
      <span
        className="absolute h-[75px] w-[75px] bg-[#43A7B6] z-10 blur-2xl overflow-x-hidden pointer-events-none overflow-hidden"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: "left 0.1s ease-out, top 0.1s ease-out",
        }}
      ></span>
      <span
        className="absolute h-[75px] w-[75px] bg-[#DD5061] z-10 blur-2xl overflow-x-hidden pointer-events-none overflow-hidden"
        style={{
          left: `${position.x - 75}px`,
          top: `${position.y}px`,
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
      ></span>
      <span
        className="absolute h-[75px] w-[75px] bg-[#FDC654] z-10 blur-2xl overflow-x-hidden pointer-events-none overflow-hidden"
        style={{
          left: `${position.x - 50}px`,
          top: `${position.y - 75}px`,
          transition: "left 0.2s ease-out, top 0.2s ease-out",
        }}
      ></span>
    </div>
  );
};

export default Cursor;
