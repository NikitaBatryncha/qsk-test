import Link from "next/link";
import Image from "next/image";
import styles from './project-title.module.css'

export default function LandingProjectTitle(title) {
  return (
    <div  className={styles["title"]}>
      <div className={styles["title-text"]}>
        - Клубный Дом Mitte -
      </div>
    </div>
  );
}
