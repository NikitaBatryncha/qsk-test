import React from 'react';
import styles from './styles.module.scss';

<<<<<<< HEAD
export default function LandingProjectInfo({ text }) {
  return (
    <div className={styles["info"]}>
      {text.map((item, index) => (
        <p key={index}>
          <span>
            <b>{item.title}</b>
          </span>
          :
          {Array.isArray(item.item) ? (
            <ul className={styles["list"]}>
              {item.item.map((info, idx) => (
                <li className={styles["list-item"]}>
                  <span key={idx}>
                     {info}
                  </span>
                </li>
            ))}
            </ul>

          ) : (
            <span> {item.item}</span>
          )}
        </p>
      ))}
=======
export default function LandingProjectInfo({ text }) { // Destructure text from props
  return (
    <div className={styles["info"]}>
      {text}
>>>>>>> 695c90920b66772a2a524e4480a904d1f2971cc2
    </div>
  );
}

