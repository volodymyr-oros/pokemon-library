import { useState, useRef } from "react";

import styles from "./Slider.module.scss";

type SlideData = {
  desktopImg: string;
  tabletImg: string;
  mobileImg: string;
  title: string;
};

type SliderProps = {
  slides: SlideData[];
};

export default function Slider({ slides }: SliderProps) {
  const [slideIndex, setSlideIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLUListElement>(null);

  const slidesWithClones = [slides[slides.length - 1], ...slides, slides[0]];

  const handleTransitionEnd = () => {
    setIsAnimating(false);

    if (slideIndex === 0) {
      setSlideIndex(slides.length);
    } else if (slideIndex === slides.length + 1) {
      setSlideIndex(1);
    }
  };

  const trackStyle = {
    transform: `translateX(-${slideIndex * 100}%)`,
    transition: isAnimating ? "transform 0.5s ease" : "none",
  };

  const handleNext = () => {
    if (!isAnimating) {
      setSlideIndex((prev) => prev + 1);
      setIsAnimating(true);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setSlideIndex((prev) => prev - 1);
      setIsAnimating(true);
    }
  };

  return (
    <div className={styles.slider}>
      <ul
        className={styles.slider__wrap}
        ref={sliderRef}
        style={trackStyle}
        onTransitionEnd={handleTransitionEnd}
      >
        {slidesWithClones.map((slide, index) => (
          <li key={index} className={`${styles.slider__slide} ${styles.slide}`}>
            <h2 className={styles.slide__title}>{slide.title}</h2>
            <picture className={styles.slide__picture}>
              <source srcSet={slide.mobileImg} media="(max-width: 600px)" />
              <source
                srcSet={slide.tabletImg}
                media="(min-width: 601px) and (max-width: 1024px)"
              />
              <source srcSet={slide.desktopImg} media="(min-width: 1025px)" />
              <img
                src={slide.desktopImg}
                alt={`Image for ${slide.title}`}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </li>
        ))}
      </ul>
      <button
        className={`${styles.slider__button} ${styles["slider__button--prev"]}`}
        onClick={handlePrev}
      >
        <span>Previous slide</span>
      </button>
      <button
        className={`${styles.slider__button} ${styles["slider__button--next"]}`}
        onClick={handleNext}
      >
        <span>Next slide</span>
      </button>
    </div>
  );
}
