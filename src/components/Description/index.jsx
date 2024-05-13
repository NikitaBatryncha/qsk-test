import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';


export default function Description () {
  const phrases = ["Наша команда объединяет топовый", "российский и международный опыт", "в области премиального строительства.", "Мы педанитичные технари с обостренным", "чувством эстетики и неземной эмпатией", "к пожеланиям клиента."]
  const phrasesRight = ["Мы высоко ценим то, чем занимаемся.", "Создавая безопасную, комфортную", "и вдохновляющую среду для других людей,", "мы созидаем мир далеко", "за пределами строительного бизнеса.",]

  return (
    <div className={styles["description-wrapper"]}>
      <div className={styles.description} >
        {
          phrases.map( (phrase, index) => {
            return <AnimatedText key={index}>{phrase}</AnimatedText>
          })
        }
      </div>
      <div className={`${styles.description} ${styles["description-right"]}`} >
        {
          phrasesRight.map( (phrase, index) => {
            return <AnimatedText key={index}>{phrase}</AnimatedText>
          })
        }
      </div>
    </div>
  )
}


function AnimatedText({children}) {

    const text = useRef(null);

  useLayoutEffect( () => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: "0px bottom",
        end: "bottom+=500px bottom",
      },
      opacity: 0,
      left: "-200px",
      ease: "power3.Out"
    })
  }, [])

  return <p ref={text}>{children}</p>
}
