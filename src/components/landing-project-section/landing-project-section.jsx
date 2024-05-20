"use client";
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "./styles.module.scss";
import LandingProjectTitle from "../landing-project-title/landing-project-title";
import LandingProjectSwiper from "../landing-project-swiper/landing-project-swiper";
import LandingProjectVideo from "../landing-project-video/landing-project-video";
import LandingProjectInfo from "../landing-project-info/landing-project-info";
import LandingProjectHorizontalSwiper from "../landing-project-horizontalSwiper/landing-project-horizontalSwiper"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectsData = [
  {
    title: "Клубный дом CVET 32",
    subtitle: "Cvet-32 | 1",
    slides: [
      { id: 1, imageUrl: "images/slider/1.jpeg" },
      { id: 2, imageUrl: "images/slider/2.jpeg" },
      { id: 3, imageUrl: "images/slider/3.jpeg" },
      { id: 4, imageUrl: "images/slider/4.jpeg" },
      { id: 5, imageUrl: "images/slider/5.jpeg" },
      { id: 6, imageUrl: "images/slider/6.jpeg" }
    ],
    info: [
      {title: "ОБЬЕКТ", item: "Апартамент" },
      {title: "РАСПОЛОЖЕНИЕ", item: "Цветной бул., 32А, Москва" },
      {title: "ПЛОЩАДЬ", item: "86 М2" },
      {title: "СРОК РЕАЛИЗАЦИИ", item: "2021 г" },
      {title: "ЗАКАЗЧИК", item: "Апартамент" },
      {
        title: "Состав работ",
        item: [
          "комплекс отделочных работ включая проектирование и монтаж инженерных систем",
          "управление проектом"
        ]
      },
    ],
    video: "/images/videos/qsk1.3gp",
    secondSlider: null
  },
  {
    title: null,
    subtitle: "Cvet-32 | 2",
    slides: [
      { id: 1, imageUrl: "images/slider1/1.jpeg" },
      { id: 2, imageUrl: "images/slider1/2.jpeg" },
    ],
    info: [
      {title: "ОБЬЕКТ", item: "Апартамент" },
      {title: "РАСПОЛОЖЕНИЕ", item: "Цветной бул., 32А, Москва" },
      {title: "ПЛОЩАДЬ", item: "74 М2" },
      {title: "СРОК РЕАЛИЗАЦИИ", item: "2021 г" },
      {title: "ЗАКАЗЧИК", item: "Частное лицо" },
      {title: "Состав работ", item: [
        "комплекс отделочных работ включая проектирование и монтаж инженерных систем",
        "управление проектом"
        ]
      },
    ],
    video: "",
    secondSlider: [
      { id: 1, imageUrl: "images/slider1/1.1.jpeg" },
      { id: 2, imageUrl: "images/slider1/2.1.jpeg" },
    ]
  },
  {
    title: "Клубный дом MITTE",
    subtitle: "MITTE ERDE",
    slides: [
      { id: 1, imageUrl: "images/slider2/1.jpeg" },
      { id: 2, imageUrl: "images/slider2/2.jpeg" },
    ],
    info: [
      {title: "ОБЬЕКТ", item: "Пилотный апартамент" },
      {title: "РАСПОЛОЖЕНИЕ", item: "Цветной бул., 32А, Москва" },
      {title: "ПЛОЩАДЬ", item: "63 М2" },
      {title: "СРОК РЕАЛИЗАЦИИ", item: "2019 г" },
      {title: "ЗАКАЗЧИК", item: "Hutton Development" },
      {title: "Состав работ", item: [
        "комплекс отделочных работ включая проектирование и монтаж инженерных систем",
        "управление проектом"
        ]
      },
    ],
    video: null,
    secondSlider: [
      { id: 1, imageUrl: "images/slider2/1.1.jpeg" },
      { id: 2, imageUrl: "images/slider2/2.1.jpeg" },
    ]
  },
  {
    title: "Клубный дом MITTE",
    subtitle: "MITTE MOND",
    slides: [
      { id: 1, imageUrl: "images/slider3/1.jpeg" },
      { id: 2, imageUrl: "images/slider3/2.jpeg" },
    ],
    info: [
      {title: "ОБЬЕКТ", item: "Пилотный апартамент" },
      {title: "РАСПОЛОЖЕНИЕ", item: "Цветной бул., 32А, Москва" },
      {title: "ПЛОЩАДЬ", item: "63 М2" },
      {title: "СРОК РЕАЛИЗАЦИИ", item: "2019 г" },
      {title: "ЗАКАЗЧИК", item: "Hutton Development" },
      {title: "Состав работ", item: [
        "комплекс отделочных работ включая проектирование и монтаж инженерных систем",
        "управление проектом"
        ]
      },
    ],
    video: null,
    secondSlider: [
      { id: 1, imageUrl: "images/slider3/1.1.jpeg" },
      { id: 2, imageUrl: "images/slider3/2.1.jpeg" },
    ]
  },
  {
    title: "Клубный поселок ARTECO",
    subtitle: "ArtEco",
    slides: [
      { id: 1, imageUrl: "images/slider4/1.jpeg" },
      { id: 2, imageUrl: "images/slider4/2.jpeg" },
      { id: 2, imageUrl: "images/slider4/3.jpeg" },

    ],
    info: [
      {title: "ОБЬЕКТ", item: "Жилой дом" },
      {title: "РАСПОЛОЖЕНИЕ", item: "Москва, к.п. ArtEco" },
      {title: "ПЛОЩАДЬ", item: "413 М2" },
      {title: "СРОК РЕАЛИЗАЦИИ", item: "в процессе" },
      {title: "ЗАКАЗЧИК", item: "Hutton Development" },
      {title: "Состав работ", item: [
        "Строительно-отделочные",
        "Инженерные",
        "Техническое сопровождение"
        ]
      },
    ],
    video: null,
    secondSlider: [
      { id: 1, imageUrl: "images/slider4/1.1.jpeg" },
      { id: 2, imageUrl: "images/slider4/2.1.jpeg" },
      { id: 1, imageUrl: "images/slider4/3.1.jpeg" },
      { id: 2, imageUrl: "images/slider4/4.1.jpeg" },
    ]
  },
  {
    title: "Центр международной торговли",
    subtitle: "ЦМТ",
    slides: [
      { id: 1, imageUrl: "images/slider5/1.jpeg" },
      { id: 2, imageUrl: "images/slider5/2.jpeg" },
      { id: 2, imageUrl: "images/slider5/3.jpeg" },
      { id: 2, imageUrl: "images/slider5/4.jpeg" },
      { id: 2, imageUrl: "images/slider5/5.jpeg" },
      { id: 2, imageUrl: "images/slider5/6.jpeg" },
      { id: 2, imageUrl: "images/slider5/7.jpeg" },
    ],
    info: [
      {title: "ОБЬЕКТ", item: "Офис" },
      {title: "РАСПОЛОЖЕНИЕ", item: "Краснопресненская набережная, дом 12, Москва" },
      {title: "ПЛОЩАДЬ", item: "400 М2" },
      {title: "СРОК РЕАЛИЗАЦИИ", item: "2021 г." },
      {title: "ЗАКАЗЧИК", item: "АО «Сенс»" },
      {title: "Состав работ", item: [
        "комплекс отделочных работ включая проектирование и монтаж инженерных систем",
        "управление проектом",
        ]
      },
    ],
    video: null,
    secondSlider: null
  }
]

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
          {ProjectsData.map((project, index) => (
            <div className={styles["section-horizontal"]}>
              {project.title ? <LandingProjectTitle title={project.title} /> : null}
              <LandingProjectSwiper swiper={project.slides}/>
              <LandingProjectInfo text={project.info}/>\
              {project.video ? <LandingProjectVideo video={project.video} /> : null}
              {project.secondSlider ? <LandingProjectHorizontalSwiper swiper={project.secondSlider} /> : null}
            </div>
          ))}
          <button ref={button} onClick={scrollToTop} className={styles.button}>up</button>
         </div>
      </section>
    </div>
  );
}

