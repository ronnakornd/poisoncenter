import React, { useState, useEffect, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import "../styles/gallery.css";

function ImageGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const [photos, setPhotos] = useState([
    { src: "https://placehold.co/600x400", width: 4, height: 3 },
    { src: "https://placehold.co/600x400", width: 4, height: 3 },
    { src: "https://placehold.co/600x400", width: 4, height: 3 },
    { src: "https://placehold.co/600x400", width: 4, height: 3 },
    { src: "https://placehold.co/600x400", width: 4, height: 3 },
    { src: "https://placehold.co/600x400", width: 4, height: 3 },
  ]);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  return (
    <div className="min-h-96 bg-stone-100 p-5 w-full">
      <h1 className="text-3xl font-bold mb-2">Gallery</h1>
      <div className="flex justify-center flex-wrap gap-1">
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>
  );
}

export default ImageGallery;
