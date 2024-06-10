"use client";
import { useCallback, useState } from "react";
import Image from "next/image";
import ImageViewer from "react-simple-image-viewer";

type TImageGridProp = {
  images: string[];
};

export default function ImageGrid({ images }: TImageGridProp) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      {images.map((image, index) => (
        <Image
          src={image}
          width={400}
          height={400}
          alt="image"
          onClick={() => openImageViewer(index)}
          className="border"
          key={index}
        />
      ))}
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </>
  );
}
