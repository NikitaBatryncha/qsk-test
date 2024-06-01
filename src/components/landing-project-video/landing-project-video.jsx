"use client";
import {useRef, useEffect} from 'react';
import styles from './styles.module.scss';

export default function LandingProjectVideo({ video }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      // Убедитесь, что атрибут data-video не присутствует
      videoElement.removeAttribute("data-video");
    }
  }, []);
  return (
    <section className={styles["video-section"]}>
      <video
        autoPlay
        muted
        loop
        className={styles["video"]}
      >
        <source src={video} type="video/3gpp" />
      </video>
    </section>
  );
}
