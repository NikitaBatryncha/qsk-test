import Link from "next/link";
import Image from "next/image";
import styles from './styles.module.scss'

export default function LandingFooter() {
  return (
    <section  className={styles['footer']}>
      <div className={styles['company-wrapper']}>
        <p style={{fontWeight: 400}}>QSK Company</p>
        <p>Russia, Moscow</p>
      </div>
      <div className={styles['links-wrapper']}>
        <Link
          href={"tel:+79778890716"}
          className={styles["footer-link"]}
        >
          +7 (977) 889-07-16
        </Link>
        <Link
          href={"info@qskmsk.ru"}
          className={styles["footer-link"]}
        >
          info@qskmsk.ru
        </Link>
        <Link
          href={"qsk-company.com"}
          className={styles["footer-link"]}
        >
          qsk-company.com
        </Link>
      </div>

      <div className={styles["social-wrapper"]}>
        <Image
          src={"assets/instagram.svg"}
          alt={'social'}
          width={30}
          height={30}
        />
        <Image
          src={"assets/telegram.svg"}
          alt={'social'}
          width={30}
          height={30}
        />
      </div>
    </section>
  );
}
