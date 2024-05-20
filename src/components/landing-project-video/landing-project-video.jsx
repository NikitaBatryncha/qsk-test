"use client"
import styles from './styles.module.scss'

export default function LandingProjectVideo({video}) {

  return (
    <section className={styles["video-section"]}>
      <video autoPlay muted loop autoBuffer className={styles["video"]}>
        <source src={video} type="video/3gpp"/>
      </video>
    </section>
  );
}
