"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import { Autoplay, EffectCreative, Controller, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './styles.module.scss';

SwiperCore.use([Autoplay, EffectCreative, Controller, Navigation]);

export default function LandingProjectSwiper({ swiper }) {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const container = useRef(null);
  const buttonRef = useRef(null);

  const totalSlides = swiper.length;

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  const handleNextSlide = () => {
    if (firstSwiper !== null) {
      firstSwiper.slideNext();
    }
  };

  useEffect(() => {
    const containerElement = container.current;
    const buttonElement = buttonRef.current;

    const handleMouseMove = (event) => {
      const rect = containerElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const buttonWidth = buttonElement.offsetWidth;
      const buttonHeight = buttonElement.offsetHeight;

      buttonElement.style.left = `${x - buttonWidth / 2}px`;
      buttonElement.style.top = `${y - buttonHeight / 2}px`;
    };

    containerElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      containerElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={container} className={styles["wrapper"]}>
      <Swiper
        loop={true}
        speed={2000}
        className={styles["slider"]}
        grabCursor={true}
        effect={'creative'}
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative, Controller]}
      >
        {swiper.map((slide) => (
          <SwiperSlide key={slide.id} className={styles["slide"]}>
            <img src={slide.imageUrl} alt="slide" className={styles["slide-image"]} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles["counter-container"]}>
        <div className={styles["counter-wrapper"]}>
          <Swiper
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}
            loop={true}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
            modules={[Controller]}
            className={styles["counter"]}
          >
            {swiper.map((slide) => (
              <SwiperSlide key={slide.id} className={styles["counter-item"]}>
                {slide.id}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles["counter-base"]}>
            {totalSlides}
          </div>
        </div>
        <div className={styles["counter-line"]}></div>
      </div>
      <button ref={buttonRef} className={styles["slider-button-next"]} onClick={handleNextSlide}>
        <img src="/arrow-white.svg" alt="arrow" />
      </button>
    </div>
  )
}
