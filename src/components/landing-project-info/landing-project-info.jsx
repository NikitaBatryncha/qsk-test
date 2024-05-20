import React from 'react';
import styles from './styles.module.scss';

export default function LandingProjectInfo({ text }) { // Destructure text from props
  return (
    <div className={styles["info"]}>
      {text}
    </div>
  );
}

