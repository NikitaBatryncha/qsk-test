"use client"
import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  {
    title: "Клубный Дом Cvet-32",
    src: "cvet.jpeg",
    thumb: "thumb1.jpg",
  },
  {
    title: "Клубный Дом Mitte",
    src: "mitte.jpeg",
    thumb: "thumb2.jpg",
  },
  {
    title: "Клубный поселок Arteco",
    src: "arteco.jpeg",
    thumb: "thumb3.jpg",
  },
  {
    title: "Центр международной торговли",
    src: "cmt.jpeg",
    thumb: "thumb4.jpg",
  },
]

gsap.registerPlugin(ScrollTrigger);

export default function LandingProjects() {

  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);
  const tumbContainer = useRef(null);
  const linksContainer = useRef(null);

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const links = ScrollTrigger.create({
      trigger: linksContainer.current,
      pin: true,
      start: "top +=280px",
      end: "bottom -=50px"
    });

    ScrollTrigger.create({
      trigger: imageContainer.current,
      scrub: true,
      pin: true,
      start: "top top",
      end: links.end
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "bottom +=70px",
        end: "bottom top",
      },
    })
    timeline
      .to(container.current, {backgroundColor: 'transparent'}, 0)

    const timeline1 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "top -=30px",
        end: "+=70px",
      },
    })
    timeline1
      .from(container.current, {backgroundColor: 'transparent'}, 0)
  }, [])

  return (
    <section ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src={`/images/${projects[selectedProject].src}`}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="project image"
              priority={true}
            />
          </div>
          <div ref={tumbContainer} className={styles.column} >
            <Image
              src={`/images/${projects[selectedProject].thumb}`}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="project image"
              priority={true}
            />
          </div>
        </div>
      </div>
      <div ref={linksContainer} className={styles.projectList}>
        {
          projects.map((project, index) => {
            return <div key={index} onMouseOver={() => { setSelectedProject(index) }} className={styles.projectEl}>
                      <h2>{project.title}</h2>
                    </div>
          })
        }
      </div>
    </section>
  )
}

