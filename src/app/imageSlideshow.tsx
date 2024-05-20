"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ImageSlideShow = () => {
  const images = ["image1", "image2", "image3", "image4", "image5"];
  const [imageIndex, setImageIndex] = useState(0);
  const timeoutRef = useRef<number>(0);
  const delay = 5000;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    console.log("use effect is running");
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () =>
        setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [imageIndex]);

  return (
    <section className="relative w-full">
      {images.map((image, index) => (
        <Image
          key={index}
          src={`/${image}.png`}
          className={`md:px-6 lg:px-16 mt-3 absolute transition-opacity duration-1000 w-full object-cover ${
            index === imageIndex ? "opacity-100" : "opacity-0"
          }`}
          alt="Home Image"
          width={2000}
          height={2000}
        />
      ))}
    </section>
  );
};
export default ImageSlideShow;
