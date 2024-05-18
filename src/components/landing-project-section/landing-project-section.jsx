"use client"
import { useLayoutEffect, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "./styles.module.scss";
import LandingProjectTitle from "../landing-project-title/landing-project-title";
import LandingProjectSwiper from "../landing-project-swiper/landing-project-swiper";
import LandingProjectVideo from "../landing-project-video/landing-project-video";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LandingProjectSection() {
  const container = useRef(null);
  const horizontalSection = useRef(null);
  const horizontalContent = useRef(null);
  const button = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
 
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "top top",
        end: "+=500px",
        markers: true,
      },
    });

    timeline
      .to(container.current, { zIndex: 1000 }, 0)
      .to(button.current, { display: "block" }, 0);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      direction: "horizontal",
      gestureDirection: "horizontal",
      smooth: true,
      wrapper: horizontalSection.current,
      content: horizontalContent.current,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
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
        <div ref={horizontalSection} className={styles["section-wrapper"]}>
          <div ref={horizontalContent} className={styles["section-horizontal"]}>
            <LandingProjectTitle title={"Клубный дом Mitte"} />
            <LandingProjectSwiper />
            <LandingProjectVideo video={"/images/videos/qsk1.3gp"} />
          </div>
          <button ref={button} onClick={scrollToTop} className={styles.button}></button>
        </div>
      </section>
    </div>
  );
}
