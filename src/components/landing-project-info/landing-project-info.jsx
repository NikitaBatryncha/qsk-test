import React from 'react';
import styles from './styles.module.scss';

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
    </div>
  );
}

