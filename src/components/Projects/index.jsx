import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "Клубный Дом Cvet-32",
        src: "cvet.jpeg",
        descr: ["ОБЬЕКТ: Апартамент",
        "РАСПОЛОЖЕНИЕ: Цветной бул., 32А, Москва",
        "ПЛОЩАДЬ: 86 М2",
        "СРОК РЕАЛИЗАЦИИ: 2021 г",
        "ЗАКАЗЧИК: Частное лицо",
        "Состав работ:",
        "комплекс отделочных работ включая проектирование и монтаж инженерных систем управление проектом"
      ]
    },
    {
        title: "Клубный Дом Mitte",
        src: "mitte.jpeg",
        descr: ["ОБЬЕКТ: Пилотный апартамент",
        "РАСПОЛОЖЕНИЕ: Цветной бул., 32А, Москва",
        "ПЛОЩАДЬ: 37 М2",
        "СРОК РЕАЛИЗАЦИИ: 2019 г",
        "ЗАКАЗЧИК: Hutton Development",
        "Состав работ:",
        "комплекс отделочных работ включая проектирование и монтаж инженерных систем управление проектом"
      ]
    },
    {
        title: "Клубный поселок Arteco",
        src: "arteco.jpeg",
        descr: ["ОБЬЕКТ: Жилой дом",
        "РАСПОЛОЖЕНИЕ:  Москва, к.п. ArtEco",
        "ПЛОЩАДЬ: 413 М2",
        "СРОК РЕАЛИЗАЦИИ: в процессе",
        "ЗАКАЗЧИК: Hutton Development",
        "Состав работ:",
        "Строительно-отделочные",
        "Инженерные",
        "Техническое сопровождение"
      ]
    },
    {
        title: "Центр международной торговли",
        src: "cmt.jpeg",
        descr: ["ОБЬЕКТ: Офис",
        "РАСПОЛОЖЕНИЕ: Краснопресненская набережная, дом 12, Москва",
        "ПЛОЩАДЬ: 400 М2",
        "СРОК РЕАЛИЗАЦИИ: 2021г.",
        "ЗАКАЗЧИК: АО «Сенс»",
        "Состав работ:",
        "комплекс отделочных работ включая проектирование и монтаж инженерных систем",
        "Управление проектом",
      ]
    },
]

export default function Projects () {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);
    const textContainer = useRef(null);

    useLayoutEffect( () => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: imageContainer.current,
        pin: true,
        scrub: true,
        start: "-=100px",
        end: container.current.height - window.innerHeight,
      })

      ScrollTrigger.create({
        trigger: textContainer.current,
        pin: true,
        scrub: true,
        start: "-=100px",
        end: container.current.height - window.innerHeight - 100,
      })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
          <div className={styles.projectDescription}>
            <div ref={imageContainer} className={styles.imageContainer}>
                <Image
                  src={`/images/${projects[selectedProject].src}`}
                  fill={true}
                  alt="project image"
                  priority={true}
                />
              </div>
              <div className={styles.column} ref={textContainer}>
                  {projects[selectedProject].descr.map((text, index) => {
                    return (
                      <p>
                        {text}
                      </p>
                    )
                  })}
              </div>
            </div>
            <div className={styles.projectList}>
              {
                projects.map( (project, index) => {
                  return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                         </div>
                  })
                }
            </div>
        </div>
    )
}

