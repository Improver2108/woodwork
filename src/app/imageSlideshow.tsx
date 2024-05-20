"use client";

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
    <section className="relative">
      {images.map((image, index) => (
        <div
          className={`absolute transition-opacity opacity-${
            index === imageIndex ? 100 : 0
          }`}
        >
          {image}
        </div>
      ))}
    </section>
  );
};
export default ImageSlideShow;
