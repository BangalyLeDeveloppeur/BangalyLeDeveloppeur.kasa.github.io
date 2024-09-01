import { useState } from "react";

const Slide = ({ logement }) => {
  const pictures = logement.pictures;
  console.log(pictures)

  const [currentIndex, setCurrentIndex] = useState(0);
  // j'utilise userState pour manipiler les elements dans mon tableau//
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    
      <div className="loge-img">
        <div className="logement-arrow">
          {pictures && pictures.length > 1 && (
            <button onClick={prevSlide}>
              <i className="fa-solid fa-chevron-up"></i>
            </button>
          )}

          {pictures && pictures.length > 1 && (
            <button onClick={nextSlide}>
              <i className="fa-solid fa-chevron-right chevron-droite"></i>
            </button>
          )}
        </div>
        {pictures && pictures.length > 1 && (
          <span>
            {currentIndex + 1}/{pictures.length}
          </span>
        )}
        {pictures && pictures.length > 0 && (
          <img
            src={pictures[currentIndex]}
            alt={`Slide ${currentIndex}`}
            key={currentIndex}
          />
        )}
      </div>
  );
};

export default Slide;
