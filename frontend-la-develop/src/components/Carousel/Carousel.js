import React, { useState } from "react";
import "./Carousel.css";
import arrow from "../../images/svg/arrow_left.svg";
const Carousel = ({ items, renderCard, cardName }) => {
  const [active, setActive] = useState(0);
  const count = items.length;
  const MAX_VISIBILITY = count;
  let touchStartX = 0;

  const debounce = (func, delay) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  };
  const handleNavClick = (step) => {
    if ((active > 0 && step === -1) || (active < count - 1 && step > 0)) {
      setActive((prev) => prev + step);
    }
  };
  const handleSwipe = (direction) => {
    const step = direction === "left" ? -1 : 1;
    if ((active > 0 && step === -1) || (active < count - 1 && step > 0)) {
      setActive((prev) => prev + step);
    }
  };

  const handleWheel = (e) => {
    const scrollDirection = e.deltaY > 0 ? 1 : -1;
    handleNavClick(scrollDirection);
  };

  const debouncedHandleTouchMove = debounce((deltaX) => {
    if (deltaX < -50 && active > 0) {
      handleSwipe("left");
    } else if (deltaX > 50 && active < count - 1) {
      handleSwipe("right");
    }
  }, 100);

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX;
    const deltaX = touchStartX - touchEndX;
    debouncedHandleTouchMove(deltaX);
  };

  const renderCardContainer = (item, i) => (
    <div
      key={i}
      className="carousel-card-container"
      style={{
        "--active": i === active ? 1 : 0,
        "--offset": (active - i) / 3,
        "--direction": Math.sign(active - i),
        "--abs-offset": Math.abs(active - i) / 3,
        pointerEvents: active === i ? "auto" : "none",
        opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
        display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
      }}
    >
      {renderCard(item)}
    </div>
  );

  return (
    <div
      className="w-100 overflow-x-md-hidden"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className={`carousel ${
          cardName === "referralProgram" ? "ten-items" : ""
        }`}
      >
        {/* {active > 0 && (
          <button className="nav left" onClick={() => handleNavClick(-1)}>
            <img src={arrow} alt="arrow" />
          </button>
        )} */}

        {items.map(renderCardContainer)}

        {/* {active < count - 1 && (
          <button className="nav right" onClick={() => handleNavClick(1)}>
            <img src={arrow} alt="arrow" />
          </button>
        )} */}
      </div>
    </div>
  );
};
export default Carousel;
