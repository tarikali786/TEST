import React, { useEffect } from "react";
import "./App.css";

export const BackgroundAnimation = () => {
  useEffect(() => {
    const starField = document.getElementById("stars");

    // Function to create a star
    const createStar = () => {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = Math.random() * 100 + "vw";
      star.style.top = Math.random() * 100 + "vh";
      star.style.animationDuration = Math.random() * 3 + 2 + "s";
      starField.appendChild(star);

      // Remove star when it reaches bottom of the screen
      setTimeout(() => {
        star.remove();
      }, 5000);
    };

    // Function to create multiple stars
    const createStars = () => {
      for (let i = 0; i < 30; i++) {
        createStar();
      }
    };

    createStars();

    // Event listener for scrolling
    let isScrolling;
    window.addEventListener("scroll", function () {
      window.clearTimeout(isScrolling);
      starField.innerHTML = ""; // Clear existing stars
      createStars(); // Create new stars
      // Set a timeout to clear stars if scrolling stops
      isScrolling = setTimeout(() => {
        starField.innerHTML = "";
      }, 100);
    });

    // Clean up on unmount
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div id="stars" className="stars-container">
      <div id="content" className="content">
        <h1>Scroll down to see the stars!</h1>
        {/* Your content here */}
      </div>
    </div>
  );
};
