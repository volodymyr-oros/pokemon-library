import styles from "./Slider.module.scss";

type SliderProps = {
  slideImageDefault: string;
  slideImageDesktop: string;
  slideImageTablet: string;
  slideImageMobile: string;
};

export default function Slider() {
  return (
    <div className={styles.slider}>
      <ul className={styles.slider__wrap}>
        <li className={`${styles.slider__slide} ${styles.slide}`}>
          <h2 className={styles.slide__title}>Slide 1</h2>
          <picture className={styles.slide__picture}>
            {/* Мобільні — найменше зображення */}
            <source
              srcSet="https://picsum.photos/400" // можна вказати різні розміри
              media="(max-width: 600px)"
            />

            {/* Планшети */}
            <source
              srcSet="https://picsum.photos/800"
              media="(min-width: 601px) and (max-width: 1024px)"
            />

            {/* Десктопи */}
            <source
              srcSet="https://picsum.photos/1200"
              media="(min-width: 1025px)"
            />

            {/* fallback img */}
            <img
              src="https://picsum.photos/800"
              alt="опис зображення"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </li>
      </ul>
      <button
        className={`${styles.slider__button} ${styles["slider__button--prev"]}`}
      >
        Previous slide
      </button>
      <button
        className={`${styles.slider__button} ${styles["slider__button--next"]}`}
      >
        Next slide
      </button>
    </div>
  );
}
