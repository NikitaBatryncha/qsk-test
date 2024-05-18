"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import { Autoplay, EffectCreative, Controller, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './styles.module.scss'

SwiperCore.use([Autoplay, EffectCreative, Controller, Navigation]);

const slides = [
  { id: 1, imageUrl: "images/slider/1.jpeg" },
  { id: 2, imageUrl: "images/slider/2.jpeg" },
  { id: 3, imageUrl: "images/slider/3.jpeg" },
  { id: 4, imageUrl: "images/slider/4.jpeg" },
  { id: 5, imageUrl: "images/slider/5.jpeg" },
  { id: 6, imageUrl: "images/slider/6.jpeg" }
];

const initialButtonPosition = {
  left: `50%`,
  top: `50%`,
  transform: `translate(-25%, 181.25px)`
}

export default function App() {

  const totalSlides = slides.length;

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  //button
  const [buttonStyle, setButtonStyle] = useState(initialButtonPosition);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  const handleMouseMove = (event) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().left;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().top;
    setButtonStyle({ left: `calc(${x}px)`, top: `calc(${y}px)` });
  };

  const handleNextSlide = () => {
    if (firstSwiper !== null) {
      firstSwiper.slideNext();
    }
  };

  const handleMouseLeave = () => {
    setButtonStyle(initialButtonPosition);
  };

  return (
    <div className={styles["wrapper"]} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Swiper
        loop={true}
        speed={2000}
        className={styles["slider"]}
        grabCursor={true}
        effect={'creative'}
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
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className={styles["slide"]}>
            <img src={slide.imageUrl} alt="slide" className={styles["slide-image"]}/>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* counter */}
      <div className={styles["counter-container"]}>
        <div className={styles["counter-wrapper"]}>
          <Swiper
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Controller]}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
            className={styles["counter"]}
          >
            {slides.map((slide, index) => (
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
      <button className={styles["slider-button-next"]} style={buttonStyle} onClick={handleNextSlide} />
    </div>
  );
}
