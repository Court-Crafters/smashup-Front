import { useEffect, useRef } from "react";

const MouseCursor = () => {
  const cursorInnerRef = useRef(null);
  const cursorOuterRef = useRef(null);

  useEffect(() => {
    const cursorInner = cursorInnerRef.current;
    const cursorOuter = cursorOuterRef.current;

    if (!cursorInner || !cursorOuter) return;

    const handleMouseMove = (e) => {
      const clientX = e.clientX;
      const clientY = e.clientY;

      // Move cursors with mouse
      cursorOuter.style.transform = `translate(${clientX}px, ${clientY}px)`;
      cursorInner.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    const handleMouseEnter = (e) => {
      if (e.target.matches("a, .cursor-pointer")) {
        cursorInner.classList.add("cursor-hover");
        cursorOuter.classList.add("cursor-hover");
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.matches("a, .cursor-pointer")) {
        cursorInner.classList.remove("cursor-hover");
        cursorOuter.classList.remove("cursor-hover");
      }
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter, true);
    document.body.addEventListener("mouseleave", handleMouseLeave, true);

    // Make cursor visible
    cursorInner.style.visibility = "visible";
    cursorOuter.style.visibility = "visible";

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter, true);
      document.body.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      <div
        className="mouse-cursor cursor-outer"
        id="cursor-outer"
        ref={cursorOuterRef}
      />
      <div
        className="mouse-cursor cursor-inner"
        id="cursor-inner"
        ref={cursorInnerRef}
      />
    </>
  );
};

export default MouseCursor;
