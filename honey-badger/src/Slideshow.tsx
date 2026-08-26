import { useState } from "react";
import how_to_intro from "./assets/how_to_intro.jpg";
import how_to_1 from "./assets/how_to_1.jpg";
import how_to_2 from "./assets/how_to_2.jpg";
import how_to_3 from "./assets/how_to_3.jpg";
import how_to_final from "./assets/how_to_final.jpg";
import dot from "./assets/dot.svg";
import dotSelected from "./assets/dot_gray.svg";
import forward from "./assets/forward.svg";
import back from "./assets/back.svg";
import forward_grey from "./assets/forward_gray.svg";
import back_grey from "./assets/back_grey.svg";
import "./App.css";

interface SlideshowProps {
  setSlideshow: React.Dispatch<React.SetStateAction<boolean>>;
}

function Slideshow({ setSlideshow }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [how_to_intro, how_to_1, how_to_2, how_to_3, how_to_final];
  const arrayLength = images.length;

  function handleForward() {
    if (currentSlide <= arrayLength - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  }

  function handleBackward() {
    if (currentSlide >= 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    } else {
      setCurrentSlide(arrayLength - 1);
    }
  }

  return (
    <div className="slideshow">
      <div className="exitButtonContainer">
        <button
          type="button"
          className="exitButton"
          onClick={() => setSlideshow(false)}
        >
          ✕
        </button>
      </div>

      <div className="slideHorizontalContainer">
        <div className="slideControls">
          <button
            className="slideControlButton"
            type="button"
            onClick={handleBackward}
            disabled={currentSlide === 0}
          >
            <img
              src={currentSlide === 0 ? back_grey : back}
              alt="Back"
              className="slideControlButton"
            />
          </button>
        </div>

        <div className="slideImage">
          <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        </div>

        <div className="slideControls">
          <button
            className="slideControlButton"
            type="button"
            onClick={handleForward}
            disabled={currentSlide === arrayLength - 1}
          >
            <img
              src={currentSlide === arrayLength - 1 ? forward_grey : forward}
              alt="Forward"
              className="slideControlButton"
            />
          </button>
        </div>
      </div>
      <div className="slideDots">
        {images.map((_, index) => (
          <img
            key={index}
            src={currentSlide === index ? dot : dotSelected}
            alt={`Dot ${index + 1}`}
            className="slideDot"
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
