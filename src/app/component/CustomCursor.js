"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Check if the screen width is less than 767px
    const isMobile = window.innerWidth < 767;
    if (isMobile) return; // Exit if the screen width is less than 767px

    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const isLink = target && target.tagName === "A";

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        scale: isLink ? 2.5 : 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>
    </div>
  );
}
