"use client"
import React, { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import { Autoplay, EffectCreative, Controller, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './style.module.scss';

SwiperCore.use([Autoplay, EffectCreative, Controller, Navigation]);

const slidesBig = [
  { id: 1, imageUrl: "/images/slider_1_big.jpeg" },
  { id: 2, imageUrl: "/images/slider_2_big.jpeg" },
  { id: 3, imageUrl: "/images/slider_3_big.jpeg" },
  { id: 4, imageUrl: "/images/slider_4_big.jpeg" }
];

const slides = [
  { id: 1, imageUrl: "/images/1.jpg" },
  { id: 2, imageUrl: "/images/2.jpg" },
  { id: 3, imageUrl: "/images/3.jpg" },
  { id: 4, imageUrl: "/images/4.jpg" }
];

export default function LandingIntro () {
  const background = useRef(null);
  const introImage = useRef(null);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  useLayoutEffect( () => {
      gsap.registerPlugin(ScrollTrigger);

      const timeline = gsap.timeline({
          scrollTrigger: {
              trigger: document.documentElement,
              scrub: true,
              start: "top",
              end: "+=500px",
          },
      })

      timeline
        .from(background.current, {clipPath: `inset(15%)`})
        .to(introImage.current, {height: "200px"}, 0)
  }, [])

  return (
      <section className={styles.homeHeader}>
        <Swiper
          ref={background}
          simulateTouch={false}
          loop={true}
          speed={2000}
          className={styles["backgroundImage"]}
          grabCursor={true}
          autoplay={true}
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
          modules={[EffectCreative, Controller, Autoplay]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
        >
          {slidesBig.map((slide, index) => (
            <SwiperSlide key={slide.id} className={styles["slide"]}>
              <Image
                src={slide.imageUrl}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="background image"
                priority={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.intro}>
          <Swiper
            ref={introImage}
            simulateTouch={false}
            loop={true}
            speed={2000}
            className={`${styles["sliderSmall"]} ${styles["introImage"]}`}
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
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.id} className={styles["slideSmall"]}>
                <Image
                  src={slide.imageUrl}
                  alt="intro image"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={true}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <h1>Мир как вдохновение</h1>
        </div>
      </section>
  )
}
