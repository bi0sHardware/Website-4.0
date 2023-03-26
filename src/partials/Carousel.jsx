import React, { useState, useEffect, useRef } from "react";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

const featuredProducts = [
  "https://res.cloudinary.com/dhybspk1v/image/upload/v1679671747/bi0shardware/img9_kc17tp.jpg",
  "https://res.cloudinary.com/dhybspk1v/image/upload/v1679671745/bi0shardware/img12_bmvout.jpg",
  "https://res.cloudinary.com/dhybspk1v/image/upload/v1679671740/bi0shardware/img2_bijpoq.jpg",
];

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-full select-none relative  ">
      <div className="aspect-w-16 aspect-h-9 rounded-full ">
        <img src={featuredProducts[currentIndex]} alt="" />
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center rounded-full ">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <HiArrowSmLeft size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition "
          onClick={handleOnNextClick}
        >
          <HiArrowSmRight size={30} />
        </button>
      </div>
    </div>
  );
}
