import Link from "next/link";
import Image from "next/image";
import styles from './styles.module.scss'

export default function LandingProjectTitle({title}) {
  return (

    <div  className={styles["title"]}>
      <div  className={styles["title-verticalContainer"]}>
        <div  className={styles["title-container"]}>
          <div className={styles["title-wrapper"]}>
            <div className={styles["title-item"]}>
              {title}
            </div>
            <div className={styles["title-item"]}>
              {title}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
