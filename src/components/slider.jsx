import { useEffect, useState } from "react";
import leftChevron from "../assets/left-arrow.svg";
import rightChevron from "../assets/right-arrow.svg";
import sliderData from "../data/sliderData";

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1);

  const nextImage = () => {
    setSliderIndex(sliderIndex === sliderData.length ? 1 : sliderIndex + 1);
  };
  const previousImage = () => {
    setSliderIndex(sliderIndex === 1 ? sliderData.length : sliderIndex - 1);
  };

  const Description = (id) => {
    const imageData = sliderData.find((obj) => obj.id === id);
    return imageData ? imageData.description : "";
  };

  /*
  useEffect(() => {
    const currentImg = sliderIndex;
    const setCurrentImg = setInterval(() => {
      setSliderIndex(nextImage);
    }, 2000);
    return () => clearInterval(setCurrentImg(currentImg));
  }, [sliderIndex]);
*/

  // affichage
  return (
    <div className="slider-root">
      <p className="index-info">
        {sliderIndex} / {sliderData.length}
      </p>
      <div className="slider">
        <button
          className="navigation-button prev-button"
          onClick={previousImage}
        >
          <img src={leftChevron} alt="précédent" />
        </button>

        <div className="img-slider">
          <p className="image-info">{Description(sliderIndex)}</p>
          <img
            src={`public/images/img-${sliderIndex}.jpg`}
            alt=""
            className="slider-img"
          />
        </div>

        <button className="navigation-button next-button" onClick={nextImage}>
          <img src={rightChevron} alt="suivant" />
        </button>
      </div>
    </div>
  );
}
