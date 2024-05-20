"use client";
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "./styles.module.scss";
import LandingProjectTitle from "../landing-project-title/landing-project-title";
import LandingProjectSwiper from "../landing-project-swiper/landing-project-swiper";
import LandingProjectVideo from "../landing-project-video/landing-project-video";
import LandingProjectInfo from "../landing-project-info/landing-project-info"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LandingProjectSection() {
  const container = useRef(null);
  const button = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "top +=20px",
        end: "+=500px",
        markers: true,
      },
    });

    timeline
      .to(container.current, { zIndex: 1000 }, 0)
      .to(button.current, { display: "block" }, 0);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.pageContainer}>
      <section ref={container} className={styles.section}>
        <div className={styles["section-wrapper"]}>
          <div className={styles["section-horizontal"]}>
            <LandingProjectTitle title={"Клубный дом Mitte"} />
            <LandingProjectSwiper />
            <LandingProjectInfo text={["ОБЬЕКТ: Апартамент","РАСПОЛОЖЕНИЕ: Цветной бул., 32А, Москва","ПЛОЩАДЬ: 86 М2","СРОК РЕАЛИЗАЦИИ: 2021 г","ЗАКАЗЧИК: Частное лицо","Состав работ:","комплекс отделочных работ включая проектирование и монтаж инженерных систем управление проектом"]}/>
          </div>
          <LandingProjectVideo video={"/images/videos/qsk1.3gp"} />
          <button ref={button} onClick={scrollToTop} className={styles.button}></button>
        </div>
      </section>
    </div>
  );
}

