import Link from "next/link";
import Image from "next/image";
import styles from './project-section.module.css'
import LandingProjectTitle from "../landing-project-title/landing-project-title";

export default function LandingProjectSection(title) {
  return (
    <section  className={styles['section']}>
      <LandingProjectTitle title={title} />
    </section>
  );
}
