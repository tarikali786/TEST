import { useState, useEffect, useRef } from "react";
import "./App.css";

export const Test = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      const scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100);

      return () => clearTimeout(scrollTimeout);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const stars = () => {
      const e = document.createElement("div");
      e.className = "star";
      e.style.zIndex = "0";
      document.body.appendChild(e);
      e.style.left = Math.random() * window.innerWidth + "px";
      const size = Math.random() * 12;
      e.style.fontSize = 12 + size + "px";
      setTimeout(() => {
        document.body.removeChild(e);
      }, 10000);
    };

    setInterval(() => {
      stars();
    }, 100);
  }, []);

  return (
    <div
      style={{
        minHeight: "900vh",
        backgroundColor: "#111",
        color: "#fff",
        maxWidth: "100%",
      }}
    ></div>
  );
};
