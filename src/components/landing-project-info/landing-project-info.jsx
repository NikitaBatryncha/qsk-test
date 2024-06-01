import React from 'react';
import styles from './styles.module.scss';

export default function LandingProjectInfo({ text }) {
  return (
    <div className={styles["info"]}>
      {text.map((item, index) => (
        <div key={index}>
          <h5>
            <span>
              <b>{item.title}</b>
            </span>
            :
          </h5>
          {Array.isArray(item.item) ? (
            <ul className={styles["list"]}>
              {item.item.map((info, idx) => (
                <li key={idx} className={styles["list-item"]}>
                  <span>
                    {info}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p><span> {item.item}</span></p>
          )}
        </div>
      ))}
    </div>
  );
}

