'use client'
import { useLayoutEffect, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

const linksData = [
  {
    name: "Наша команда",
    link: "/"
  },
  {
    name: "Клубный Дом Mitte",
    link: "/"
  },
  {
    name: "RalphLauren",
    link: "/"
  },
  {
    name: "Портфолио",
    link: "/"
  },
  {
    name: "Контакты",
    link: "/"
  },
]

export default function LandingHeader() {
  const header = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: header.current,
        scrub: true,
        start: "top top",
      },
    })

    timeline
      .fromTo(header.current, {
        position: "static"
      },
      {
        position: "fixed",
        top: 0,
      });
  }, []);

  return (
    <section  className={`${styles['header__wrapper']}`}>
      <div ref={header} className={styles['header']}>
        <ul className={styles['header__menu']}>
          {linksData.map((link, index) => (
            <li key={index}>
              <Link href={link.link} className={styles['header__link']}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Image
          src={'images/qsklogo.svg'}
          alt='logo'
          width={90}
          height={40}
        />
      </div>

    </section>
  );
}

{/* <header className={styles.header}>
          <ul className={styles['header-menu']}>
            <li className={`${styles['header-menu-item']} ${styles['header-menu-item-current']}`}>
              <a>Наша команда</a>
            </li>
            <li className={styles['header-menu-item']}>
              <a>Клубный Дом Mitte</a>
            </li>
            <li className={styles['header-menu-item']}>
              <a>RalphLauren</a>
            </li>
            <li className={styles['header-menu-item']}>
              <a>Портфолио</a>
            </li>
            <li className={styles['header-menu-item']}>
              <a>Контакты</a>
            </li>
          </ul>
          <a href="https://qsk-company.com" className={styles['header-logo']} data-pjax-state="">
            <Image src="./qsklogo.svg" width={200} height={0} alt="Picture of the author" />
          </a>
        </header> */}
